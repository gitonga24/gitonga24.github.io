const bioButton = document.querySelector("#toggleBtn");
const content = document.querySelector(".hide");

bioButton.addEventListener("click", function() {
    content.classList.toggle("show");
});




//Code for the image Carousel javascript.

var i = 0;
var images = [];
var time = 3000;

images[0] = './images/virtualPetShelter.jpg';
images[1] = './images/fortuneTeller.jpg'
images[2] = './images/GuessingGame.jpg';
images[3] = './images/VPACode.jpg';
images[4] = './images/GuessingGameCode.jpg';

function changeImg() {
    document.getElementById('slide').src = images[i];

    let carousels = document.getElementsByClassName("image-carousel");

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

//call the function changeImg().
window.onload = changeImg;