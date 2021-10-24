<?php
Bitrix\Main\UI\Extension::load("ui.vue");
define('VUEJS_DEBUG', true);

$arrItems = $arResult['DATA'];

//var_dump($arrItems);


?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <div id="app">
    </div>

    <script type="text/javascript">

        BX.Vue.create({

            el: '#app',

            data: {
                items: <?=json_encode($arResult['DATA'])?>,
                headers: <?=json_encode($arResult['HEADERS'])?>,
            },

            template:   `
                        <table class="table table-striped" id="checkLists">

                            <thead>
                                    <tr>
                                        <th scope="col" v-for="(item, index) in headers">
                                            <strong>{{ item.name }}</strong>
                                        </th>
                                    </tr>
                            </thead>

                            <tbody>
                                   <tr v-for="(item, index) in items">
                                        <td>
                                            {{ item.UF_NAME }}
                                        </td>
                                        <td>
                                            {{ item.UF_DESCRIPTION }}
                                        </td>
                                   </tr>
                            </tbody>

                        </table>


                        `
        });

    </script>