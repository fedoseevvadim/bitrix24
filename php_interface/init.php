<?php

use Bitrix\Main\Page\Asset;

CJSCore::Init(array("jquery" ));

Asset::getInstance()->addJs("/local/js/task.js");