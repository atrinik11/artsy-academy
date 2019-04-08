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
  function checkWindowSize() {
    var $window = $(window);
    var windowWidth = $window.width();
    if (windowWidth >= 769) {
      $("#workHover").hover(
        function() {
          $("#aboutHover").hide();
          $("#programHover").hide();
          $("#registerHover").hide();
          $("#contactHover").hide();
        },
        function() {
          $("#aboutHover").show();
          $("#programHover").show();
          $("#registerHover").show();
          $("#contactHover").show();
        }
      );
    }
  }
});
