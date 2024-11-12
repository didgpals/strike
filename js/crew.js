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
    $(
      ".crew-group-wrap .content > section , .crew-before-join-wrap .content > section "
    )
      .eq(index)
      .show()
      .siblings(
        ".crew-group-wrap  .content > section,.crew-before-join-wrap .content > section "
      )
      .hide();
  });
  $(".crew_rm_rate ul li").on("click", function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  });
  $(".btn_rate , .throw-away").on("click", function (e) {
    e.preventDefault();
    $("#dimmed").fadeIn();
  });
  $(".btn_cancle").on("click", function () {
    $("#dimmed").fadeOut();
  });
  $(".btn_submit").on("click", function () {
    location.href = "crew-complete.html";
  });
  $(".btn_submit02").on("click", function () {
    $("#dimmed").fadeOut();
    $(".throw-away").remove();
  });
  $(".crew_info p").click(function () {
    $("#dimmed").show();
  });

  $(".btn_popup02_box li").click(function () {
    $("#dimmed").hide();
  });
});
