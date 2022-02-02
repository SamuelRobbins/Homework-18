$(document).ready(function() {
    //set opacity to 0.4for all the images
    //opac
$('.photos').css('opacity', 0.4);

    $('.photos').click(
        function(){
            $(this).find('img').stop().fadeto('slow', 1);
        },
        function(){
            $(this).find('img').stop().fadeto('slow', .04);
            

//     $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({left: '250px'});
//     });
  });
});
