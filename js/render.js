var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [], arr12 = [], arr13 = [], arr14 = [], arr15 = [], arr16 = [], arr17 = [], arr18 = [], arr19 = [], arr20 = [], arr21 = [], arr22 = [], arr23 = [], arr24 = [], arr25 = [], arr26 = [], arr27 = [], arr28 = [], arr29 = [], arr30 = [], arr31 = [], arr32 = [], arr33 = [], arr34 = [], arr35 = [], arr36 = [];
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
		for(var y=b;y<b+11;y+=6){
			obj.push([x,y])
		}
	}
}
var inW = innerWidth;
var inH = innerHeight;
/*徐*/
prints(arr1,inH*0.1, inH*0.2, -0.67, inW*0.7)
prints(arr2,inH*0.17, inH*0.3, -0.67, inW*0.7)
prints(arr3,inH*0.3, inH*0.6, 0, inW*0.6)
prints(arr4,inH*0.1, inH*0.26, -0.83, inW*1.2)
prints(arr5,inH*0.12, inH*0.26, 0.83, inW*1.2)
printx(arr6,inW*1.07, inW*1.3,  inH*0.24)
printx(arr7,inW*0.9, inW*1.45,  inH*0.32)
prints(arr8,inH*0.28, inH*0.6, 0, inW*1.2)
prints(arr9,inH*0.53, inH*0.59, 1, inW*1.1)
prints(arr10,inH*0.44, inH*0.53, -1.2, inW*1.1)
prints(arr11,inH*0.44, inH*0.54, 1.2, inW*1.3)
/*维*/
prints(arr12,inH*0.8, inH*1, -1.1, inW*0.68)
prints(arr13,inH*0.94,inH*1, -0.4, inW*0.63)
prints(arr14,inH*0.94,inH*1.12, -1.1, inW*0.63)
prints(arr15,inH*1.05,inH*1.12, -0.4, inW*0.63)
prints(arr16,inH*1.15,inH*1.23, -0.4, inW*0.67)
prints(arr17,inH*0.83, inH*0.92, -0.6, inW*0.96)
prints(arr18,inH*0.9, inH*1.24, 0, inW*0.88)
prints(arr19,inH*0.78, inH*0.83, 1, inW*1.24)
printx(arr20,inW*1.04, inW*1.54,  inH*0.89)
printx(arr21,inW*1.1, inW*1.5,  inH*1)
printx(arr22,inW*1.1, inW*1.5,  inH*1.1)
printx(arr23,inW*1.04, inW*1.54,  inH*1.2)
prints(arr24,inH*0.9, inH*1.22, 0, inW*1.28)
/*斯*/
printx(arr25,inW*0.5, inW*1,  inH*1.5)
printx(arr26,inW*0.65, inW*0.8,  inH*1.6)
printx(arr27,inW*0.65, inW*0.8,  inH*1.7)
printx(arr28,inW*0.5, inW*1,  inH*1.8)
prints(arr29,inH*1.45, inH*1.8, 0, inW*0.63)
prints(arr30,inH*1.45, inH*1.8, 0, inW*0.85)
prints(arr31,inH*1.86, inH*1.93, -1, inW*0.7)
prints(arr32,inH*1.86, inH*1.93, 1, inW*0.82)
prints(arr33,inH*1.45, inH*1.55, -0.5, inW*1.5)
prints(arr34,inH*1.55, inH*1.82, 0, inW*1.1)
printx(arr35,inW*1.1, inW*1.53,  inH*1.58)
prints(arr36,inH*1.58, inH*1.94, 0, inW*1.37)