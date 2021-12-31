const email=document.querySelector(".form__email");
const password=document.querySelector(".form__password");
const form=document.querySelector(".form");

const showError=(input,message)=>{
    let parent=input.parentElement;
    let error=parent.querySelector(".form__message");
    error.classList.add("error")
    error.innerText=message;
}
const showSusess=(input,message)=>{
    let parent=input.parentElement;
    let error=parent.querySelector(".form__message");
    error.classList.remove("error")
    error.innerText=message;
}

const checkError=(listInput)=>{
    let isEmptyError=false;
    listInput.forEach(input => {
        input.value=input.value.trim();
        if(!input.value){
            isEmptyError=true;
            showError(input,'Vui lòng nhập trường này');
        }
        else{
            showSusess(input,'');
        }
    });
   
}
const checkEmail=(input)=>{
    const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value=input.value.trim();
    if(input.value!==''){
        if(isEmail.test(input.value)){
            showSusess(input,'');
        }
        else{
            showError(input,'Email không đúng định dạng');
        }
    }
}

form.addEventListener("submit",()=>{
    form.preventDefault;
    let isEmptyError = checkError([email,password]);
    let isEmail=checkEmail(email);
})

