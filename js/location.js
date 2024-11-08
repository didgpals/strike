$(function () {
  $(".join-form .location").on("click", function () {
    $(".dimmed").fadeIn();
    $(".pop-up01").css({ bottom: 0 });
  });
  $(".pop-up-search ul li").on("click", function () {
    let locationValue = $(this).text();
    $(".join-form .location").val(locationValue);
    $(".pop-up01").css({ bottom: "-100%" });
    $(".dimmed").fadeOut();
  });
  $(".btn-close").on("click", function () {
    $(".pop-up").css({ bottom: "-100%" });
    $(".dimmed01").fadeOut();
  });
});
