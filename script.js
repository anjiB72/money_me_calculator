$(document.ready(function(){

function hideHome(){
        var element = document.getElementByClass('userEntry');
        element.addClass('displayNone');
    };
$('#goToCalc').click(function(){
    $('.calculator').removeClass('displayNone');
    //calls hideHome function	
    hideHome();
});
}))