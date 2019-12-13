$(function(){

    // side bar 열기
    $('.menu_tog_btn').on('click',function(){
        $('.side_bar').fadeIn(500);
    })
    // side bar 닫기
    $('.close_btn').on('click',function(){
        $('.side_bar').fadeOut(0);
    })
    // 리사이즈 리로드
    $(window).on('resize',function(){
        location.reload();
    });

    // header nav 마우스오버 이벤트
    $('.head04>.head04_nav>li').mouseover(function(){
        $(this).css('border-bottom','4px solid #1e3785');
    });
    $('.head04>.head04_nav>li').mouseleave(function(){
        $(this).css('border-bottom','none');
    });
    
    // family site 토글 이벤트
    $('.head_family_site').on('click',function(){
        $('.head_family_list').stop().slideToggle(500);
    })

    // container01 클릭 이벤트
    var notice=$('.container_nav>li')
    var noticeLest=$('.container_list')
    notice.eq(0).addClass('notice_active');
    noticeLest.hide();
    noticeLest.eq(0).show();
    notice.css('cursor','pointer');
    notice.on('click',function(){
        var indexNum=$(this).index();
        noticeLest.hide();
        noticeLest.eq(indexNum).show();
        notice.removeClass();
        $(this).addClass('notice_active');
    })
    $('.container_nav>li').on('click',function(){
        $(this).css({'color':'#1e3785','font-weight':'600'});
    });

    // container02 클릭 이벤트
    $('.policy_target>ul>li').on('click',function(){
        $(this).toggleClass('active');
    })

    // 스크롤 top 이동 이벤트
    $(window).scroll(function() {
        var headerHeight=$('header').height();
        if ($(this).scrollTop() > headerHeight) {
            $('#top_btn').fadeIn();
        } else {
            $('#top_btn').fadeOut();
        }
    });
    $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

})
