$(function () {
  $(".join-form .location").on("click", function () {
    $(".dimmd").fadeIn();
    $(".pop-up").css({ bottom: 0 });
  });
  $(".pop-up-search ul li").on("click", function () {
    let locationValue = $(this).text();
    $(".join-form .location").val(locationValue);
    $(".pop-up").css({ bottom: "-100%" });
    $(".dimmd").fadeOut();
  });
  $(".btn-close").on("click", function () {
    $(".pop-up").css({ bottom: "-100%" });
    $(".dimmd").fadeOut();
  });
});
