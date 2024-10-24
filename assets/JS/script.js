$(function() {
  let isTouchDevice = false;

  $(".question").on("click", function(event) {
    isTouchDevice = true;
    $(this).next(".answer").slideToggle();
    console.log("test")
    event.preventDefault(); 
  });

});

// const images = document.querySelectorAll(".frame");

// function largeImage() {
//   this.style.transform = "scale(2)";
// }

// function resetImage() {
//   this.style.transform = "scale(1)";
// }

images.forEach (images=> {

  image.addEventListener("touchstart", largeImage);
  image.addEventListener("touchend", resetImage);
});

const image = document.querySelectorAll('.image');
let pressTimer;

image.addEventListener('mousedown', function() {
    pressTimer = window.setTimeout(function() {
        image.style.transform = 'scale(2)'; // 2倍に拡大
    }, 500); // 500ms以上押されたら拡大
});

image.addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
    image.style.transform = 'scale(1)'; // 元のサイズに戻す
});

image.addEventListener('mouseleave', function() {
    clearTimeout(pressTimer);
    image.style.transform = 'scale(1)'; // 元のサイズに戻す
});