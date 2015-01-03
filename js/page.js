// JavaScript Document

/**
* @name		:historyRoll
* @author	:Nice
* @dependent:
*/
function historyRoll(){
	var yW=$("#historyWrap .year_wrap");
	for (var i = 0; i < yW.length;i++) {
		var w=$(yW[i]).width();
		w=w+w;
	};
	$("#historyWrap").width(w+165);
	
	GLOBAL.namespace("HISTORYRoll");
	GLOBAL.HISTORYRoll.i=0;

	// $('#historyPage')
	function historyClick(LR){
		var i;
		// console.log(LR)
		if (LR=="l") {
			i=GLOBAL.HISTORYRoll.i=GLOBAL.HISTORYRoll.i-1;
			if (i<0) {
				i=GLOBAL.HISTORYRoll.i=0;
			}
		};

		if (LR=="r") {
			var hwWP=$("#historyWrap").parent().width();
			var hwW=$("#historyWrap").width()
			i=GLOBAL.HISTORYRoll.i;
			if (hwW<hwWP*(i+1)) {
				i=GLOBAL.HISTORYRoll.i
			}else{
				i=GLOBAL.HISTORYRoll.i=GLOBAL.HISTORYRoll.i+1;
			};
		};

		$("#historyWrap").stop().animate({
			left: -i*100+"%"
		}, 1000)
	}

	$('#historyPage .page_l').click(function(){historyClick("l")});
	$('#historyPage .page_r').click(function(){historyClick("r")});


}
/* @end **/



/**
* @name		:init
* @author	:Nice
* @dependent:总初始化
*/
function init(){
	toTop("topBtn");
	
}
init();
/* @end **/



/**
* @name		:名称
* @author	:作者
* @dependent:描述
*/

/* @end **/

/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/