$(function () {
  $(".btn-play-music").on("click", function () {
    $(".dimmd").fadeIn();
  });
  $(".pop-up-choose .btn-close").on("click", function () {
    $(".dimmd").fadeOut();
  });
});
