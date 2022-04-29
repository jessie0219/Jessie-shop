$(document).ready(function () {
    const $form = $('form');
    $form.submit(function (event) {
      // 阻止原生 submit 行為
      event.preventDefault();
      if ($form.hasClass('needs-validation')) {
        $form.removeClass('needs-validation');
        $form.addClass('was-validated');
      }
  
      if ($('.form-control:invalid').length === 0) {
        // doLogin()
        alert('登入囉:))))');
        location.href = "index.html";
      }
    });
});
