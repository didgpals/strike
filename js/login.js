$(function () {
  $(".btn-login").on("click", function () {
    // 입력된 값 가져오기
    const loginId = document.querySelector(".login-id").value;
    const loginPw = document.querySelector(".login-pw").value;

    // 로그인 검증 로직 (예제: 하드코딩된 아이디/비밀번호)
    const correctId = "strike@gmail.com";
    const correctPw = "12345678";

    // 로그인 성공 여부 확인
    if (loginId === correctId && loginPw === correctPw) {
      location.href = "../main/main.html";
      // 로그인 성공 후 다른 페이지로 이동하는 경우
      // window.location.href = "welcome.html";
    } else {
      alert(
        "아이디 또는 비밀번호가 잘못되었습니다.\n아이디: strike@gmail.com비밀번호: 12345678"
      );
    }
  });

  $(document).ready(function () {
    $("#cbx_chkAll").click(function () {
      if ($("#cbx_chkAll").is(":checked"))
        $("input[name=chk]").prop("checked", true);
      else $("input[name=chk]").prop("checked", false);
    });

    $("input[name=chk]").click(function () {
      var total = $("input[name=chk]").length;
      var checked = $("input[name=chk]:checked").length;

      if (total != checked) $("#cbx_chkAll").prop("checked", false);
      else $("#cbx_chkAll").prop("checked", true);
    });
  });
});
