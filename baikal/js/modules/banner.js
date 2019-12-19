(function () {
  var banner = document.querySelector('.article__banner-fixed');
  if (!banner) return;
  if ($(window).width() > 991) {
    var banners = banner.querySelectorAll('.banner');
    var leftPanel = document.querySelector('.article__left');

    $(window).scroll(function() {
      if ((leftPanel.getBoundingClientRect().top < 0)&&( leftPanel.getBoundingClientRect().bottom > 500)) {
        banner.classList.remove("article__banner-fixed--normal");
        banner.classList.add("article__banner-fixed--sticky");
      }
      else{
        banner.classList.remove("article__banner-fixed--sticky");
        banner.classList.add("article__banner-fixed--normal");
      }
    });
    $(window).scroll(function () {
      for(var i=0; i< banners.length; i++) {
        if ($(window).scrollTop() >= parseInt(banners[i].attributes.begin_content_height.value))
            if ($(window).scrollTop() - parseInt(banners[i].attributes.begin_content_height.value) < parseInt(banners[i].attributes.content_height.value))
                banners[i].classList.remove('visually-hidden');
            else banners[i].classList.add('visually-hidden');
        else banners[i].classList.add('visually-hidden');
      }
    });
  }
})();
