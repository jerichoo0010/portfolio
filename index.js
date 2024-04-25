
// Time 
var today = new Date();

var formattedTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const timeNowDiv = document.getElementById("timeNow")

timeNowDiv.innerHTML = formattedTime

// Popup Form



function toggleForm() {
    var visibleDiv = document.getElementById("popupForm")
    var overlayDiv = document.getElementById("overlay")

    visibleDiv.classList.toggle('hidden');
    overlayDiv.classList.toggle('hidden');
    
}

function scrollToAbout() {
    var targetSection = document.getElementById('aboutSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToHome() {
    var targetSection = document.getElementById('homeSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTool() {
    var targetSection = document.getElementById('toolSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToWork() {
    var targetSection = document.getElementById('workSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToWebDev() {
    var targetSection = document.getElementById('webDevSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToUIUX() {
    var targetSection = document.getElementById('UiUxSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAppDev() {
    var targetSection = document.getElementById('appDevSection');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function showImage(element) {
    alert('sdas');
    var modal = document.getElementById('imageModal');
    var fullImage = document.getElementById('fullImage');
    var previewImage = element.querySelector('img');
  
    modal.style.display = 'block';
    fullImage.src = previewImage.src;


  }
  
  function hideImage() {
    document.getElementById('imageModal').style.display = 'none';
  }


//Hamburger Menu
const hamMenu = document.querySelector(".ham-menu");
const toggleBtn = document.querySelectorAll(".toggle-btn")

const offScreenMenu = document.querySelector(".homeSectionHeader");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    });
  });