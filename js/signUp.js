/* Switch to form and select the chosen membership option */
function selectMembership(option){
    $(`#membership-selection option[value=${option}]`).prop('selected',true)
    $('#membership-select').css('display','none');
    $('#membership-form').css('display','block');
}