
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

  $(".question").on("click", function(event) {
    isTouchDevice = true;
    $(this).next(".answer").slideToggle();
    console.log("test")
    event.preventDefault(); 
  });

  // $(".question").on("click", function(event) {
  //   if (!isTouchDevice) {
  //     $(this).next(".answer").slideToggle();
  //     console.log("sample");
  //   }
  // });
});
