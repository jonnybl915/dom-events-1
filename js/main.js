// GO!

// TASK 1 -- Show/Hide Nav

//selecting the element to which to add the click event
var button = document.querySelector('.hideOrShow');
//setting up the callback function
var hideOrShowNav = function() {
    // console.log(button.innerHTML);
    if (button.innerHTML === "Hide Nav") {
        button.innerHTML = "Show Nav";
    } else {
        button.innerHTML = "Hide Nav";
    }
    var navMenu = document.querySelector('.nav-menu');
    console.log([navMenu]);
    var navMenuStyles = window.getComputedStyle(navMenu);
    //console.log(navMenuStyles);
    console.log('---------------------------------');

    console.log([navMenuStyles]);

    if (navMenuStyles.visibility === "visible") {
        navMenu.style.visibility = "hidden";
    } else {
        navMenu.style.visibility = "visible";
    }
}
//console.log('-------------------------');

button.addEventListener('click', hideOrShowNav);


// TASK 2 -- Select an Icon

var selectOrDeselect = function(iconList){

  if (iconList.currentTarget.classList.contains('selected')) {
    iconList.currentTarget.classList.remove('selected');
  } else {
    iconList.currentTarget.classList.add('selected')
  }
}

var iconList = document.querySelectorAll('.option');
for (var i = 0; i < iconList.length; i++) {
  iconList[i].addEventListener('click', selectOrDeselect)
}

// TASK 3 -- Move Item From List to List


var allLisOnDom = document.querySelectorAll('li');
var putLiOnTheOtherList = function(allLisOnDom) {

var goodStandingUl = document.querySelector('.good-standing-list');
var probationListUl = document.querySelector('.probation-list');

    //removing the Li from the parent ul
    var liToBeRemoved = allLisOnDom.currentTarget;

    if (liToBeRemoved.parentNode.classList.contains('good-standing-list')) {
      //console.log("li to be removed: ", liToBeRemoved);
      var ulFromWhichTheLiIsToBeRemoved = liToBeRemoved.parentNode;
      //console.log("ul from which the li is to be removed: ",ulFromWhichTheLiIsToBeRemoved);
      ulFromWhichTheLiIsToBeRemoved.removeChild(liToBeRemoved);
      probationListUl.appendChild(liToBeRemoved);
    } else {
      goodStandingUl.appendChild(liToBeRemoved);
    }
}
//console.log(allLisOnDom);
for (var i = 0; i < allLisOnDom.length; i++) {
  allLisOnDom[i].addEventListener('click', putLiOnTheOtherList)
}


// TASK 4 -- Add Guest to List
// key item for enter is 13:
var liWhichIsUselessExceptToGrabParent = document.querySelector('.guests');
console.log(liWhichIsUselessExceptToGrabParent);
var parentNodeUl = liWhichIsUselessExceptToGrabParent.parentNode;
console.log(parentNodeUl);
var inputText = document.getElementById('input-field');
  var addGuest = function(inputText) {
     if (keyCode = 13) {
        var guestLi = "<li>" + inputText + "<li>";
        parentNodeUl.appendChild(guestLi);
        return parentNodeUl;
      }
}

inputText.addEventListener('keydown', addGuest());



// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
