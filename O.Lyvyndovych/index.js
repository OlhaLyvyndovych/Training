var form = document.querySelector('.needs-validation');
form.addEventListener("submit", function(event){
    if(form.checkValidity()===false){
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
});

$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
});

function validateName(){
    var firstName = document.getElementById('#firstName');
    var firstNameReg = /[^'\x22]+/;
    var result = firstNameReg.test(firstName);
    if (result == false){
      alert('Please enter a valid name');
      return false;
    } else {
    return true
    };
};
