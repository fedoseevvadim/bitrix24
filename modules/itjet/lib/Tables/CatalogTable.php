<?php
namespace Tables;

use Bitrix\Main\Localization\Loc,
    Bitrix\Main\ORM\Data\DataManager,
    Bitrix\Main\ORM\Fields\IntegerField,
    Bitrix\Main\ORM\Fields\TextField;

Loc::loadMessages(__FILE__);

/**
 * Class CatalogTable
 *
 * Fields:
 * <ul>
 * <li> ID int mandatory
 * <li> UF_NAME text optional
 * <li> UF_DESCRIPTION text optional
 * </ul>
 *
 * @package Bitrix\Catalog
 **/

class CatalogTable extends DataManager
{
    /**
     * Returns DB table name for entity.
     *
     * @return string
     */
    public static function getTableName()
    {
        return 'crm_catalog';
    }

    /**
     * Returns entity map definition.
     *
     * @return array
     */
    public static function getMap()
    {
        return [
            new IntegerField(
                'ID',
                [
                    'primary' => true,
                    'autocomplete' => true,
                    'title' => Loc::getMessage('CATALOG_ENTITY_ID_FIELD')
                ]
            ),
            new TextField(
                'UF_NAME',
                [
                    'title' => Loc::getMessage('CATALOG_ENTITY_UF_NAME_FIELD')
                ]
            ),
            new TextField(
                'UF_DESCRIPTION',
                [
                    'title' => Loc::getMessage('CATALOG_ENTITY_UF_DESCRIPTION_FIELD')
                ]
            ),
        ];
    }
}