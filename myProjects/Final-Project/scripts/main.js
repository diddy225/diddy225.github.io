 var isOpen = true;


$(document).ready(function(){
    $("#dropDown").on('click', windowSlideDown);

}); 


function windowSlideDown(){
    if(isOpen){
        $('nav').addClass('expandNav');
        $('#mobileLinks li').css('visibility', 'visible');
    }else{
        $('nav').removeClass('expandNav');
        $('#mobileLinks li').css('visibility', 'hidden');
    }
    isOpen = !isOpen;
};


    $("#js-rotating").Morphext({
        animation: "swing",
        speed:3000,
        complete: function () {
                }
            });