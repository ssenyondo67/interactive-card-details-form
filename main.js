const confirm = document.getElementById('confirm');
const continu = document.getElementById('continue');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
   level1.style.display='block';
   level2.style.display='none';

 function next(){  
    if(formIsvalide()){
       level1.style.display='none';
       level2.style.display='flex';
    }
  }



//   --------------validateform--------------
let nameError=document.getElementById('name-error')

function validateName(){
    let name =document.getElementById('formName');
    var value = name.value;

   
    if(value.length ==0 ){
        nameError.innerHTML ='This field is required';
            name.parentNode.classList.add('error');
       
        return false;
    }
    if(!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s$/)){
        nameError.innerHTML ='write full name';
        name.parentNode.classList.add('error');
        return false
    }
    nameError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    name.parentNode.classList.remove('error');
    name.parentNode.classList.add('valid');
    setTimeout(() => {
        name.parentNode.classList.remove('valid'); 
        nameError.innerHTML ='';
    }, 3000);
    let cardValue =document.getElementById('cardFrontName');
    cardValue.innerHTML=value;
    return true;
    

}




let numberError =document.getElementById('number-error')


function validateNumber(){
    let number = document.getElementById('formNumber');
    var value = number.value;

   
    if(value.length ==0 ){
        numberError.innerHTML ='This field is required';
            number.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[0-9]{16}$/)){
                  
        numberError.innerHTML ='16 digits required';
        number.parentNode.classList.add('error');
        return false
    }
    
    number.parentNode.classList.remove('error');
    number.parentNode.classList.add('valid');
    numberError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    setTimeout(() => {
        number.parentNode.classList.remove('valid'); 
        numberError.innerHTML ='';
    }, 3000);
    let cardValue =document.getElementById('cardFrontNumber');
    cardValue.innerHTML=value;
    return true;
    

}


let dateError =document.getElementById('date-error')


function validateMonth(){
    let month= document.getElementById('month');
    var value = month.value;

   
    if(value.length ==0 ){
        dateError.innerHTML ='This field is required';
            month.parentNode.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[0-9]{2}$/)){
                  
        dateError.innerHTML ='2 digits required';
        month.parentNode.parentNode.classList.add('error');
        return false
    }
    
    month.parentNode.parentNode.classList.remove('error');
    month.parentNode.parentNode.classList.add('valid');
    dateError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    setTimeout(() => {
        month.parentNode.parentNode.classList.remove('valid'); 
        dateError.innerHTML ='';
    }, 3000);
    let cardValue =document.getElementById('monthDate');
    cardValue.innerHTML=value;
    return true;

}

function validateYear(){
    let year= document.getElementById('year');
    var value = year.value;

   
    if(value.length ==0 ){
        dateError.innerHTML ='This field is required';
            year.parentNode.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[0-9]{2}$/)){
                  
        dateError.innerHTML ='2 digits required';
        month.parentNode.parentNode.classList.add('error');
        return false
    }
    
    month.parentNode.parentNode.classList.remove('error');
    month.parentNode.parentNode.classList.add('valid');
    dateError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    setTimeout(() => {
        month.parentNode.parentNode.classList.remove('valid'); 
        dateError.innerHTML ='';
    }, 3000);
    let cardValue =document.getElementById('yearDate');
    cardValue.innerHTML=value;
    return true;

}

let cvcError =document.getElementById('cvc-error')

function validateCvc(){
    let cvc= document.getElementById('formCvc');
    var value = cvc.value;

    
    if(value.length ==0 ){
        cvcError.innerHTML ='This field is required';
            cvc.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[0-9]{3}$/)){
                  
        cvcError.innerHTML ='3 digits required';
        cvc.parentNode.classList.add('error');
        return false
    }
    
    cvc.parentNode.classList.remove('error');
    cvc.parentNode.classList.add('valid');
    cvcError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    setTimeout(() => {
        cvc.parentNode.classList.remove('valid'); 
        cvcError.innerHTML ='';
    }, 3000);
    let cardValue =document.getElementById('cardBackCvc');
    cardValue.innerHTML=value;
    return true;

}


function formIsvalide(){
    if(!validateName() || !validateNumber() || !validateMonth() || !validateYear() || !validateCvc()){
        return false;
    }
    return true;
 }