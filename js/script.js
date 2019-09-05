$( document ).ready(function() {
    console.log( "document loaded" );
});

$( window ).on( "load", function() {
    console.log( "window loaded" );
});

AOS.init();



//faq toggle stuff 
$('.togglefaq').click(function(e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.find('.icon-up').addClass('ques-icon').removeClass('icon-up');
    notthis.toggleClass('active').next('.faqanswer').slideToggle(300);
     $(this).toggleClass('active').next().slideToggle("fast");
    $(this).children('i').toggleClass('ques-icon icon-up');
});


//lift-up


var $_ = {
    init: function () {
        this.liftUp();
    },

    liftUp: function () {
        $liftUp = $('.js-lift-up');

        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $liftUp.addClass('_active');
            } else {
                $liftUp.removeClass('_active');
            }
        });

        $liftUp.click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    },

};


function showInputBox(num){

    if(num==1){
    document.getElementById('inputBox').style.display='block';
    }
    else{

    document.getElementById('inputBox').style.display='none';
    }
    return;
}
