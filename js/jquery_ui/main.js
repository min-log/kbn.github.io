$(function(){

    /* Main Visual 스크립트 */
    $('.main-visual').slick({
        autoplay : true,
        autoplaySpeed : 5000,
        speed:1000 ,
        dots : true,
        slidesToShow : 1,
        pauseOnHover:false
    });

    /* Main Notice 스크립트 */
    $('.main-notice-wrap__content__notice-list').slick({
        autoplay : true,
        autoplaySpeed : 3000,
        vertical: true,
        verticalSwiping: true,
        slidesToShow : 1,
        slidesToScroll: 1
    });
    


    //메인 컨텐츠 위치 및 선택 설정
    var BottomSize =$('.main-notice-wrap').height();
    var BWindowW=$(window).width();
    if(BWindowW <= 640 ){
        var BottomSize =$('.main-notice-wrap').height();
        $('.main-menu-wrap').css({'bottom':BottomSize});
        $('.main-menu-wrap__content > li').css({'opacity': "1"});

    }else{
        $('.main-menu-wrap').css({'bottom':'154px'});
        $('.main-menu-wrap__content > li').animate({'opacity': "0.84"});
        
        $('.main-menu-wrap__content > li').bind('mouseenter click',function(){
            $(this).addClass('pcon');
            $(this).animate({opacity: "1"}, 100);
        }).bind('mouseleave',function(){
            if($(this).hasClass('pcon')){
                $(this).removeClass('pcon', 100);
                $(this).animate({'opacity': "0.84"}, 100);
            }
        });
    }

    $(window).resize(function(){
        var BottomSize =$('.main-notice-wrap').height();
        var BWindowW=$(window).width();

        $('.main-menu-wrap__content > li').removeClass('pcon');
        $('.main-menu-wrap__content li').removeClass('up');
        $('.main-menu-wrap__content li').removeClass('on');
        $('.main-menu-wrap__content li .main-menu-wrap__content__default a').removeClass('on');

        if(BWindowW <= 640 ){
            var BottomSize =$('.main-notice-wrap').height();
            $('.main-menu-wrap').css({'bottom':BottomSize});
            $('.main-menu-wrap__content > li').mouseenter(function(){
                $(this).removeClass('pcon');
            });
        }else{
            $('.main-menu-wrap').css({'bottom':'154px'});
            $('.main-menu-wrap__content > li').mouseenter(function(){
                $(this).addClass('pcon');
            }).mouseleave(function(){
                $(this).removeClass('pcon');
            });


            
        }
    });




    $('.main-menu-wrap__content li:nth-child(1)').bind('click',function(){
        $('.main-menu-wrap__content li .main-menu-wrap__content__default a').removeClass('on');
        $(this).find('.main-menu-wrap__content__default a').addClass('on');

        if($(this).hasClass('up') && $(this).hasClass('on') && $(this).next().hasClass('up')){
             $(this).prev().removeClass('up');
             $(this).prev().prev().removeClass('up');

        }if($(this).hasClass('up') && $(this).hasClass('on')){
            $('.main-menu-wrap__content li').removeClass('up');
            $('.main-menu-wrap__content li').removeClass('on');
            $(this).find('.main-menu-wrap__content__default a').removeClass('on');

        }else{
            $(this).addClass('up');
            $(this).addClass('on');
        }if($(this).hasClass('up') || $(this).hasClass('on')){
            $('.main-menu-wrap__content li').removeClass('up');
            $('.main-menu-wrap__content li').removeClass('on');

            $(this).addClass('up');
            $(this).addClass('on');
             
        }

        $('.main-menu-wrap__content li').next().click(function(){
             $('.main-menu-wrap__content li:nth-child(1)').removeClass('on');
        });


    });

    $('.main-menu-wrap__content li:nth-child(2)').bind('click',function(){
        $('.main-menu-wrap__content li .main-menu-wrap__content__default a').removeClass('on');
        $(this).find('.main-menu-wrap__content__default a').addClass('on');


        if($(this).hasClass('up') && $(this).hasClass('on') && $(this).next().hasClass('up')){
             $('.main-menu-wrap__content li').removeClass('on');
             //$(this).prev().removeClass('up');
             $(this).next().removeClass('up');
             $(this).addClass('on');

        }if($(this).hasClass('up') && $(this).hasClass('on')){
            $('.main-menu-wrap__content li').removeClass('up');
            $('.main-menu-wrap__content li').removeClass('on');
            $(this).find('.main-menu-wrap__content__default a').removeClass('on');

        }else{
           
            $(this).addClass('up');
            $(this).addClass('on');
            $(this).prev().addClass('up');

        }if($(this).hasClass('up') || $(this).hasClass('on')){
           $('.main-menu-wrap__content li').removeClass('on');
            $(this).next().removeClass('up');
            $(this).addClass('on');
            $(this).addClass('up');
             
        }
         
    });

    $('.main-menu-wrap__content li:nth-child(3)').bind('click',function(){
        $('.main-menu-wrap__content li .main-menu-wrap__content__default a').removeClass('on');
        $(this).find('.main-menu-wrap__content__default a').addClass('on');

        if($(this).hasClass('on')){
             $('.main-menu-wrap__content li').removeClass('up');
             $('.main-menu-wrap__content li').removeClass('on');
             $(this).removeClass('on');
             $(this).find('.main-menu-wrap__content__default a').removeClass('on');

        }else{
            $('.main-menu-wrap__content li').removeClass('on');
            $(this).prev().prev().addClass('up');
            $(this).prev().addClass('up');
            $(this).addClass('up');
             $(this).addClass('on');
             
        }
       

    });






   
   
});

