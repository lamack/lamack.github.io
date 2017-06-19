$(window).load(function(){
	var startX,startY;
	$(window).on('mousedown',function(e){
		e.preventDefault();
		startX = e.clientX;
		startY = e.clientY;

		$(window).on('mousemove',function(e){
			moveX = e.clientX;
			moveY = e.clientY
			var difX = moveX-startX;
			var difY = moveY- startY;
			var cla =  $('.wrapper').attr('class')
			$('.wrapper').css({transform:'rotateX('+(-difY)+'deg) rotateY('+difX+'deg) rotateZ(0deg)'})
		})
	})
	$(window).on('mouseup',function(e){
		$(window).off('mousemove')
		var tran = $('.wrapper').get(0).style.transform;
	})
})