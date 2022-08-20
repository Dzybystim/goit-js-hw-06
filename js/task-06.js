const inputElement = document.querySelector('input#validation-input');


const validator = (event) => {
   
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        inputElement.classList.add("invalid");
    
     } else {

        inputElement.classList.add("valid");
      
     }
   
}


inputElement.addEventListener('blur', validator);

