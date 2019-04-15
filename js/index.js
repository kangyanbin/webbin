window.onload = function(){
    var nav = document.getElementsByClassName("nav_bar")[0];
    var menus = document.getElementById('menus');
    var icon = menus.getElementsByTagName("i")[0];
    var list = document.getElementById('list');
    var banner = document.getElementById('banner');
    menus.onclick = function(){
        list.classList.toggle("active");
        icon.classList.toggle("fa-navicon");
        icon.classList.toggle("fa-times");
    }
    // window.onscroll = function(){
    //     if(window.scrollY > (banner.offsetHeight + 48)){
    //         nav.classList.add("scroll");
    //     }else{
    //         nav.classList.remove("scroll");
    //     }
    // }
    addEvent(window,'scroll',function(){
        if(window.scrollY > (banner.offsetHeight + 48)){
            nav.classList.add("scroll");
        }else{
            nav.classList.remove("scroll");
        }
    });
}
var showSwiper = function(obj){
    console.log(1);
    swiper = new Swiper(obj.dom, {
        loop: obj.loop || false,
        //循环播放
        autoplay: true,
        //设置slider容器能够同时显示的slides数量
        slidesPerView: obj.slidesPerView,
        //设定为true时，active slide会居中，而不是默认状态下的居左
        centeredSlides: true,
        //在slide之间设置距离（单位px）。
        spaceBetween: obj.spaceBetween,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
}
//动画
var isScroll = {
    /*初始化*/
    init: function (_el) {
        this.start(_el);
        // window.onscroll = function(){
        //     isScroll.start(_el)
        // }
        addEvent(window,'scroll',function(){
            isScroll.start(_el)
        });
    },
    /*开始*/
    start: function (_el) {
        var arr = document.querySelectorAll(_el);
        arr.forEach(function(e){
            var isScrollTop = window.scrollY;
            var isWindowHeiget = window.innerHeight * 0.8;
            var _class = e.getAttribute('data-animation');
            if (isScrollTop + isWindowHeiget > e.offsetTop) {
                e.classList.add(_class);
            }
        });
    }
}
//原生js解决window的多个scroll同时存在
//jq已经解决这个问题
function addEvent(obj,type,fn){
    //ie写法
    if(obj.attachEvent){ 
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}
//睡眠排序-哈哈哈哈(只能正数)
// var arr = [1,20,3,5,2,8,30,15];
// for(let i = 0;i < arr.length;i++){
//     setTimeout(function(){
//         console.log(arr[i])
//     },arr[i]*1000)
// }