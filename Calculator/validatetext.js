function validate(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode !=46 && charCode > 31
        && (charCode < 42 || charCode > 57)) {
            return false;
        }
    if(charCode == 46 && evt.srcElement.value.split('.').length>1){
        return false;
    }

    return true;
}