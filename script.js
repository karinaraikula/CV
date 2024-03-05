const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const linkedinIcon = document.getElementById("linkedin-img");
const githubIcon = document.getElementById("github-img");
const cvIcon = document.getElementById("cv-icon");

// Define your theme icons
const dayIcon = "./images/moon.png";
const nightIcon = "./images/sun.png";

const dayLinkedin = "./images/linkedin-icon.png";
const nightLinkedin = "./images/linkedin-night.png";

const dayGithub = "./images/github-icon.png";
const nightGithub = "./images/github-night.png";

const dayCV = "./images/cv-light.png";
const nightCV = "./images/cv-dark.png";

// Initial check and setup
function updateIcon() {
  if (document.body.classList.contains("night-theme")) {
    themeIcon.src = nightIcon;
    linkedinIcon.src = nightLinkedin;
    githubIcon.src = nightGithub;
    cvIcon.src = nightCV;
    themeIcon.alt = "Switch to Day Theme";
  } else {
    themeIcon.src = dayIcon;
    linkedinIcon.src = dayLinkedin;
    githubIcon.src = dayGithub;
    cvIcon.src = dayCV;
    themeIcon.alt = "Switch to Night Theme";
  }
}
updateIcon(); // Call on script load to set the correct initial icon

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("night-theme");
  updateIcon();
});

//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

window.addEventListener("load", () => {
  const preload = document.querySelector("#preloader");
  setTimeout(function () {
    document.querySelector("#preloader").style.display = "none";
  }, 1000);
});
