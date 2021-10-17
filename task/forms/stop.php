<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$APPLICATION->ShowHead(false);

$taskID = (int) $_GET['taskID'];

?>

<style>
    .webform-field-upload {
        width: 100%;
    }

    .ui-ctl-element {
        white-space: normal;
    }
</style>

<form method="post" action="" enctype="multipart/form-data" id="myform">
    <div class="">
        <textarea class="ui-ctl-element" id="comment" name="comment" style="resize: none; height: 170px; width: 475px;"></textarea>


        <div style="padding-top: 10px;">

            <?
            $elemID = "FILE";

            $APPLICATION->IncludeComponent(
                'bitrix:main.file.input',
                '',
                array(
                    'MODULE_ID' => 'disk',
                    'MULTIPLE'=> 'Y',
                    'ALLOW_UPLOAD' => 'A',
                    'INPUT_NAME_UNSAVED' => $elemID . '_tmp',
                    'CONTROL_ID' => 'FILES',
                    'INPUT_NAME' => $elemID,
                    'INPUT_CAPTION' => 'Перетащите файл сюда или выберите на вашем компьютере'
                ),
                null,
                array('HIDE_ICONS' => 'Y')
            );
            ?>

        </div>


    </div>
</form>