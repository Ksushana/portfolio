(function () {
  var header = document.querySelector('.header-fixed');
  if (header) {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 400){
      header.classList.add("header-fixed--sticky");
    }
    else{
      header.classList.remove("header-fixed--sticky");
    }
    });
  }
})();
