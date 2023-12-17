// get values from local storage //
let practiceSubj = localStorage.getItem('practiceSubj')
let timerImg = localStorage.getItem('timerImg')

// variables //
const startingMinutes = timerImg
let time = startingMinutes * 60
const accessKey = '_p4i1Ni1J4tA6CfGQ_2dyltRJCrsSHbK8Xhz3a6PSnc'
let keyword = practiceSubj
let isPaused = false
let isBW = false
const url = `https://api.unsplash.com/photos/random/?query=${keyword}&client_id=${accessKey}`

// credits // 

const credits = document.getElementById('author')
let creatorName
let creatorLink

// html elements //

const timerElement = document.getElementById('timerElement')
const pause = document.getElementById('pause')
const play = document.getElementById('play')
const refresh = document.getElementById('refresh')
const back = document.getElementById('back')
const imgContainer = document.getElementById('img-container')
const referenceImg = document.getElementById('reference')
const bwSwitch = document.getElementById('bw-switch')

// PLAYER //

back.addEventListener('click', (e) =>{
    localStorage.clear()
    window.location = 'file:///home/sarav9/repos/cs50-finalproject/index.html'

})

pause.addEventListener('click', (e) =>{
    isPaused = true
})
play.addEventListener('click', (e) =>{
    isPaused = false
})

refresh.addEventListener('click', (e) =>{
    location.reload()    
})

bwSwitch.addEventListener('change', (e) =>{
    if (isBW === false) {
        isBW = true
        referenceImg.setAttribute('class', 'blackandwhite')
    } else {
        isBW = false
        referenceImg.removeAttribute('class', 'blackandwhite')
    }
})


// TIMER //
function startTimer() {
    setInterval(startTimer, 1000)

    function startTimer() {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        if (!isPaused) {
            if (seconds < 10) {
                seconds = '0' + seconds
            } else {
                seconds = seconds
            }
        
            timerElement.innerHTML = `${minutes}:${seconds}`
            time--
        } else {
            timerElement.innerHTML = `${minutes}:${seconds}`
        }
        if (minutes == 0 && seconds == 0) {
            location.reload()
        }
        if (timerImg === 'no-timer') {
            timerElement.innerHTML = `00:00`
        }   
    }
}

// CREATE REFERENCE //

function generateImg() {
    fetch(url) 
    .then(function (response) {
        return response.json()
    }) 
    .then(function (jsonData) {
        console.log(jsonData)
        referenceImg.src = jsonData.urls.regular

        creatorName = jsonData.user.first_name + ' ' + jsonData.user.last_name
        creatorLink = jsonData.user.links.html

        credits.href = creatorLink
        credits.innerText = creatorName

    })
}

/// SESSION ///

startTimer()
generateImg()




 

