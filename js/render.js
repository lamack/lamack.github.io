var nameArr = [];
var xwsObj = [];
var zyObj = [];
var xyObj = [];
//画笔画
var prints = function(nObj, begin,end,k,l){
	var obj = [];
	var b = begin-(k*l);
	for(var y=begin;y<=end;y+=8){
		var x = k==0? l:(y-b)/k;
		for(var i=y;i<(y+7);i+=8){
			obj.push([parseInt(x),parseInt(i)])
		}
	}
	nObj.push(obj);
}
//画横向直线
var printx= function(nObj,begin,end,b){
	var obj = [];
	for(var x=begin; x<end; x+=8){
		for(var y=b;y<b+5;y+=6){
			obj.push([x,y])
		}
	}
	nObj.push(obj)
}
//画抛物线
// var printp = function(nObj,x1,y1,x2,y2,x3,y3){
// 	var a,b,c;
// 	var o = x1*x1-x2*x2,p=y3-y2,q=x3-x2;
// 	var r = x3*x3-x2*x2,s=y1-y2,t=x1-x2;
// 	b = ((o*p-r*s)/(o*q-r*t)).toFixed(2);
// 	a = ((s-t*b)/o).toFixed(2);
// 	c = (y1-x1*x1*a-b*x1).toFixed(2)
// 	console.log(o,a,b,c)
// 	var obj = []
// 	for(var y=y1;y<=y3;y+=5){
// 		x = parseInt((Math.sqrt(y-c+b*b/(4*a))-b/Math.sqrt(a)/2)/Math.sqrt(a))
// 		obj.push([x,y])
// 	}
// 	nObj.push(obj)
// }

var inW = innerWidth;
var inH = innerHeight;
/*徐*/
prints(xwsObj, inH*0.1, inH*0.2, -0.67, inW*0.7)
prints(xwsObj, inH*0.17, inH*0.3, -0.67, inW*0.7)
prints(xwsObj, inH*0.3, inH*0.6, 0, inW*0.6)
prints(xwsObj, inH*0.1, inH*0.26, -0.83, inW*1.2)
prints(xwsObj, inH*0.12, inH*0.26, 0.83, inW*1.2)
printx(xwsObj, inW*1.07, inW*1.3,  inH*0.24)
printx(xwsObj, inW*0.9, inW*1.45,  inH*0.32)
prints(xwsObj, inH*0.28, inH*0.6, 0, inW*1.2)
prints(xwsObj, inH*0.53, inH*0.59, 1, inW*1.1)
prints(xwsObj, inH*0.44, inH*0.53, -1.2, inW*1.1)
prints(xwsObj, inH*0.44, inH*0.54, 1.2, inW*1.3)
/*维*/
prints(xwsObj, inH*0.8, inH*1, -1.1, inW*0.68)
prints(xwsObj, inH*0.94,inH*1, -0.4, inW*0.63)
prints(xwsObj, inH*0.94,inH*1.12, -1.1, inW*0.63)
prints(xwsObj, inH*1.05,inH*1.12, -0.4, inW*0.63)
prints(xwsObj, inH*1.15,inH*1.23, -0.4, inW*0.67)
prints(xwsObj, inH*0.83, inH*0.92, -0.6, inW*0.96)
prints(xwsObj, inH*0.9, inH*1.24, 0, inW*0.88)
prints(xwsObj, inH*0.78, inH*0.83, 1, inW*1.24)
printx(xwsObj, inW*1.04, inW*1.54,  inH*0.89)
printx(xwsObj, inW*1.1, inW*1.5,  inH*1)
printx(xwsObj, inW*1.1, inW*1.5,  inH*1.1)
printx(xwsObj, inW*1.04, inW*1.54,  inH*1.2)
prints(xwsObj, inH*0.9, inH*1.22, 0, inW*1.28)
/*斯*/
printx(xwsObj, inW*0.5, inW*1,  inH*1.5)
printx(xwsObj, inW*0.65, inW*0.8,  inH*1.6)
printx(xwsObj, inW*0.65, inW*0.8,  inH*1.7)
printx(xwsObj, inW*0.5, inW*1,  inH*1.8)
prints(xwsObj, inH*1.45, inH*1.8, 0, inW*0.63)
prints(xwsObj, inH*1.45, inH*1.8, 0, inW*0.85)
prints(xwsObj, inH*1.86, inH*1.93, -1, inW*0.7)
prints(xwsObj, inH*1.86, inH*1.93, 1, inW*0.82)
prints(xwsObj, inH*1.45, inH*1.55, -0.5, inW*1.5)
prints(xwsObj, inH*1.55, inH*1.82, 0, inW*1.1)
printx(xwsObj, inW*1.1, inW*1.53,  inH*1.58)
prints(xwsObj, inH*1.58, inH*1.94, 0, inW*1.37)

