(function() {
  $.fn.inlineOffset = function () {
    if ($(this).css('text-indent') == '0px' && $(this).breakLines() === true) {
      var el = $('<i/>').css('display', 'inline').insertBefore(this[0]);
      pos = el.offset();
      el.remove();
      return pos;
    } else {
      var pos = $(this).offset()
      return pos;
    }
  };

  $.fn.checkPosition = function () {
    var labelPosWindow = elementLabel.position().top - $(window).scrollTop(),
        elemPos = $(this).inlineOffset(),
        elemHeight = $(this).height();
    if (labelPosWindow < 0) {
      var setPosition = elemPos.top + elemHeight;
      return setPosition;
    } else {
      var setPosition = elemPos.top - 30;
      return setPosition;
    }
  }

  $.fn.label = function (options) {
    var config = $.extend({
        position: 'absolute',
        padding: '0.5em',
        backgroundColor: '#383838',
        color: 'white',
        whiteSpace: 'nowrap',
        fontSize: '0.7em',
        opacity: '0.9',
        display: 'hidden',
        }, options);
    $(this).hover(function () {
      var elemPos = $(this).inlineOffset();
          elementLabel = $('<span />', {
            text: $(this).data('label'),
            'class': 'labelShow'
            }).css(config).css({
            'top': elemPos.top - 30,
            'left': elemPos.left - 15
            }).fadeIn();
      $('body').append(elementLabel);
      elementLabel.css({
        'top': $(this).checkPosition()
      });
    }, function () {
      $('body').find('.labelShow').fadeOut('fast', function () {
        $(this).remove();
      });
    });
  };
})();
