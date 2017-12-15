var nameArr = [];
//画笔画
var prints = function(begin,end,k,l){
	var obj = [];
	var b = begin-(k*l);
	for(var y=begin;y<=end;y+=8){
		var x = k==0? l:(y-b)/k;
		for(var i=y;i<(y+7);i+=8){
			obj.push([parseInt(x),parseInt(i)])
		}
	}
	nameArr.push(obj);
}
//画横向直线
var printx= function(begin,end,b){
	var obj = [];
	for(var x=begin; x<end; x+=8){
		for(var y=b;y<b+5;y+=6){
			obj.push([x,y])
		}
	}
	nameArr.push(obj)
}
var inW = innerWidth;
var inH = innerHeight;
/*徐*/
prints(inH*0.1, inH*0.2, -0.67, inW*0.7)
prints(inH*0.17, inH*0.3, -0.67, inW*0.7)
prints(inH*0.3, inH*0.6, 0, inW*0.6)
prints(inH*0.1, inH*0.26, -0.83, inW*1.2)
prints(inH*0.12, inH*0.26, 0.83, inW*1.2)
printx(inW*1.07, inW*1.3,  inH*0.24)
printx(inW*0.9, inW*1.45,  inH*0.32)
prints(inH*0.28, inH*0.6, 0, inW*1.2)
prints(inH*0.53, inH*0.59, 1, inW*1.1)
prints(inH*0.44, inH*0.53, -1.2, inW*1.1)
prints(inH*0.44, inH*0.54, 1.2, inW*1.3)
/*维*/
prints(inH*0.8, inH*1, -1.1, inW*0.68)
prints(inH*0.94,inH*1, -0.4, inW*0.63)
prints(inH*0.94,inH*1.12, -1.1, inW*0.63)
prints(inH*1.05,inH*1.12, -0.4, inW*0.63)
prints(inH*1.15,inH*1.23, -0.4, inW*0.67)
prints(inH*0.83, inH*0.92, -0.6, inW*0.96)
prints(inH*0.9, inH*1.24, 0, inW*0.88)
prints(inH*0.78, inH*0.83, 1, inW*1.24)
printx(inW*1.04, inW*1.54,  inH*0.89)
printx(inW*1.1, inW*1.5,  inH*1)
printx(inW*1.1, inW*1.5,  inH*1.1)
printx(inW*1.04, inW*1.54,  inH*1.2)
prints(inH*0.9, inH*1.22, 0, inW*1.28)
/*斯*/
printx(inW*0.5, inW*1,  inH*1.5)
printx(inW*0.65, inW*0.8,  inH*1.6)
printx(inW*0.65, inW*0.8,  inH*1.7)
printx(inW*0.5, inW*1,  inH*1.8)
prints(inH*1.45, inH*1.8, 0, inW*0.63)
prints(inH*1.45, inH*1.8, 0, inW*0.85)
prints(inH*1.86, inH*1.93, -1, inW*0.7)
prints(inH*1.86, inH*1.93, 1, inW*0.82)
prints(inH*1.45, inH*1.55, -0.5, inW*1.5)
prints(inH*1.55, inH*1.82, 0, inW*1.1)
printx(inW*1.1, inW*1.53,  inH*1.58)
prints(inH*1.58, inH*1.94, 0, inW*1.37)