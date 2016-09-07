$(document).ready(function () {
	$(".download_app a").hover(
		function(){
			$(this).next().fadeIn(400);
		},function(){
			$(this).next().fadeOut(400);
		}
	);
	$("#searchtxt").click(function(){
		$(this).animate({width:'270'},500,function(){
			$(".search_box").css({"border":"1px solid rgb(248,248,248)","background-color":"white"});
			$("#hot_list").fadeIn(300);
			$("#hot_list li a").hover(function(){
				$(this).addClass("on");
			},function (){
				$(this).removeClass("on");
			})
		});

	});
	$(document).on("click",function(e){
		var event=e||window.event;
		tar =$(event.target);
		if($("#searchtxt").css("width")=="270px"&&tar.attr("id")!="searchtxt"
			&&tar.attr("class")!="search_box"&&tar.attr("id")!="searchbtn"){
			$("#hot_list").fadeOut(100,function () {
				$("#searchtxt").animate({width:'170'},400,function(){
					$(".search_box").css({"background-color":"#f8f8f8"})
				})
			});
		}
	})

	// $(".nav_contain a").hover(function(){
	// 	$(this).next().fadeIn(300);
	// 	$(this).next().fadeOut(300);
	// })

	$(".nav_contain>ul>li").hover(function(){
		$(this).children("a").css({"color":"#B93A2C"}).end().siblings().children("a").css({"color":"#4a4a4a"});
		if($(this).hasClass("brand")){
			$(".nav_bar_sonbox").hide();
			$(this).children("p").fadeIn(400).end().siblings().children("p").hide();
		}else{
			$(this).children("ol").clone().appendTo($(".nav_bar_son").empty());
			$(".nav_bar_sonbox").slideDown(400);
			$(this).children("p").fadeIn(400).end().siblings().children("p").hide();
		}
	},function(){

	})
	var timer;//鼠标移出延迟消失
	$(".nav_box").hover(function () {
		clearTimeout(timer);
	},function () {
		clearTimeout(timer);
		timer=setTimeout(function(){
			$(".nav_bar_sonbox").slideUp(600,function(){
				$(".nav_contain>ul>li").children("a").css({"color":"#4a4a4a"});
				$(".nav_contain>ul>li").find("p").hide();
			});
		},400);
	});


})



