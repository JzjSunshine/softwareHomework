//尝试创建一个可以执行简单动画的函数
/*
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed,callback){
		clearInterval(obj.timer);
		
		var current = parseInt(getStyle(obj,attr));
		if(current > target){
			speed = -speed;
		}
		/*
		 向执行动画的对象中添加一个timer属性，用来保存自己的定时器的标识
		 
		 * */
		obj.timer = setInterval(function(){
			
			var oldValue = parseInt(getStyle(obj,attr));
			
			var newValue = oldValue + speed;
			if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
				newValue = target;
			}
			
			obj.style[attr] = newValue + "px";
			
			if(newValue == target){
				clearInterval(obj.timer);
				//动画执行完毕后执行，只会执行一次
				callback && callback();
			}
			
		},30);
		
	}
/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */	
function getStyle(obj , name){
	
	if(window.getComputedStyle){
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj , null)[name];
	}else{
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}
		
}
			
function addClass(obj,cn){
				
	if(!hasClass(obj, cn)){
		obj.className += " "+cn;
	}
}

/*
 * 判断一个元素中是否含有指定的class属性值
 * 	如果有该class，则返回true，没有则返回false
 * 	
 */
function hasClass(obj,cn){
	
	var reg = new RegExp("\\b"+cn+"\\b");/*检查边界*/
	
	return reg.test(obj.className);
}

function removeClass(obj,cn){
	
	var reg = new RegExp("\\b"+cn+"\\b");/*检查边界*/
	
	obj.className = obj.className.replace(reg,"");
}
			
/*
 * toggleClass可以用来切换一个类
 * 	如果元素中具有该类，则删除
 * 	如果元素中没有该类，则添加
 */
function toggleClass(obj,cn){
	if(hasClass(obj,cn)){
		removeClass(obj,cn);
	}else{
		addClass(obj,cn);
	}
}