//$(document).ready(function(){ })과 같은 의미
$(function () {
  const select_language = $('.select_language');

  select_language.click(function () {
    $(this).toggleClass('show');
  });
});
