
// $(function() {
//   $(".question").click(function() {
//     $(this).next(".answer").slideToggle(); 

//       if(event.type === "touchstart") {
//         event.preventDefault();
//       }

//       $(this).next(".answer").slideToggle();
//   });

// });

$(function() {
  let isTouchDevice = false;

  $(".question").on("touchstart", function(event) {
    isTouchDevice = true;
    $(this).next(".answer").slideToggle();
    event.preventDefault(); 
  });

  $(".question").on("click", function(event) {
    if (!isTouchDevice) {
      $(this).next(".answer").slideToggle();
    }
  });
});
