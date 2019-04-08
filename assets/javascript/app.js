$(document).ready(function() {
  console.log("Document loaded");
  $(".menu-icon").on("click", function() {
    $(".menu-1").toggleClass("showing");
    $(".close-icon").show();
    $(".menu-icon").hide();
  });
  $(".close-icon").on("click", function() {
    $(".menu-1").toggleClass("showing");
    $(".menu-icon").show();
    $(".close-icon").hide();
  });
  // $('#workHover').hover(
  //   function(){
  //     $('.showing').
  //   }
  // )
});
