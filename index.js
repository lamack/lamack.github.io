$(window).load(function(){
		var startX,startY;
		var x =0,y=0;
	var pc = function(){
		$(window).on('mousedown',function(e){
			var difXa = x;
			var difYa = y;
			e.preventDefault();
			startX = e.clientX;
			startY = e.clientY;

			$(window).on('mousemove',function(e){
				moveX = e.clientX;
				moveY = e.clientY
				var difX =difXa+ moveX-startX;
				var difY =difYa+ moveY- startY;
				var cla =  $('.wrapper').attr('class')
				$('.wrapper').css({transform:'rotateX('+(-difY)+'deg) rotateY('+difX+'deg) rotateZ(0deg)'})
				x= difX;
				y=difY;
			})
		})
		$(window).on('mouseup',function(e){
			$(window).off('mousemove')
		})
	}
	var phone = function(){
			$(window).on('touchstart',function(e){
				var difXa = x;
				var difYa = y;
				var touch = e.originalEvent.targetTouches[0]; 
				startX = touch.pageX;
				startY = touch.pageY;
				$(window).on('touchmove',function(e){
					var touch = e.originalEvent.targetTouches[0]; 
					moveX = touch.pageX;
					moveY = touch.pageY;
					var difX =difXa+ moveX-startX;
					var difY =difYa+ moveY- startY;
					var cla =  $('.wrapper').attr('class')
					$('.wrapper').css({transform:'rotateX('+(-difY)+'deg) rotateY('+difX+'deg) rotateZ(0deg)'})
					x= difX;
					y=difY;
				})
			})
	}
	 function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        	$('.wrapper').css('marginTop','100px')
        	$('h1').html('滑动屏幕有惊喜')
            phone()
        } else {
           pc()
        }
    }
    browserRedirect();
	
})