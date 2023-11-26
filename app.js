// test //
let displayValues = function (a, b) {
  console.log(a, b)
}



// tabs function //
function openSubj(evt, subjName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(subjName).style.display = "block";
  evt.currentTarget.className += " active";
}



// subj and timer var //
let practiceSubj
let timerImg = 'no-timer'

// select elements //
const people = document.getElementById("peopleSelect")
const timerPeople = document.getElementById("timerPeople")
const bodyparts = document.getElementById("body-partsSelect")
const timerBody = document.getElementById("timerBody")
const animals = document.getElementById("animalsSelect")
const timerAnimals = document.getElementById("timerAnimals")
const buildings = document.getElementById("buildingsSelect")
const timerBuildings = document.getElementById("timerBuildings")
const nature = document.getElementById("natureSelect")
const timerNature = document.getElementById("timerNature")
const others = document.getElementById("othersSelect")
const timerOthers = document.getElementById("timerOthers")
// forms // 
const forms = document.querySelectorAll('form.container')

// function on submit //
for (var i = 0, len = forms.length; i < len; i++) {
  forms[i].addEventListener('submit', () => {
    if (practiceSubj == undefined) {
      alert('Select a practice subject from the drop down to start!')
    }
    displayValues(practiceSubj, timerImg)
    
    localStorage.setItem('practiceSubj', practiceSubj)
    localStorage.setItem('timerImg', timerImg)
  });
}

let getSubjValue = function(a) {
  a.addEventListener('change', function() {
    practiceSubj = this.value;
  }, false)
}

let getTimerValue = function(a) {
  a.addEventListener('change', function() {
    timerImg = this.value;
  }, false)
}

getSubjValue(people)
getSubjValue(bodyparts)
getSubjValue(animals)
getSubjValue(buildings)
getSubjValue(nature)
getSubjValue(others)

getTimerValue(timerPeople)
getTimerValue(timerBody)
getTimerValue(timerAnimals)
getTimerValue(timerBuildings)
getTimerValue(timerNature)
getTimerValue(timerOthers)




