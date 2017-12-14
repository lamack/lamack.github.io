var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
//画笔画
var prints = function(obj,begin,end,k,l){
	var b = begin-(k*l);
	for(var y=begin;y<=end;y+=8){
		var x = k==0? l:(y-b)/k;
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
var inW = innerWidth;
var inH = innerHeight;
prints(arr1,inH*0.1, inH*0.2, -0.67, inW*0.7)
prints(arr2,inH*0.17, inH*0.3, -0.67, inW*0.7)
prints(arr3,inH*0.3, inH*0.6, 0, inW*0.6)
prints(arr4,inH*0.1, inH*0.26, -0.83, inW*1.2)
prints(arr5,inH*0.12, inH*0.26, 0.83, inW*1.2)
printx(arr6,inW*1.07, inW*1.3,  inH*0.24)
printx(arr7,inW*0.9, inW*1.45,  inH*0.32)
prints(arr8,inH*0.28, inH*0.6, 0, inW*1.2)
prints(arr9,inH*0.53, inH*0.59, 1, inW*1.1)
prints(arr9,inH*0.44, inH*0.53, -1.2, inW*1.1)
prints(arr9,inH*0.44, inH*0.54, 1.2, inW*1.3)