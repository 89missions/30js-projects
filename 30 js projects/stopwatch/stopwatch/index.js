let displaybox = document.querySelector('.display')
let startbtn = document.querySelector('.start')
let stopbtn = document.querySelector('.stop')
let resetbtn = document.querySelector('.reset')
let secondsContainer = document.querySelector('.seconds')
let minutesContainer = document.querySelector('.minutes')

let seconds = 0
let minutes = 0
let hours = 0
let intervalId;

    let secondsIncrement = ()=>{
        if(!intervalId){
            intervalId = setInterval(()=>{
                seconds = seconds + 1;
                secondsContainer.textContent=seconds + " seconds"
                if(seconds===60){
                    seconds = 0;
                    minutes = minutes + 1
                    minutesContainer.textContent= minutes + ' minutes'
                }
            },1000) 
        }  
    }

startbtn.addEventListener('click',secondsIncrement)

   let stop = ()=>{
        clearInterval(intervalId)
        intervalId=null
   }

stopbtn.addEventListener('click',stop)

let reset = ()=>{
    clearInterval(intervalId)
    intervalId=null
    seconds = 0;
    minutes = 0;
    hours = 0;

    secondsContainer.textContent=seconds + " seconds"
    minutesContainer.textContent= minutes  + ' minutes'
}

resetbtn.addEventListener('click',reset)