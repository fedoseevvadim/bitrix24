<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/intranet/public/configs/index.php");
$APPLICATION->SetTitle('Копирование в буфер обмена');

CJSCore::Init (
    array('clipboard')
);

?>
    <div id="INN_1" data-clipboard-text="123456789" onclick="copyElement(this.id)" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Скопировать ИНН в буфер обмена">

        123456789

    </div>

    <div style="padding-top: 1rem;">

    <div id="INN_2" data-clipboard-text="234567891" onclick="copyElement(this.id)" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Скопировать ИНН в буфер обмена">

        234567891

    </div>

<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>