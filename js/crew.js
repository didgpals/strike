$(function () {
  $(".tab_tag_menu li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    $(".crew .content > div")
      .eq(index)
      .show()
      .siblings(".content > div")
      .hide();
  });
  $(".btn_like").on("click", function (e) {
    e.preventDefault();
    $(".btn_like").toggleClass("active");
  });
  $(".tab_tag_swiper li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    $(".crew-group-wrap .content > section ")
      .eq(index)
      .show()
      .siblings(".crew-group-wrap  .content > section")
      .hide();
  });
});
