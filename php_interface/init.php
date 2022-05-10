<?php

AddEventHandler('tasks', 'OnBeforeTaskUpdate', ['CheckTasks', 'OnBeforeTaskUpdate']);

class CheckTasks {

    function OnBeforeTaskUpdate($taskId) {

        if ( $_REQUEST['ACTION'] ) {

            foreach ( $_REQUEST['ACTION'] as $action ) {

                if ( $action['OPERATION'] === 'task.complete' ) {

                    // Проверим есть ли подзадачи у этой задачи
                    // Если есть, то запрещаем завершать задачу
                    $isExist  = self::isParentTaskExist($taskId);

                    if ( $isExist === true ) {
                        throw new \Bitrix\Tasks\ActionFailedException("Для завершения задачи нужно закрыть подзадачи");
                        return false;
                    }


                }

            }

        }

    }

    function isParentTaskExist( $taskId ) {

        if ( !$taskId ) {
            return false;
        }

        $arrData = \Bitrix\Tasks\Internals\TaskTable::getList(
            [
                'filter' => [
                    'PARENT_ID' => (int) $taskId,
                    'STATUS' => 2
                ]
            ]
        )->fetchAll();

        if ( $arrData ) {
            return true;
        }

        return false;
    }

}