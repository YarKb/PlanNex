
//在tag发生改变时调整容器宽度
var adjustWidth = function(){
	var elemWidth = parseInt($("#tags-list").find("li").eq(0).width()) + parseInt($("#tags-list").find("li").eq(0).css("margin-right"));
	var elemCount = $("#tags-list").find("li").length;
	$("#tags-list").css("width", elemCount * elemWidth);
};

// 处理底部滑动事件
var handleTagSlider = function(){
	$("#btn-tag-shifter-right").on("click", function(){
		var elemWidth = parseInt($("#tags-list").find("li").eq(0).width()) + parseInt($("#tags-list").find("li").eq(0).css("margin-right"));
		var shiftedWidth = Math.abs(parseInt($("#tags-list").css("left")));
		var containerWidth = parseInt($("#added-tags").width());
		var elemWidthAll = parseInt($("#tags-list").width());

		if(shiftedWidth > 0){
			var shifteWidth = shiftedWidth - elemWidth;
			$("#tags-list").css("left", -shifteWidth);
		}
	});

	$("#btn-tag-shifter-left").on("click", function(){
		var elemWidth = parseInt($("#tags-list").find("li").eq(0).width()) + parseInt($("#tags-list").find("li").eq(0).css("margin-right"));
		var shiftedWidth = Math.abs(parseInt($("#tags-list").css("left")));
		var containerWidth = parseInt($("#added-tags").width());
		var elemWidthAll = parseInt($("#tags-list").width());

		if((containerWidth + shiftedWidth) < elemWidthAll){
			var shifteWidth = shiftedWidth + elemWidth;
			$("#tags-list").css("left", -shifteWidth);
		}
	});
};	

var handleBreandOp = function(){
	$(".brand-sub-list li a").on("click", function(e){
		// 添加
		if(!$(this).hasClass("selected")){
			var ev = e || window.event;
			var startX = ev.screenX;
			var startY = ev.screenY - 54;
			$("#fly-tag").css("top", startY) ;
			$("#fly-tag").css("left", startX) ;
			$("#fly-tag").show();

				var targetTop = $(window).height() - 62;
				var targetLeft = $(window).width() * 0.74;
				$("#fly-tag").css("top", targetTop);
				$("#fly-tag").css("left", targetLeft);
			setTimeout(function(){
				$("#fly-tag").hide();
			}, 500);
			
		}
	});
				
};

var BrandChoosing = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	adjustWidth();
        	handleTagSlider();
        	handleBreandOp();
        }
    };
}();