/*郑嫣*/
//郑
prints(zyObj, inH*0.15, inH*0.23, 1, inW*0.5)
prints(zyObj, inH*0.15, inH*0.23, -1, inW*0.92)
printx(zyObj, inW*0.42, inW*1,  inH*0.28)
printx(zyObj, inW*0.36, inW*1.16,  inH*0.48)
prints(zyObj, inH*0.28, inH*0.48, 0, inW*0.73)
prints(zyObj, inH*0.48, inH*0.68, -1.4, inW*0.73)
prints(zyObj, inH*0.54, inH*0.68, 1, inW*0.8)
prints(zyObj, inH*0.28, inH*0.78, 0, inW*1.3)
prints(zyObj, inH*0.2, inH*0.34, 0.7, inW*1.3)
prints(zyObj, inH*0.34, inH*0.44, -1, inW*1.6)
prints(zyObj, inH*0.44, inH*0.54, 0.7, inW*1.4)
prints(zyObj, inH*0.56, inH*0.62, -0.5, inW*1.6)
//嫣
prints(zyObj, inH*0.56, inH*0.62, -0.5, inW*1.6)


//小
prints(xyObj, inH*0.24, inH*0.65, 0, inW*1)
prints(xyObj, inH*0.57, inH*0.65, 1, inW*0.84)
prints(xyObj, inH*0.4, inH*0.54, -1.6, inW*0.76)
prints(xyObj, inH*0.4, inH*0.57, 1.3, inW*1.2)

//影
prints(xyObj, inH*0.84, inH*1, 0, inW*0.52)
printx(xyObj, inW*0.52, inW*0.9,  inH*0.84)
prints(xyObj, inH*0.84, inH*1, 0, inW*0.9)
printx(xyObj, inW*0.52, inW*0.9,  inH*0.91)
printx(xyObj, inW*0.52, inW*0.9,  inH*1)
prints(xyObj, inH*1.04, inH*1.08, 1.3, inW*0.66)
printx(xyObj, inW*0.38, inW*1.05,  inH*1.13)
prints(xyObj, inH*1.17, inH*1.29, 0, inW*0.55)
printx(xyObj, inW*0.55, inW*0.85,  inH*1.17)
prints(xyObj, inH*1.17, inH*1.29, 0, inW*0.85)
printx(xyObj, inW*0.55, inW*0.85,  inH*1.29)

prints(xyObj, inH*1.37, inH*1.6, 0, inW*0.7)
prints(xyObj, inH*1.54, inH*1.6, 1, inW*0.58)
prints(xyObj, inH*1.42, inH*1.54, -1.6, inW*0.57)
prints(xyObj, inH*1.42, inH*1.56, 1.3, inW*0.82)

prints(xyObj, inH*1, inH*1.14, -1, inW*1.4)
prints(xyObj, inH*1.14, inH*1.34, -1, inW*1.5)
prints(xyObj, inH*1.34, inH*1.57, -1, inW*1.5)
//名子数组
nameArr = xyObj;