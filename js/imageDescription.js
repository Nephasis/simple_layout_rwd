(function() {
  $.fn.addDescription = function(bigDivOpts, headerOpts, tagsOpts){
    $(this).hover(function() {
      var $this = $(this),
          bigDivConfig = $.extend({
            position: 'absolute',
            padding : '0',
            width: $this.width(),
            height: $this.find('img').height(),
            textAlign: 'center',
            // masz kilka atrybutów o tej samej nazwie, tylko ostatni zadziała.
            // ja wrzucil w arraya te backgroundImage
            backgroundImage: 'linear-gradient(top, rgba(209,233,144,1) 0%, rgba(170,215,91,1) 100%)',
            backgroundImage: '-o-linear-gradient(top, rgba(209,233,144,1) 0%, rgba(170,215,91,1) 100%)',
            backgroundImage: '-moz-linear-gradient(top, rgba(209,233,144,1) 0%, rgba(170,215,91,1) 100%)',
            backgroundImage: '-webkit-linear-gradient(top, rgba(209,233,144,1) 0%, rgba(170,215,91,1) 100%)',
            backgroundImage: '-ms-linear-gradient(top, rgba(209,233,144,1) 0%, rgba(170,215,91,1) 100%)',
            backgroundImage: '-webkit-gradient( linear, left top, left bottom, color-stop(0, rgba(209,233,144,1)), color-stop(1, rgba(170,215,91,1)) )',
          }, bigDivOpts),

          headerConfig = $.extend({
            marginTop: '80px',
            fontSize:'14px',
            color: '#383838',
            textShadow: '1px 0.5px 1px white'
          }, headerOpts),

          footerConfig = $.extend({
            fontSize:'12px',
            cursor:'pointer',
            color: '#383838'
          }, tagsOpts),

          description = $('<div />', {
            'class' : 'descriptionShow'
          }).css(bigDivConfig).animate({width: 'toggle'}),

          footer = $('<footer />', {
            'class' : 'tags'
          }).css(footerConfig),

          tags1 = $('<a />',{
            text : $this.find('img').data('tags').split(' ')[0] + ', '
          }),

          tags2 = $('<a />', {
            text : $this.find('img').data('tags').split(' ')[1]
          }),

          descriptionHeader = $('<div />', {
            text : $this.find('img').data('description')
          }).css(headerConfig);

          //end of config
      $this.prepend(description
        .append(descriptionHeader)
        .append(footer.append(tags1)
        .append(tags2)));
      }, function() {
          $('.descriptionShow').fadeOut(function () {
          $(this).remove();
        });
      });
  };
})();

