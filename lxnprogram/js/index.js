/**
 * Created by Administrator on 2016/9/7.
 */
//轮播设置
$(document).ready(function(){
    //按宽度比例设置高度
    (function setH() {
            var H=$("#imgUl").find("img").width()/4.5;
            $("#imgUl").find("img").height(H);
            $(".banbox").height(H);
        })();
    $("#imgUl li:gt(0)").hide();//只显示第一个li 其余隐藏

    var timer_ban=null;
    var li_num=0;//记录li下标
    var p_num=$(".imgPage p").length;  //2
    // alert(p_num);

    //按钮显示
    $(".banbox").hover(function(){
        $(".imgLeft").css("display","block");
        $(".imgRight").css("display","block");
        //鼠标悬浮停止
        clearInterval(timer_ban);
    },function(){
        $(".imgLeft").css("display","none");
        $(".imgRight").css("display","none");
        //鼠标离开开启定时器
        bannerMove();
    })

    //点击左箭头切换
    $(".imgLeft").click(function () {
       bannerchange();
    })
    //点击右键头切换
    $(".imgRight").click(function () {
        bannerchange();
    })

    //点击页标切换
    $(".imgPage p").click(function(){
        var li_ex=$(this).index();  // 0 1
        // alert(li_ex);
        li_num=li_ex-1;
        bannerchange();
    })



    //banner图自动播放
    //自动播放函数
    function bannerMove(){
        timer_ban=setInterval(function(){
            bannerchange();
        },2000);
    }
    bannerMove();
    function bannerchange() {
        if(li_num==p_num-1){
            li_num=-1;
        }
        //大图切换
        // console.log($("#imgUl li:eq("+li_num+1+")"));

        $("#imgUl li").eq(li_num+1).fadeIn("slow")
            .siblings().fadeOut("slow");
        //页标切换
        $(".imgPage p").eq(li_num+1).addClass("onPage")
            .siblings().removeClass("onPage");
        li_num++;
    }








})