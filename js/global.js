function copyElement( id ) {

    let element = document.getElementById(id);
    let attribute = element.getAttribute('data-clipboard-text');

    BX.clipboard.bindCopyClick(
        BX(id),
        {
            text: attribute
        }
    );

}