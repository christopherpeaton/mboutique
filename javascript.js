$(function(){
    var srcArray = ['welcome-image.png', 'our-macarons-image.png', 'gifts-parties-image.png'];
    var i = 1;
    $('.jumbotron').css('background-image','url(assets/images/welcome-image.png)');
    var x;
    var src;
    setInterval(function(){
        if(i===3){
            i=0;
        }
        x = srcArray[i];
        $('.jumbotron').fadeOut('slow', function(){
            $('.jumbotron').fadeIn();
            src = 'url(assets/images/' +  x  + ')';
            $('.jumbotron').css('background-image', src);
            $('.jumbotron').fadeIn('slow');
        });
        i+=1;
    }, 5000);
});


