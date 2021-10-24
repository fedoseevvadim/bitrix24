<?php

$arrData = \Tables\CatalogTable::getList()->fetchAll();

$arResult['DATA'] = $arrData;

$arrHeaders = [
                ['name' => 'Название'],
                ['name' => 'Описание'],
];

$arResult['HEADERS'] = $arrHeaders;

$this->IncludeComponentTemplate();
