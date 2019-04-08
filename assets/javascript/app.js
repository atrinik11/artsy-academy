$(document).ready(function() {
  console.log("Document loaded");
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});
