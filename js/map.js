$(function () {
  $(".btn-play-music").on("click", function () {
    $("#dimmed").fadeIn();
  });
  $(".btn_close").on("click", function () {
    $("#dimmed").fadeOut();
  });
});
