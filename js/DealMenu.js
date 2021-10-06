BX.ready(function () {

    let urlCanbanDeal = "/crm\/deal\/kanban\/category\/0/";
    let urlListDeal = "/crm\/deal\/category\/0/";
    let urlCalendarDeal = "/crm\/deal\/calendar\/category\/0/";

    if ( urlCanbanDeal === window.location.pathname ||
        urlListDeal === window.location.pathname ||
        urlCalendarDeal === window.location.pathname
    ) {

        let panelContainer = document.getElementById('toolbar_deal_list');

        if ( panelContainer ) {

            let menuToolbar = document.getElementById('toolbar_deal_list');

            if ( menuToolbar ) {

                let innerHTML = menuToolbar.innerHTML;

                innerHTML = innerHTML + "&nbsp&nbsp&nbsp <a " +
                    "target='_top' " +
                    "style='cursor: pointer; " +
                    "color: #2067b0;' " +
                    "onclick='BX.SidePanel.Instance.open(\"/dashboard/index.php\", {width: 1000, loader:\"\"});'>" +
                    "<button id=\"toolbar_deal_list_button\" class=\"ui-btn ui-btn-light-border ui-btn-themes ui-btn-icon-print\" title='Меню 1'></button></a>";
                menuToolbar.innerHTML = innerHTML;

            }

        }

    }

});