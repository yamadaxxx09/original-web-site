
$(function() {
  $(".question").click(function() {
    $(this).next(".answer").slideToggle(); 

      if(event.type === "touchstart") {
        event.preventDefault();
      }

      $(this).next(".answer").slideToggle();
  });

});
