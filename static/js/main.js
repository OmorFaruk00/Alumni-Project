$( document ).ready(function() {
  $('.nav-list').on('click', 'li', function() {
    $('.nav-list li.active').removeClass('active');
    $(this).addClass('active');
  });
});
