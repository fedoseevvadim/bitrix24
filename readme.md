
### Встройка в меню компании

/bitrix/components/bitrix/crm.company.details/templates/.default/result_modifier.php

if ( is_array ( $arResult["TABS"] ) ) {

    $tab['id'] = 'company_history';
    $tab['name'] = "История компании";
    $tab['loader']['serviceUrl'] = "/local/components/itjet/history/lazyload.ajax.php?&sites1&sessid=".$_SESSION["fixed_session_id"];
    $tab['loader']['componentData']['template'] = "";
    $tab['loader']['componentData']['params'] = [
        "OWNER_ID"=> $arResult["ENTITY_ID"]
    ];

    $arr1 = array_slice($arResult["TABS"],0,1, true);
    array_push($arr1, $tab );
    $arr2 = array_slice($arResult["TABS"], 1, count($arResult["TABS"]) - 1, true) ;

    $arResult["TABS"] = array_merge( $arr1, $arr2 );

}