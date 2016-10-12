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

var selectOrDeselect = function(iconList) {

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

            var ulFromWhichTheLiIsToBeRemoved = liToBeRemoved.parentNode;
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



var theGuestList = document.querySelector('.guest-list');
var addGuest = function(inputText) {

}
theGuestList.addEventListener('keydown', addGuest())











// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
