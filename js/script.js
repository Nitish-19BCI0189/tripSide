$(function(){
  scrolled();
  var wid = $(window).width();
  $("nav").toggleClass("bg-dark",$(window).scrollTop() > $("nav").height());
  $("nav").toggleClass("d-none",$(window).scrollTop() > $("section").height());
  if(wid<1000)
  {
    $(".layer1 , .layer2").css({
      display:"none"
    });
  }
$(window).resize(function(){
  var width = $(window).width();
  if(width<1000)
  {
    $(".layer1 , .layer2").css({
      display:"none"
    });
  }
  else{
        $(".layer1 , .layer2").css({
        display:"inline",
        bottom:"auto",
        width:"100%"});
        scrolled();
      }
});
$(window).scroll(scrolled);
$("nav button.navbar-toggler").click(function(){
  $("nav").toggleClass("bg-dark");
});
function scrolled(){
  var scroll = $(window).scrollTop();
  var w = $(window).width();
  if(w>1000)
{
    $(".layer1").css({
    width: (100 + scroll/5) + "%"
  });
  $(".layer2").css({
    width: (100 + scroll/5) + "%",
    left: scroll/50 + "%"
  });
  $(".text").css({
    top : -scroll/20 + "%"
  });
}
}
$(document).scroll(function(){
  $("nav").toggleClass("bg-dark",$(window).scrollTop() >100);
    $("nav").toggleClass("d-none",$(window).scrollTop() > $("section").height());
});
});
