const passwordBox = document.querySelector('#password')
const lenght = 12;


const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '0123456789'
const symbol = "'/?'[];>,;[['']]'''"
const allChars = upperCase+lowerCase+number+symbol

const createPassword = ()=>{
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)]
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password += number[Math.floor(Math.random()* number.length)]
    password += symbol[Math.floor(Math.random()* symbol.length)]

    while (lenght>password.length){
        password += allChars[Math.floor(Math.random()* symbol.length)]
    }
    passwordBox.value = password;
}

const copyPassword = ()=>{
    passwordBox.select();
    document.execCommand('copy')
}