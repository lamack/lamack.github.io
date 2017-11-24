var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
//画笔画
var prints = function(obj,begin,end,k,b){
	for(var y=begin;y<=end;y+=8){
		var x = k === 0? b:(y-b)/k;
		for(var i=y;i<(y+14);i+=8){
			obj.push([parseInt(x),parseInt(i)])
		}
	}
}
//画横向直线
var printx= function(obj,begin,end,b){
	for(var x=begin; x<end; x+=8){
		for(var y=b;y<b+14;y+=8){
			obj.push([x,y])
		}
	}
}
prints(arr1,innerHeight*0.1, innerHeight*0.2, -0.67, innerWidth*0.7)
prints(arr2,innerHeight*0.17, innerHeight*0.3, -0.67, innerWidth*0.85)
prints(arr3,innerHeight*0.3, innerHeight*0.6, 0, innerWidth*0.7)
prints(arr4,innerHeight*0.1, innerHeight*0.26, -0.83, innerWidth*1.2)
prints(arr5,innerHeight*0.12, innerHeight*0.26, 0.83, -innerWidth*0.83)
printx(arr6,innerWidth*1.1, innerWidth*1.36,  innerHeight*0.24)
printx(arr7,innerWidth, innerWidth*1.46,  innerHeight*0.32)
prints(arr8,innerHeight*0.28, innerHeight*0.6, 0, innerWidth*1.23)
prints(arr9,innerHeight*0.53, innerHeight*0.59, 1, -innerWidth*0.18)
prints(arr9,innerHeight*0.44, innerHeight*0.53, -1.2, innerWidth*2.1)
prints(arr9,innerHeight*0.44, innerHeight*0.54, 1.2, -innerWidth*0.8)