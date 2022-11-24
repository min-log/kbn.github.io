$(function(){
    /* Language/마이페이지/분양담당자 셀렉스박스 스크립트 */
    $('.header-wrap__select__title').click(function(){
        $(this).siblings('.header-wrap__select__sub-menu').toggle(function(){
            var menuParent = $(this).parent('.header-wrap__select');
            if(menuParent.hasClass('active')){
                menuParent.removeClass('active');
            } else {
                menuParent.addClass('active');
            }
        });
    });


    /* GNB 스크립트 */
    $('.gnb-wrap').find('li').on('mouseenter mousemove', function(){

        var ThisON = $(this).offset().left;
        var ThisWh = $(this).width() / 2;
        var ThisONPosition = ThisON + ThisWh;

        //alert(ThisONPosition);
        $('.gnb-wrap__content em').addClass('on');
        $(".gnb-wrap__content em").css("left",ThisONPosition + 'px'); 

        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.gnb-wrap__content').siblings('.gnb-wrap__subgnb-wrap').show();
        var findtext = $(this).find('a').text();
        var submenu = $(this).parents('.gnb-wrap__content').siblings('.gnb-wrap__subgnb-wrap').find('.gnb-wrap__subgnb-wrap__content__submenu');
        if(findtext == '소개'){
            submenu.hide();
            submenu.eq(0).show();
        } else if(findtext == '인체자원현황'){
            submenu.hide();
            submenu.eq(1).show();
        } else if(findtext == '인체자원검색'){
            submenu.hide();
            submenu.eq(2).show();
        } else if(findtext == '분양신청'){
            submenu.hide();
            submenu.eq(3).show();
        } else if(findtext == '알림'){
            submenu.hide();
            submenu.eq(4).show();
        }


        if(findtext == 'Introduction'){
            submenu.hide();
            submenu.eq(0).show();
        } else if(findtext == 'Sample Status'){
            submenu.hide();
            submenu.eq(1).show();
        } else if(findtext == 'Sample Search'){
            submenu.hide();
            submenu.eq(2).show();
        } else if(findtext == 'Application'){
            submenu.hide();
            submenu.eq(3).show();
        } else if(findtext == 'Notice'){
            submenu.hide();
            submenu.eq(4).show();
        }
    });


    $('.gnb-wrap__subgnb-wrap__content-wrap').on('mouseleave', function(){
        $('.gnb-wrap__content__menu').find('li').removeClass('active');
        $('.gnb-wrap__subgnb-wrap').hide();
        $('.gnb-wrap__content em').removeClass('on', {duration:10});
    });

    

    /* gnb 영역(태블릿/모바일용) 스크립트 */
    $('.gnb-wrap-mo__title > a').on('click', function(){
        $(this).parents('.gnb-wrap-mo').fadeOut();   
        // body 스크롤 풀기
        $("html, body").removeClass("scrollOff").off('scroll touchmove mousewheel');
    });

    $('.header-wrap__content__mo-btn').find('a').on('click', function(){
        $('.gnb-wrap-mo').fadeIn();
        // body 스크롤 막음
        $("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
    });

    $('.gnb-wrap-mo__content__menu').eq(0).addClass('active');
    $('.gnb-wrap-mo__content__menu').eq(0).siblings('.gnb-wrap-mo__content__menu-wrap__sub-menu').show();
    $('.gnb-wrap-mo__content__menu').on('click', function(){
        $('.gnb-wrap-mo__content__menu').removeClass('active');
        $('.gnb-wrap-mo__content__menu-wrap__sub-menu').hide();
        $(this).addClass('active');
        $(this).siblings('.gnb-wrap-mo__content__menu-wrap__sub-menu').show();
    });

    //모바일 안보이는 페이지
    if($(window).width() < 640){
        $('.gnb-wrap-mo__content__menu.k').addClass('mo_page_popup');
        $('.gnb-wrap-mo__content__menu.k').parent().addClass('mo_page_noen');
        $('.gnb-wrap-mo').addClass('mo_all');
     }else{
        $('.gnb-wrap-mo__content__menu.k').removeClass('mo_page_popup');
        $('.gnb-wrap-mo__content__menu.k').parent().removeClass('mo_page_noen');
        $('.gnb-wrap-mo').removeClass('mo_all');
     }

    //모바일GNB높이
    var windowHeightGnb = $(window).height();
    var ConHeight = $('gnb-wrap-mo__content__menu-wrap__sub-menu').height();
    $('.gnb-wrap-mo').height(windowHeightGnb);
    $('.gnb-wrap-mo__content').height(ConHeight);


    $(window).resize(function(){
        //모바일GNB높이
        var windowHeightGnb_m = $(window).height();
        var ConHeight_m = $('gnb-wrap-mo__content__menu-wrap__sub-menu').height();
        $('.gnb-wrap-mo').height(windowHeightGnb_m);
        $('.gnb-wrap-mo__content').height(ConHeight_m);


        if($(window).width() >= 1199){
            $('.gnb-wrap-mo').css({'display':'none'});
            $("html, body").removeClass("scrollOff").off('scroll touchmove mousewheel');
        }
        if($(window).width() < 640){
            $('.gnb-wrap-mo__content__menu.k').addClass('mo_page_popup');
            $('.gnb-wrap-mo__content__menu.k').parent().addClass('mo_page_noen');
            $('.gnb-wrap-mo').addClass('mo_all');
         }else{
            $('.gnb-wrap-mo__content__menu.k').removeClass('mo_page_popup');
            $('.gnb-wrap-mo__content__menu.k').parent().removeClass('mo_page_noen');
            $('.gnb-wrap-mo').removeClass('mo_all');
         }

    });


    /*푸터*/
    $('.footer_site_wrap').slick({
          infinite: false,
          speed:300,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:false,
          autoplay: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows:false,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 0
                
              }
            }
          ]
    });

    

    //모바일 팝업 연결 페이지 없음
    $('.mo_page_popup').bind('click',function(){
        $('.mo_page_popup_wrap').addClass('on');
        if($(this).hasClass('k')){
            $('.mo_page_popup_wrap p span').text('인체자원 검색');
            $('.mo_page_popup_wrap img').hide();
            $('.mo_page_popup_wrap img.k').show();

        }else{
            $('.mo_page_popup_wrap p span').text('분양신청서 작성');
            $('.mo_page_popup_wrap img').show();
            $('.mo_page_popup_wrap img.k').hide();
        }
    });
    $('.mo_page_popup_wrap button').click(function(){
        $('.mo_page_popup_wrap').removeClass('on');
    });

   
});