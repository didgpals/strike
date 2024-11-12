$(function () {
  //게시판 서브 탭메뉴
  const tag_list = new Swiper(".tag_list", {
    slidesPerView: "auto",
    spaceBetween: 10,
  });

  $(".tab_page > div").not(":first").hide();
  $(".tag_list li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".tab_page > div").eq(num).show().siblings().hide();
  });
});
