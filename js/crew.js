$(function () {
  $(".tab_tag_menu li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    $(".content > div").eq(index).show().siblings(".content > div").hide();
  });
});
