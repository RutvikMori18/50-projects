const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show inout error messege
function showError(input, message){
    const formcontrol = input.parentElement;
    formcontrol.className='form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText=message;
}

//show success part 
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className='form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

//check required field
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
           if(input.value.trim()===''){
               console.log(input.id);
               showError(input,`${getfieldName(input)} is required`);
           } else {
               showSuccess(input);
           }
    });
}
//get upper case field
function getfieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check length
function checklength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getfieldName(input)} must be atleast ${min} character`);
    }
    else if(input.value.length>max){
        showError(input,`${getfieldName(input)} must be atmost ${max} character`);
    }
    else{
        showSuccess(input);
    }

}
//check password is match or not
function passwordMatch(item1,item2){
    if(item1.value!==item2.value){
        showError(item2 ,'password was not match');
    }else{
        showSuccess(input2);
    }
}
//Event listener
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checklength(username, 6, 15);
    checklength(password,8,25);
    passwordMatch(password,password2);
});
