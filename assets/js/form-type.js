
var handleFormInfoPop = function(){
	// 弹窗
	$(".form-list").find("a").on("click", function(){
		$("#edit-form-popbox").show();
	});
	// 关闭弹窗
	$("#edit-form-popbox").find(".icon-close").on("click", function(){
		$("#edit-form-popbox").hide();
	});
	// 确认提交
	$("#edit-form-popbox").find(".btn-cfm").on("click", function(){
		$("#edit-form-popbox").hide();
	});
};
var handleRadioBtn = function(){
	$(".radio").find("input[type='radio']").on("change", function(){
		$("input[type='radio']").each(function(){
			if(this.checked){
				$(this).parents(".radio").addClass("selected");
			}else{
				$(this).parents(".radio").removeClass("selected");
			}
		});
		
	});
};
var FormType = function () {
	"use strict";
    return {
        //main function
        init: function () {
        	handleFormInfoPop();
        	handleRadioBtn();
        }
    };
}();