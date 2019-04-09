$(document).ready(function() {
  console.log("Document loaded");
  //   checkWindowSize();
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
  }

  //   Sticky Nav codes here
  var navScrollPos = $("nav").offset().top;

  $("nav").wrap('<div class="navPlaceholder"></div>');
  $(".navPlaceholder").height($("nav").outerHeight());

  $(window).on("scroll", function() {
    var navScrollTop = $(window).scrollTop();
    $("#scrollStatus").html(navScrollTop);
    if (navScrollTop >= navScrollPos) {
      $("nav").addClass("stickyNav");
      $(".logo").show();
    } else {
      $("nav").removeClass("stickyNav");
      $(".logo").hide();
    }
  });
});
