$(function(){
	/*공통*/
	/*line_map*/
	$('.line_map .wrap > li > a').bind('click',function(){

		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
		}else{
			$('.line_map .wrap > li').removeClass('on');
			$(this).parent().addClass('on');
		}
	});
	/*//공통*/

	/*팝업*/

	//팝업 가운데정렬
	$('.popup_wrap').each(function(index, item){

		var WindowHeight = $(window).height();
		var PopupBoxHeight = $(this).height();
		var WindowSide = WindowHeight - PopupBoxHeight;
		var WindowSideTop = WindowSide / 2;
		$(this).css({'top':WindowSideTop});
	
		var PopupBoxWidth = $(this).width();
		var WindowSideleft = PopupBoxWidth / 2;
		$(this).css({'margin-left':-WindowSideleft});

       
       	var PopupBoxHeight_tit =$(this).find('.popup_tit').height();
		var PopupBoxHeight_con =PopupBoxHeight - PopupBoxHeight_tit;


		if(PopupBoxHeight_con < $(this).find('.popup_content').height()){
			$(this).find('.popup_content').height(PopupBoxHeight_con);
		
		}

        $('.scroll_wrap').height('500px');
        if($(window).width()  < 640){
        		$('.scroll_wrap').height('100%');
        }


		if(WindowHeight < PopupBoxHeight && $(window).width() > 768){
			var maxH= WindowHeight - '40';
			$(this).css({'max-height':maxH});

			var WindowHeight = $(window).height();
			var PopupBoxHeight = $(this).height();
			var WindowSide = WindowHeight - PopupBoxHeight;
			var WindowSideTop = WindowSide / 2;
			$(this).css({'top':WindowSideTop});


		}
	});

	$(window).resize(function(){

		if($(window).width()  < 640){
        		$('.scroll_wrap').height('100%');
        }else{
        	$('.scroll_wrap').height('500px');
        }

		$('.popup_wrap').each(function(index, item){
			var WindowHeight_re = $(window).height();
			var PopupBoxHeight_re = $(this).height();
			var WindowSide_re = WindowHeight_re - PopupBoxHeight_re;
			var WindowSideTop_re = WindowSide_re / 2;
			$(this).css({'top':WindowSideTop_re});
		
			var PopupBoxWidth = $(this).width();
			var WindowSideleft = PopupBoxWidth / 2;
			$(this).css({'margin-left':-WindowSideleft});

			var PopupBoxWidth = $(this).width();
			var WindowSideleft = PopupBoxWidth / 2;
			$(this).css({'margin-left':-WindowSideleft});

			var PopupBoxHeight_tit_re =$(this).find('.popup_tit').height();
			var PopupBoxHeight_con_re =PopupBoxHeight_re - PopupBoxHeight_tit_re;
			if(PopupBoxHeight_con_re < $(this).find('.popup_content').height()){
				$(this).find('.popup_content').height('PopupBoxHeight_con_re');
				$('.popup_content.scr').height('PopupBoxHeight_con_re');
				$('.scroll_wrap').height('PopupBoxHeight_con_re');
			}
		});
	});

	//팝업닫기
	$('.popup_closs_btn').bind('click',function(){
		$('#PopUp > div').removeClass('active');
		$('.popup_bg').removeClass('on');
		// body 스크롤 풀기
        //$("html, body").removeClass("scrollOff").off('scroll touchmove mousewheel');
	});


	//해당 팝업창 열어주기

	$('.info_map_link a').bind('click',function(){
		var map_link_btn=$(this).parent().attr('class');
		var number =map_link_btn.replace(/[^0-9]/g,"");
		var popname = "popup_map_link_";
		var onPop= "."+ popname + number;
		$('#PopUp').find(onPop).addClass('active');
		$('.popup_bg').addClass('on');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
        return false;
	});


	$('.btn_amount_popup, .add_search_pop_btn').bind('click',function(){
		$('.amount_popup').addClass('active');
		$('.popup_bg').addClass('on');
        return false;
	});
	$('.btn_opinion').bind('click',function(){
		$('.opinion_popup').addClass('active');
		$('.popup_bg').addClass('on');
        return false;
	});


	/*팝업*/

	/*키워드검색조건설정*/
	$('.kwyword_setting_btn').bind('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.kwyword_search_wrap').removeClass('on');
			$(this).find('span').text('검색 조건 설정 열기');
		}else{
			$(this).addClass('on');
			$('.kwyword_search_wrap').addClass('on');
			$(this).find('span').text('검색 조건 설정 닫기');
		}
	});


	//전체선택
	$('.allcheck').click(function(){
		if($(this).parents().hasClass('attached_file_wrap')){
			if($(this).prop("checked")){
				//클릭이 되었으면
				$(this).parent().parent().parent().find("input").prop("checked",true);
			}else{
				//클릭이 안 되었으면
				$(this).parent().parent().parent().find("input").prop("checked",false);
			}
		}else{
			if($(this).prop("checked")){
				//클릭이 되었으면
				$(this).parents('table').find("tbody input").prop("checked",true);
			}else{
				//클릭이 안 되었으면
				$(this).parents('table').find("tbody input").prop("checked",false);
			}
		}
	});





	$('.result_research_list_popup_btn').bind('click',function(){
		$('.result_research_list').removeClass('on');
		$(this).parent().parent().parent().parent().addClass('on');

	});
	$('.result_research_list_popup_btn_closs').bind('click',function(){
		$('.result_research_list').removeClass('on');
	});


	$('.search_select_btn button').bind('click',function() {
		var state = jQuery('#thesis-selectBox option:selected').val();
		var statetxt = state.replace(/[^0-9]/g,"");;
		$('.year_tit').text(statetxt);
		$('.thesis_year_list > div').each(function(){
			if ($(this).hasClass(state)){
				$('.thesis_year_list > div').removeClass('on');
				$(this).addClass('on');
			}
		});
	});


	$(document).ready(function() {
		$('.history_wrap').eq(0).addClass('on');
	    $(window).scroll( function(){
	        $('.history_wrap').each( function(i){

	        	if ($(window).width()<460) {
	        		//모바일
	        		var ThisH = $(this).height();
		            var bottom_of_element = $(this).offset().top -ThisH;
		            var bottom_of_window = $(window).scrollTop();
		            if( bottom_of_window > bottom_of_element ){
		                $(this).addClass('on');
		         	}
	        	}if ($(window).width()<1000) {
	        		var ThisH = $(this).height();
		            var bottom_of_element = $(this).offset().top -ThisH;
		            var bottom_of_window = $(window).scrollTop();
		            if( bottom_of_window > bottom_of_element ){
		                $(this).addClass('on');
		         	}
	        	}else{
	        		var ThisH = $(this).height() /3;
		            var bottom_of_element = $(this).offset().top -ThisH - 200;
		            var bottom_of_window = $(window).scrollTop();
		            if( bottom_of_window > bottom_of_element ){
		                $(this).addClass('on');
		         	}
	        	}
	        }); 
	    });
	});


	/*분양신청방법*/
	$('.saleapply_way_process ul li a').bind('click mouseenter',function(){
		$('.saleapply_way_process_popup').css({'display':'none'});
		$(this).parent().find('.saleapply_way_process_popup').css({'display':'block'});
	});
    
    $('.saleapply_way_process_popup').mouseleave(function(){
			$('.saleapply_way_process_popup').css({'display':'none'});
	});

	$('.saleapply_way_process_popup_close').bind('click',function(){
		$(this).parent().css({'display':'none'});
	});


	/*분양신청서 작성*/
	$('.attach_on').bind('click', function(){
		$(this).parent().parent().parent().find('td.none_wrap').find('input').addClass('none_text');
		$(this).parent().parent().parent().find('td.none_wrap').find('input[type="text"]').attr('placeholder','필수항목');
		
	});

	$('.registration_check input').bind('click',function(){
		if($(this).prop("checked")){
			//클릭
			$(this).parent().parent().parent().find('td').find('input').addClass('check');
		}else{
			//클릭이 안 되었으면

			$(this).parent().parent().parent().find('td').find('input').removeClass('check');
		}
	});

	$('.attach_on').bind('click',function(){
		$('.popup_bg').addClass('on');
		$('.saleapply_write_popup').addClass('active');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');

	});


	$('.search_pop_disease').bind('click',function(){
		$('.popup_bg').addClass('on');
		$('.saleapply_write_popup_01').addClass('active');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
	});
	$('.search_pop_id').bind('click',function(){
		$('.popup_bg').addClass('on');
		$('.popup_content_id').addClass('active');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
	});

	$('.check_tap_01 > li > p a').bind('click',function(){
		if($(this).parent().parent().hasClass('stap01') == true){
			$(this).parent().parent().removeClass('stap01');
			$(this).parent().parent().find('ul li').removeClass('stap02');
		}else{
			$(this).parent().parent().addClass('stap01');
		}
		
	});

	$('.check_tap_02 > li > p a').bind('click',function(){
		if($(this).parent().parent().hasClass('stap02') == true){
			$(this).parent().parent().removeClass('stap02');
		}else{
			$(this).parent().parent().addClass('stap02');
		}
	});

	

	/*해당 하위 체크박스 전체 선택*/
	$('.check_tap_02 p label').click(function(){
		var  checkTapName = $(this).parent().find('input').attr('name');
		if($(this).parent().find('input').prop("checked") == false){
			$(this).parent().parent().find('.check_tap_03 input').prop("checked",true);
			//클릭이 되었으면
		}else{
			//클릭이 안 되었으면
			$(this).parent().parent().find('.check_tap_03 input').prop("checked",false);
		}
	});



	/*input 값 변경시 색상*/
	$(".value_change").on("change paste keyup", function() {
	   $(this).css({'background':'#fff'});
	});

	/*관심자원 보관함*/

	$('#Storage-All').click(function(){
		if($(this).prop("checked") == false){
			$('.storage_data input').prop("checked",false);
			$('.storage_data ul').removeClass('on');
		}else{
			$('.storage_data input').prop("checked",true);
			$('.storage_data ul').addClass('on');
		}
	});

	$('.storage_data input').click(function(){
		if($(this).prop("checked") == false){
			$(this).parent().parent().removeClass('on');
		}else{
			$(this).parent().parent().addClass('on');
		}
	});

	//분양현황 활용성과등록 팝업
	$('.search_pop_registration').click(function(){
		$('.popup_bg').addClass('on');
		$('.search_pop_registration_01').addClass('active');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
	});
	$('.btn_document_add').click(function(){
		$('.popup_bg').addClass('on');
		$('.search_pop_documentadd').addClass('active');
		//$("html, body").addClass("scrollOff").on('scroll touchmove mousewheel');
	});



	$('.table_document_tit span').click(function(){
		if($(this).parent().parent().hasClass('on')){
				$(this).parent().parent().removeClass('on');
		}else{
				$(this).parent().parent().addClass('on');
		}
	});

	//질병분류 검색 input 박스 텍스트입력확인
	$(".kcdSearch_txt input").on("propertychange change keyup paste input textchange", function() {
	    var currentVal = $(this).val();
	    if(currentVal == false) {
	        $(this).parent().removeClass('on');
	        
	    }else{
		    $(this).parent().addClass('on');
		}
	});
	$('.kcdSearch_txt_ex').click(function(){
	   $(this).parents('.kcdSearch_txt').children('input').val('');
	   $(this).parents('.kcdSearch_txt').removeClass('on');
	});



	/*비밀번호 일치확인*/

	$("#alert-danger").hide();
	$("input.pwd2").on("propertychange change keyup paste input textchange", function() {
		var pwd1=$(".pwd1").val();
		var pwd2=$(".pwd2").val();

		if(pwd1 != "" || pwd2 != ""){ 
			if(pwd1 == pwd2){ 			

				$("#alert-danger").hide(); 
				$(this).removeClass('discordance');
				$("#submit").removeAttr("disabled"); 
			}else{ 
				$("#alert-danger").show(); 
				$(this).addClass('discordance');
				$("#submit").attr("disabled", "disabled"); 
			} 
		} 
	});



	//파일불러오기


   var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){
        if(window.FileReader){
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
        } 

        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };
        $(this).parent().find('.file_list').addClass('on');
        $(this).parent().find('.file_list .upload-name').val(filename);

        
       // return false;

    });


	$('.file_list button').click(function(){
		$(this).parents('.file_list').removeClass('on');
		$(this).parents('.file_list').find('.upload-name').val('');

	});

	


	$('.notice_img_box').each(function(){

		var NoticeIMGBOXH=$(this).height();
		var NoticeIMGH=$(this).find('img').height();

		//var NoticeIMGBOXW=$(this).width();
		//var NoticeIMGW=$(this).find('img').width();

		if(NoticeIMGBOXH > NoticeIMGH){
			$(this).find('img').height(NoticeIMGBOXH);
			$(this).find('img').css({'width':'auto'});

			var HWnotice =$(this).find('img').width();
			var HWnotice1 = -(HWnotice / 2);
			$(this).find('img').css({'left':'50%'});
			$(this).find('img').css({'margin-left':HWnotice1});

		}if(NoticeIMGBOXH < NoticeIMGH){
			var HWnoticew =$(this).find('img').height();
			var HWnoticew2 = -(HWnoticew / 2);
			$(this).find('img').css({'top':'50%'});
			$(this).find('img').css({'margin-top':HWnoticew2});

		}

	});

	$(window).resize(function(){

		$('.notice_img_box').each(function(){

			var NoticeIMGBOXH=$(this).height();
			var NoticeIMGH=$(this).find('img').height();

			//var NoticeIMGBOXW=$(this).width();
			//var NoticeIMGW=$(this).find('img').width();

			if(NoticeIMGBOXH > NoticeIMGH){
				$(this).find('img').height(NoticeIMGBOXH);
				$(this).find('img').css({'width':'auto'});

				var HWnotice =$(this).find('img').width();
				var HWnotice1 = -(HWnotice / 2);
				$(this).find('img').css({'left':'50%'});
				$(this).find('img').css({'margin-left':HWnotice1});

			}if(NoticeIMGBOXH < NoticeIMGH){
				var HWnoticew =$(this).find('img').height();
				var HWnoticew2 = -(HWnoticew / 2);
				$(this).find('img').css({'top':'50%'});
				$(this).find('img').css({'margin-top':HWnoticew2});

			}

		});

	});




   
   
});

