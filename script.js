$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
body.classList.toggle("dark");

if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
} else {
    modeText.innerText = "Dark mode";

}
});
function changeColor(buttonId) {
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.style.backgroundColor = '#F7F7F7';
});
var clickedButton = document.getElementById(buttonId);
clickedButton.style.backgroundColor = '#EF9B11';
}
document.addEventListener('DOMContentLoaded', function () {
var imageSlider = document.getElementById('imageSlider');

imageSlider.addEventListener('slid.bs.carousel', function (e) {
    var items = e.target.querySelectorAll('.carousel-item');
    var lastItem = items[items.length - 1];

    if (lastItem.classList.contains('active')) {

        items.forEach(function (item) {
            item.classList.remove('active');
        });

        items[0].classList.add('active');
    }
});
});