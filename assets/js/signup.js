const email=document.querySelector(".form__email");
const password=document.querySelector(".form__password");
const rePassword=document.querySelector(".form__re-password");
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
const checkLenghtPassword=(input,min,max)=>{
    input.value=input.value.trim();
    if(input.value!==''){
        if(input.value.length <min || input.value.length>max){
            showError(input,`Mật khẩu phải lỡn hơn ${min} và nhỏ hơn ${max}!`);
        }
    }
    
}
const checkMatchPassword=(input,pass,rePass)=>{
    //xoa khoang trang
    pass.value=pass.value.trim();
    rePass.value=rePass.value.trim();
    if(input.value!==''){
        if(pass.value!==rePass.value){
            showError(input,'Email không trùng khớp!');
        }
    }
}
form.addEventListener("submit",()=>{
    form.preventDefault;
    let isEmptyError = checkError([email,password,rePassword]);
    let isEmail=checkEmail(email);
    let isEmailLenght=checkLenghtPassword(password,4,9);
    let checkMatchPW=checkMatchPassword(rePassword,password,rePassword);
})

