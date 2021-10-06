BX.ready(function () {

    let url = window.location.href.split('/');
    let companyID = url[6];

    let urlCompany = "/crm\/company\/details\/" + companyID + "\/";

    // Если мы находимся в компании
    if ( urlCompany === window.location.pathname ) {

        let detailTabs = document.getElementById("company_" + companyID +"_details_tabs");

        if ( detailTabs ) {

            let fd = new FormData();
            fd.append('COMPANY', companyID);

            showAlertDiv( detailTabs );

            // $.ajax({
            //     url: 'get.php',
            //     type: 'post',
            //     data: fd,
            //     contentType: false,
            //     processData: false,
            //     success: function(response){
            //
            //         let showAlert = JSON.parse(response);
            //
            //         if ( showAlert === true ) {
            //
            //             showAlertDiv( detailTabs );
            //
            //         }
            //
            //     },
            // });

        }
    }

});

function showAlertDiv( detailTabs ) {

    var divAlert = document.createElement("div");
    var text = document.createTextNode("Долг по компаниии: 1000 руб");
    divAlert.appendChild(text);
    divAlert.className = "companyAlert";

    detailTabs.prepend(divAlert);

}