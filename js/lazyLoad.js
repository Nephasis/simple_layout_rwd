(function() {
  $(document).ready(function() {
    lazyImageLoad();
  });

  var lazyImageLoad = function lazyImageLoad(){
    var $window = $(window),
        windowHeight = $window.height(),

        loadImages = function loadImages() {
          var item = $('*[data-lazy-load]'),
              docViewTop = $window.scrollTop(),
              docViewBottom = docViewTop + windowHeight,

              loadImage = function loadImage() {
                var $this = $(this),
                    position = $this.offset().top,
                    source = $this.attr('abc');
                if(docViewBottom > position) {
                  $this.attr('data-lazy-load','loaded');
                  $this.attr('src', source).hide();
                  $this.fadeIn();
                }
              },

              checkIfLoaded = function checkIfLoaded() {
                return $(this).attr('data-lazy-load') === 'unloaded';
              };

          return item.filter(checkIfLoaded).each(loadImage);
        };

    $window.resize(function() {
      windowHeight = $window.height();
      loadImages();
    });

    $window.scroll(function() {
      loadImages();
    });
  };

})();
