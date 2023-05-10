// header 하위메뉴 토글 추가

$(function(){
	$('.mainbar>li>a').click(function(e){
		e.preventDefault();
		$(this).next('div').stop().slideToggle();		
	});
});

// header 하위메뉴 토글 끝

// 검색박스에 검색 기능 추가

$(function(){
	$('.sform .zoom').click(function(e){
		e.preventDefault();
		var ser = $('.sform .tbox').val();
		
		window.open('https://search.naver.com/search.naver?query=' + ser);
	});
});

// 검색박스에 검색 기능 추가 끝

//공지사항 자세히보기 클릭 하면 모달창 나타나게 하는 기능 추가

$(function(){
	$('.notice a').click(function(e){
		e.preventDefault();
		$('.modal').show();
	});
	
	$('.clo').click(function(){
		$('.modal').hide();
	});
});

//공지사항 자세히보기 클릭 후 모달 생성 기능 끝

//팝업창 로드 기능

$(function(){
	$('.popup-wrap').show();
	$('#close').click(function(){
		$('.popup-wrap').hide();
	});
});

//팝업창 로드 기능 끝

//자동으로 비디오가 화면에 꽉 찼을 때 재생되는 기능

$(function(){
	var video = $('#video video')[0];	// 비디오 요소를 선택
	var pauseByUser = false;	//사용자가 일시정지 버튼을 클릭했는지 추적하는 변수
	
	$(video).on('pause' , function(){	//비디오 에서 pause 이벤트 발생 시 함수 호출
		if(!isElementInViewport(video)){	//비디오가 뷰포트내에 없으면 
			pauseByUser = false;	// 사용자가 일시정지 버튼을 클릭하지 않음
	} else {
			pauseByUser = true;	// 사용자가 일시정지 버튼을 클릭함
	}
	});
	
	$(video).on('play' , function(){	//비디오 에서 play 이벤트 발생 시 함수 호출
		pauseByUser = false;	// 사용자가 일시정지 버튼을 클릭하지 않음
	});
	
	$(window).scroll(function(){	//창이 스크롤 될 때마다 함수 호출
		if(!pauseByUser && isElementInViewport(video)){	//사용자가 일시정지 버튼을 클릭하지 않고 비디오가 뷰포트내에 있으면
			video.play();	//비디오 재생
		} else if(!isElementInViewport(video)) {	//비디오가 뷰포트 내에 없다면 비디오를 일시정지
			video.pause();
		}
	});
});

function isElementInViewport(el){
	var rect = el.getBoundingClientRect();
	
	return (
		rect.bottom >= 0 &&
		rect.right >= 0 &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.left <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

//자동으로 비디오가 화면에 꽉 찼을 때 재생되는 기능 끝

//로고 클릭하면 처음 화면으로 가는 기능

$(function(){
	$('#logo img').on('click', function(){
		$(window).scrollTop(0);
	});
});

//로고 클릭하면 처음 화면으로 가는 기능 끝