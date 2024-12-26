let passwordbutton = document.querySelector('.passwordGeneratorbutton')
let passwordshowsection = document.querySelector('.generatedpasswordshow')


const password =[]

const passwordGenerator=()=>{
    let random = Math.floor(Math.random()*99)
    password.push(random)
    let random1 = Math.floor(Math.random()*99)
    password.push(random1)
    let random2 = Math.floor(Math.random()*99)
    password.push(random2)
    let random3 = Math.floor(Math.random()*99)
    password.push(random3)
}

const showpassword=()=>{
    passwordGenerator()
    passwordshowsection.innerHTML=`${password.join('')}`
    password.length=0
}


passwordbutton.addEventListener('click',showpassword)