// DOM elements to use later on.
var elFeelPick = document.getElementById('userFeel');
var elSeePick = document.getElementById('userSee');
var elSlowPick = document.getElementById('userSlow');

// Select the symptoms you feel
var fn1 = () => {
  // Store some variables
  var feel1 = document.getElementById("feel1");
  var feel2 = document.getElementById("feel2");
  var feel3 = document.getElementById("feel3");
  // Quick if statement
  if (feel1.checked == true) {
    feelChoice = feel1.value;
  } else if (feel2.checked == true) {
    feelChoice = feel2.value;
  } else if (feel3.checked == true) {
    feelChoice = feel3.value;
  }
  // Use text in space
  elFeelPick.textContent = feelChoice;
}

// Select the symptoms you see
var fn2 = () => {
  // Store some variables
  var see1 = document.getElementById("see1");
  var see2 = document.getElementById("see2");
  var see3 = document.getElementById("see3");
  // Quick if statement
  if (see1.checked == true) {
    seeChoice = feel1.value;
  } else if (see2.checked == true) {
    seeChoice = see2.value;
  } else if (see3.checked == true) {
    seeChoice = see3.value;
  }
  // Use text in space
  elSeePick.textContent = seeChoice;
}

// Select the symptoms you slow
var fn3 = () => {
  // Store some variables
  var slow1 = document.getElementById("slow1");
  var slow2 = document.getElementById("slow2");
  var slow3 = document.getElementById("slow3");
  // Quick if statement
  if (slow1.checked == true) {
    slowChoice = feel1.value;
  } else if (slow2.checked == true) {
    slowChoice = slow2.value;
  } else if (slow3.checked == true) {
    slowChoice = slow3.value;
  }
  // Use text in space
  elSlowPick.textContent = slowChoice;
}