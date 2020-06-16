//Code for the image Carousel javascript.

var i = 0;
var images = [];
var time = 3000;

images[0] = './images/profilePhoto.jpg';
images[1] = './images/profilePhoto2.jpg';
images[2] = './images/javascript.jpg';
images[3] = './images/JPA.jpg';
images[4] = './images/css.jpg';

function changeImg() {
    document.getElementById('slide').src = images[i];;

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