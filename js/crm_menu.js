// Встраиваемся в меню в сделке
// Счет, Предложение
BX.ready(function () {

    var path = window.location.pathname;
    var arrayOfPath = path.split("/");
    var dealID = 0;

    // Получаем ID сделки
    // ID нужен будет для открытия новой страницы счета
    if ( arrayOfPath ) {

        if ( arrayOfPath.length > 4 ) {

            if ( "/" + arrayOfPath[1] + "/" + arrayOfPath[2] + "/" + arrayOfPath[3] + "/" === '/crm/deal/details/' ) {
                var dealID = arrayOfPath[4];
            }

        }

    }

    if ( dealID > 0 ) {

        // К сожалению попап окно не генерит никаких событий
        // так что сложно определить когда оно проинициализировано
        // поэтому будем проверять каждую секунду его наличие

        var i = 0;
        var bInvoiceMenu = false;
        var checkPopUpInvoice = setInterval(function() {

            // Попробуем получить сгенеренное окно попап
            var invoicePopup = document.getElementById('popup-window-content-menu-popup-crm_menu_popup_deal_converter');

            if ( invoicePopup ) {

                let menuPopUpItems = invoicePopup.getElementsByClassName('menu-popup-items');

                if ( menuPopUpItems && bInvoiceMenu === false ) {

                    //var arrItems = menuPopUpItems.getElementsByClassName('menu-popup-item');

                    for (let i = 0; i < menuPopUpItems.length; i++) {
                        bInvoiceMenu = true;
                    }

                }

            }

            //console.log(i);
            //i++;
        }, 300);

        (new Promise(function (resolve, reject) {

            // Объявим рекурсивную функцию для поиска
            var checkPopUpInvoice = function () {

                // Попробуем получить сгенеренное окно попап
                var invoicePopup = document.getElementById('popup-window-content-menu-popup-crm_menu_popup_deal_converter');

                if (!invoicePopup) {
                    return setTimeout(checkPopUpInvoice, 300);
                }

                let menuPopUpItems = invoicePopup.getElementsByClassName('menu-popup-items');

                if ( menuPopUpItems ) {

                    for( let i = 0; i < menuPopUpItems.length; i++) {

                        let innerHTML = menuPopUpItems[i].innerHTML;
                        innerHTML = innerHTML + "<a class='menu-popup-item crm-convert-item' href='/local/invoice/?ownerID="+dealID+"'><span class='menu-popup-item-icon'></span><span class='menu-popup-item-text'>Новый счет</span></a>";
                        menuPopUpItems[i].innerHTML = innerHTML;

                    }

                }

                // Успех вернем поп ап
                return resolve(invoicePopup);

            };

            checkPopUpInvoice();

        })).then(

        );

    }

});