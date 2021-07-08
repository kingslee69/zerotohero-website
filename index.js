let openProfileNav = false;
let openMainNav = false;



function onProfileClick() {
    var element = document.getElementById("profile-nav");
    
    if(openProfileNav == false) {
        openProfileNav = true;
        element.classList.add('appear');
    } else
    {
        hideProfileNav()
    }
    
}

function hideProfileNav() {
    var element = document.getElementById("profile-nav");
    element.classList.remove('appear');
    openProfileNav = false;
    
}

function showNav() {
    var element = document.getElementById("main-nav");
    if(openMainNav == false) {
        openMainNav = true;
        element.classList.remove('disappear');
    } else
    {
        openMainNav = false;
        element.classList.add('disappear');
        
    }
}

function hideMainNav() {
    var element = document.getElementById("main-nav");
    openMainNav = false;
    element.classList.add('disappear');
    hideProfileNav();
    
}


// JS for the workshop Sort and Search

let dropdownCategories = false;
let dropdownAuthors = false;

function openDropdownCategories() {
    var element = document.getElementById("dropdown-categories");
    hideDropdownAuthors();
    
    if(dropdownCategories == false) {
        dropdownCategories = true;
        element.classList.add('appear');
    } else
    {
        dropdownCategories = false;
        element.classList.remove('appear');
    }
}
function openDropdownAuthors() {
    var element = document.getElementById("dropdown-authors");
    hideDropdownCategories();
    
    if(dropdownAuthors == false) {
        dropdownAuthors = true;
        element.classList.add('appear');
    } else
    {
        dropdownAuthors = false;
        element.classList.remove('appear');
    }
}


function hideDropdownCategories() {
    var element = document.getElementById("dropdown-categories");
    dropdownCategories = false;
    element.classList.remove('appear');    
}
function hideDropdownAuthors() {
    var element = document.getElementById("dropdown-authors");
    dropdownAuthors = false;
    element.classList.remove('appear');    
}
function hideDropdowns() {
    hideDropdownAuthors();
    hideDropdownCategories();
}


// JS for Saved Workshop PAge Info Div
function closeSavedInfoDiv() {
    var element = document.getElementById("saved-info-div");
    element.classList.add('info-disappear');    
}

