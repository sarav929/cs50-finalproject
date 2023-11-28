// get values from local storage //
let practiceSubj = localStorage.getItem('practiceSubj')
let timerImg = localStorage.getItem('timerImg')

// TIMER //

let pause = document.getElementById('pause')
let play = document.getElementById('play')
let isPaused = false

pause.addEventListener('click', (e) =>{
    isPaused = true
})
play.addEventListener('click', (e) =>{
    isPaused = false
})

const startingMinutes = timerImg
let time = startingMinutes * 60

const timerElement = document.getElementById('timerElement')
let timerSession = document.createElement('h1')
timerElement.appendChild(timerSession)

setInterval(updateTimer, 1000)

function updateTimer() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    if (!isPaused) {
        if (seconds < 10) {
            seconds = '0' + seconds
        } else {
            seconds = seconds
        }
    
        timerSession.innerHTML = `${minutes}:${seconds}`
        time--
    } else {
        timerSession.innerHTML = `${minutes}:${seconds}`
    }  
}


 

