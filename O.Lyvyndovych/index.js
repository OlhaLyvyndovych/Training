var form = document.querySelector('.needs-validation');
form.addEventListener("submit", function(event){
    if(form.checkValidity()===false){
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
});

$(document).ready(function(){
    var date_input=$('input[name="date"]');
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'dd/mm/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
});

const patterns = {
  names: /^[a-z]+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\d\w@-]{8,20}$/i,
  address: /^[a-z0-9]+$/i
};


 function validateFirst(){
    let firstName = document.getElementById('firstName').value;
    let firstResult = patterns.names.test(firstName);
    if (firstResult == false) alert('Please correct your first name');
};



  function validateLast(){
     let lastName = document.getElementById('lastName').value;
     let lastResult = patterns.names.test(lastName);
     if (lastResult == false) alert('Please correct your last name');

   };

   function validateBirthday(){
      let birthday = document.getElementById('date').value;
      if (birthday == '') alert('Please fill in the field');

    };

    function validateCountry(){
       let country = document.getElementById('country').value;
       if (country == ' ') alert('Please choose a country');

     };

   function validateEmail(){
      let email = document.getElementById('email').value;
      let emailResult = patterns.email.test(email);
      if (emailResult == false) alert('Email address is not valid');

    };

    function validatePassword(){
       let password = document.getElementById('password').value;
       let passwordResult = patterns.password.test(password);
       if (passwordResult == false) alert('Please correct your password');
     };
