$(function(){
      //导航pages
       var li = $("#pages");
       // li.mouseenter(function(){
       // 	$(this).children("ul").show();
       // });
       li.click(function(){
       	// $(this).children("ul").show();
        $(this).toggleClass("active");
       });
       li.mouseleave(function(){
       	$(this).removeClass("active");
       });
      var now = $(".screen-nav-wrap .header .screen-nav-con>li");
      now.each(function (item, key) {
        $(key).click(function(){
          $(this).siblings().children("a").removeClass("select");
          $(this).children("a").addClass("select");
        })
      });
      // console.log(now);
      //返回顶部
      $(window).scroll(function () {
        if($(window).scrollTop() >= $(window)[0].innerHeight ){
          $(".actGotop").show();
        }else {
          $(".actGotop").hide();
        }
      });
      
      $(".actGotop").click(function () {
        $("html,body").animate({scrollTop:0},1000);
      })
});