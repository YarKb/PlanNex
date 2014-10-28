
//在tag发生改变时调整容器宽度
var adjustWidth = function(){
	var elemWidth = parseInt($("#tags-list").find("li").eq(0).css("width")) + parseInt($("#tags-list").find("li").eq(0).css("margin-right"));
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

var initFootTags = function(){
	$(".brand-sub-list").find(".selected").each(function(){
		if($(this).find("a").data("id")){
			var tag = $('<li><span>LiFree</span><a href="###" class="tag-remove">x</a></li>');
			tag.data("id", $(this).find("a").data("id"));
			tag.find("span").html($(this).find("span").eq(0).html());
			tag.appendTo($("#tags-list"));
		}
	});
};

var handleBreandOp = function(){
	$(".brand-sub-list li a").on("click", function(e){
		// 添加
		if(!$(this).parent().hasClass("selected")){
			var ev = e || window.event;
			var startX = ev.screenX;
			var startY = ev.screenY - 54;
			var _this = $(this);
			var _flyTag = $("#fly-tag");

			_flyTag.find("span").html(_this.find("span").eq(0).html());
			_flyTag.css("top", startY) ;
			_flyTag.css("left", startX) ;
			_flyTag.show();

			var targetTop = $(window).height() - 62;
			var targetLeft = $(window).width() * 0.74;
			_flyTag.css("top", targetTop);
			_flyTag.css("left", targetLeft);

			setTimeout(function(){
				_flyTag.hide();
				// 添加tag
				// alert(_this.find("span").eq(0).html());
				if(_this.data("id")){
					var tag = $('<li><span>LiFree</span><a href="###" class="tag-remove">x</a></li>');
					tag.data("id", _this.data("id"));
					tag.find("span").html(_this.find("span").eq(0).html());
					tag.appendTo($("#tags-list"));
					adjustWidth();
				}
			}, 500);
			// 将状态改为selected
			_this.parent().addClass('selected');
		}
	});
};
var handleRemoveTag = function(){
	$("#tags-list").find(".tag-remove").live("click", function(){
		var _elem = $(this).parents("li");
		var dataId = _elem.data("id");
		$(".brand-sub-list li a[data-id=" + dataId + "]").parent().removeClass("selected");
		_elem.remove();
	});
};
var BrandChoosing = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	initFootTags();
        	adjustWidth();
        	handleTagSlider();
        	handleBreandOp();
        	handleRemoveTag();
        }
    };
}();