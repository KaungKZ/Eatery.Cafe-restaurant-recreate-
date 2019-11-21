$(window).scroll(function() {
  if ($("#nav-bar").offset().top > 50) {
    $("#nav-bar").addClass("black");
  } else {
    $("#nav-bar").removeClass("black");
  }
});
