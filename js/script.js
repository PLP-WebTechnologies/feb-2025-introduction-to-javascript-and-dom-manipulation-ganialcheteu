// retreive elements in the Dom
// about repository
let linkAssigment = document.getElementById("linkAssigment");
let content = document.getElementById("content");
//show and hide image buttons
let image = document.getElementById("image");
let buttons = document.getElementsByTagName("button");

linkAssigment.style.textDecoration = "none";
linkAssigment.style.color = "#000000";

// change dynamically the content of the linkAssigment
function changeContent() {
  linkAssigment.addEventListener("mouseover", () => {
    content.style.transition = "500ms ease-in-out"; 
    content.innerHTML = "visit the assigment in remote repository with gitHub";
    content.style.color = "#cd0fac";
    linkAssigment.textContent = "GitHub Repository";
  });
  linkAssigment.addEventListener("mouseout", () => {
    content.innerHTML = "";
    content.style.color = "";
    linkAssigment.innerHTML = "Assigment Week 5";
  });
}
changeContent();

//show or hide picture
function showPicture() {
  buttons[0].addEventListener("click", () => {
    image.src = "./image/image.png";
  });
  buttons[1].addEventListener("click", () => {
    image.src= " ";
  });
}
showPicture();
