$(document).ready(function() {
  var lastScrollTop = 0;
  var tempScroll = 20;
  var secnavHeight = $('nav').outerHeight() +8;
  $(window).scroll(function(event){
    var st = ($(this).scrollTop() < $('nav.nav-pc').outerHeight()) ?0:$(this).scrollTop();
    if (st > lastScrollTop + tempScroll){
      $('nav').css("top" , -secnavHeight + "px");
      tempScroll = 0;
    } else {
      $('nav').css("top" , "0px");
      tempScroll = 20;
    }
    lastScrollTop = st;
  });
  $('#nav-search').click(function() {
    console.log("nav-search clicked.");
    if($('div.nav-searchbar').css('left') != "0px"){
      $('div.nav-searchbar').css('left','0');
      $('#nav-searchbar-bg').css('display','block');
    }
  });
  $('#nav-searchbar-bg').click(function() {
    if($('div.nav-searchbar').css('left') == "0px"){
      $('div.nav-searchbar').css('left','150%');
      $('#nav-searchbar-bg').css('display','none');
    }
  });
});

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


//news img comment
/*
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
*/