

$(window).on('load', function(){  

var videoSrc = $("#myvideo").attr("src");

$("#myvideo").attr("src", videoSrc+"autoplay=1");
var videoSrc = $("#myvideo").attr("src");


$('.loader').fadeOut();
$(".loading").css("visibility", "visible");


});



