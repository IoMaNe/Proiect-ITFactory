/*            Light and dark mode -START*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

/*               Light and dark mode -END                     */
/*------------------------------------------------------------- */

/*              Scroll images-FIRST- START                    */
const imageUrls = [
    "images/url1.png",
    "images/url2.png",
    "images/url3.png"
];

let currentImageIndex = 0;

function showCurrentImage() {
    const image = document.querySelector('.gallery-image');
    image.src = imageUrls[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    showCurrentImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    showCurrentImage();
}

document.getElementById('nextBtn').addEventListener('click', showNextImage);

document.getElementById('prevBtn').addEventListener('click', showPreviousImage);

showCurrentImage();

/*              Scroll images-FIRST -END                    */
/*------------------------------------------------------------- */
/*              Scroll images-SECOND -START                    */

const imageUrlsTwo = [
    "images/url4.png",
    "images/url5.png",
    "images/url6.png"
  
];

let currentImageIndexTwo = 0;

function showCurrentImageTwo() {
    const imageTwo = document.querySelector('.gallery-imageTwo');
    imageTwo.src = imageUrlsTwo[currentImageIndexTwo];
}

function showNextImageTwo() {
    currentImageIndexTwo = (currentImageIndexTwo + 1) % imageUrls.length;
    showCurrentImageTwo();
}

function showPreviousImageTwo() {
    currentImageIndexTwo = (currentImageIndexTwo - 1 + imageUrlsTwo.length) % imageUrlsTwo.length;
    showCurrentImageTwo();
}

document.getElementById('nextBtnTwo').addEventListener('click', showNextImageTwo);

document.getElementById('prevBtnTwo').addEventListener('click', showPreviousImageTwo);


showCurrentImageTwo();

/*              Scroll images-SECOND -END                    */
/*------------------------------------------------------------- */


