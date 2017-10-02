(function ($) {
  $.fn.breakLines = function () {
    var fontSize = $(this).css('font-size'),
        width = $(this).width(),
        height = $(this).height(),
        insert = $(this).text(),
        elem = $('<span />', {
          text: insert,
          'class' : 'copy'}).css({'font-size' : fontSize, 'white-space' : 'nowrap'});
    $(this).append(elem);
    var newHeight = $('.copy').height();
    if (newHeight != height) {
      elem.remove();
      return true
    }
    else {
      elem.remove();
      return false
    };
  }
})(jQuery);
