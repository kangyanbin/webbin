$(function(){
       //轮播图
      //  function myswiper(){
      //   var i=0;
      //   var timer;
      //   $(".pic-box .lunbo li").eq(0).show().siblings().hide();
      //   showTime();
      //   $(".pic-box .list li").hover(function () {
      //     i=$(this).index();
      //     show();
      //     clearInterval(timer);
      //   },function(){
      //       showTime();
      //   });
      //   $(".pic-box .lunbo li").hover(function () {
      //     clearInterval(timer);
      //   },function(){
      //       showTime();
      //   });
      //    function showTime(){
      //       timer=setInterval(function () {
      //              i++;
      //              if(i==3){
      //                 i=0;
      //              }
      //              show();
      //       },3000);
      //    }
      //    function show(){
      //       $(".pic-box .lunbo li").eq(i).fadeIn(300).siblings().fadeOut(300);
      //       $(".pic-box .list li").eq(i).addClass("select").siblings().removeClass("select");
      //    }
      //    }
      //    myswiper();    


      var mySwiper = new Swiper ('#swiper1', {
        direction: 'horizontal',//水平轮播
        loop: true,//图片无限转动
        autoplay: 3000,//轮播的时间
        grabCursor : true,//鼠标光标
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplayDisableOnInteraction : false,
    })
  
      /*鼠标移入停止轮播，鼠标离开 继续轮播*/
      var comtainer = document.getElementById('swiper1');
      // console.log(comtainer)
      comtainer.onmouseenter = function () {
        mySwiper.stopAutoplay();
      };
      comtainer.onmouseleave = function () {
        mySwiper.startAutoplay();
      };
  
      var mySwiper2 = new Swiper ('#swiper2', {
        direction: 'horizontal',//水平轮播
        loop: true,//图片无限转动
        autoplay: 3000,//轮播的时间
        grabCursor : false,//鼠标光标
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        autoplayDisableOnInteraction : false,
    })
      /*鼠标移入停止轮播，鼠标离开 继续轮播*/
      var comtainer2 = document.getElementById('swiper2');
      // console.log(comtainer2)
      comtainer2.onmouseenter = function () {
        mySwiper2.stopAutoplay();
      };
      comtainer2.onmouseleave = function () {
        mySwiper2.startAutoplay();
      }
});