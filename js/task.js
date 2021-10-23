BX.ready(function () {

    let user = BX.message('USER_ID');// получим текущего пользователя
    let task = getTaskID();

    if ( task ) { // will return true

        let checkExist = setInterval(function() {

            $('.task-detail-checklist').remove(); // убираем чек лист
            $('.task-detail-properties').remove(); // скрыть дополнительные поля


            let buttonBar = document.getElementById('bx-component-scope-bitrix_tasks_widget_buttonstask_1');
            let sidebar = document.getElementById('sidebar');

            document.getElementById('task-time-switcher').remove(); // Убираем время

            //document.querySelectorAll('task-more-button ui-btn ui-btn-light-border ui-btn-dropdown').forEach(e => e.remove());

            if ( sidebar ) {

                let sidebarItems = sidebar.getElementsByClassName('task-detail-sidebar-item');

                for( let i = 0; i < sidebarItems.length; i++) {

                    // убираем Автоматизация роботы (из правой части)
                    if ( sidebarItems[i].className === "task-detail-sidebar-item task-detail-sidebar-item-robot" ) {
                        sidebarItems[i].remove();
                        break;
                    }

                }

            }


            if ( buttonBar !== null ) {

                clearInterval(checkExist);

                let spans = buttonBar.getElementsByTagName('span');

                for( let i = 0; i < spans.length; i++) {

                    // Убираем кнопку
                    if (spans[i].className === "task-view-button timer-start ui-btn ui-btn-success" ) {
                        spans[i].remove();
                    }

                    // Скрываем кнопку "Завершить"
                    if (spans[i].className === "task-view-button complete pause ui-btn ui-btn-success" ) {
                        spans[i].remove();
                    }

                    // remove button pause
                    if (spans[i].className === "task-view-button timer-pause ui-btn ui-btn-light-border" ) {
                        spans[i].remove();
                    }

                    // // remove ЕЩЕ
                    if (spans[i].className === "task-more-button ui-btn ui-btn-light-border ui-btn-dropdown" ) {
                        spans[i].remove();
                    }

                }

                showButtons( task, user );

            }
        }, 1);

    }

});

function getTaskID () {

    var entity_xml_id = document.getElementsByName('ENTITY_XML_ID');

    if ( typeof entity_xml_id === 'object' ) {

        if ( entity_xml_id.length > 0 ) {
            return Number(entity_xml_id[0].value.split("_").pop());
        } else {
            return 0
        }
    }
}

function showButtons( task, user ) {

    if ( task ) {

        let fd = new FormData();
        fd.append('task', task);
        fd.append('user', user);

        let buttonBar = document.getElementById('bx-component-scope-bitrix_tasks_widget_buttonstask_1');
        let additionalButtons = document.getElementById('additionalButtons');

        if ( additionalButtons != null ) {
            additionalButtons.remove();
        }

        let innerHTML = buttonBar.innerHTML;


        buttonBar.innerHTML = "" +
            "<div id='additionalButtons'>" +
                "<a onclick='openFormPauseWork();' class='ui-btn ui-btn-success' title='Работы приостановлены'>Приостановить</a>"+
                "<a onclick='openFormStopWork();' class='ui-btn ui-btn-success' title='Завершить'>Завершить</a>"+
                "<a onclick='openFormDelegate();' class='ui-btn ui-btn-success' title='Делегировать'>Делегировать</a>" +
            "</div>";

    }

};

function openFormStopWork () {

    dialog = new BX.CDialog({
        'title' : 'Завершить',
        'content_url': '/local/task/forms/stop.php?taskID=' + getTaskID(),
        'width' : 500,
        'height' : 300,
        'resizable' : false,
        buttons: ['<input class="modal-save-info ui-btn ui-btn-success" id="SEND" type="button" value="Завершить" onclick="stopTask()" />','<input type="button" class="modal-save-info ui-btn ui-btn-danger" name="close" value="Закрыть" id="close" onclick="BX.WindowManager.Get().Close();">']
    }).Show();

}

function openFormDelegate () {
    alert('Здесь будет форма');
}

function openFormPauseWork() {
    alert('Здесь будет форма');
}