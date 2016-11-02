// banner轮播
$(function(){
	var imgs=$('.tu');  //获取标签
	var cir=$('.cir');
	var n=0;
	var box=$('#banner');;
	var t=setInterval(fun,3000);
	function fun(){     //时间函数，目的：让图动起来
		n++;
		if(n>=imgs.length){  //用来控制轮播的先后
			n=0;
		}
		for(i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0}); //给样式清除
			cir[i].style.background='#ccc';
		}
		animate(imgs[n],{opacity:1}); //给特定的添加
		cir[n].style.background='red';
	}
	box.onmouseover=function(){    //鼠标移动，图片停止
		clearInterval(t);
	}
	box.onmouseout=function(){   //鼠标离开，恢复原状
		t=setInterval(fun,3000);
	}
	for(var i=0;i<imgs.length;i++){
		cir[i].index=i;
		cir[i].onclick=function(){
			for(var i=0;i<cir.length;i++){
				cir[i].style.background='#ccc';  //圆圈样式--背景
				imgs[i].style.opacity=0;    //图片样式--浮动
			}
			this.style.background='red';
			imgs[this.index].style.opacity=1;
			n=this.index;  //为了让不点击后的图片继续向下一个轮播
		}
	}
//下拉框1--微信1
var code=$('.code')[0];
hover(code,function(){
  var small_code=$('.small_code',this)[0];
  var zhe1=$('.zhe-w',this)[0];
  small_code.style.display='block';
  zhe1.style.display='block';
  this.style.background='#fff';
  },function(){    
    var small_code=$('.small_code',this)[0];
    var zhe1=$('.zhe-w',this)[0];
    var that=this;
    that.style.background='#eee';
    zhe1.style.display='none';
    small_code.style.display='none';
  }
)
//下拉框2--微信2
var code1=$('.code1')[0];
hover(code1,function(){
  var small_code1=$('.small_code1',this)[0];
  var zhes=$('.zhe-s',this)[0];
  small_code1.style.display='block';
  zhes.style.display='block';
  this.style.background='#fff';
  },function(){
    var that=this;
    var small_code1=$('.small_code1',this)[0];
    var zhes=$('.zhe-s',this)[0];
    small_code1.style.display='none';
    zhes.style.display='none';
    that.style.background='#eee';
  }
)
//下拉框3--我的银泰
  var box_collect=$('.box_collect')[0];
    hover(box_collect,function(){
      var zheight=this.offsetHeight;
      var ul=$('.collect',this)[0];
      var len=$('li',ul).length;
      var oheight=len*zheight; 
      var blank_collect=$('.blank_collect',this)[0];
      this.style.background='#fff';
      this.style.boxShadow= '0px 0px 4px #292929';
      blank_collect.style.display='block';    
      animate(ul,{height:238},200,function(){});
    },function(){
      var that=this;
       var zheight=this.offsetHeight;
      var ul=$('.collect',this)[0];  
      var blank_collect=$('.blank_collect',this)[0]; 
      animate(ul,{height:0},200,function(){
      that.style.background='#eee';
      that.style.boxShadow='0px 0px 0px #eee';
      blank_collect.style.display='none';
      });     
      
    })
//下拉框4--banner旁边
var but1=$('.but1');
for(var i=0;i<but1.length;i++){
    hover(but1[i],function(){
    var but_down=$('.but_down',this)[0];
    but_down.style.display='block';
    this.style.background='red';
    },function(){
    var that=this;
    var but_down=$('.but_down',this)[0];
    but_down.style.display='none';
    that.style.background='#323333';
    }
    )
}

//下拉框——购物车
var pic=$('.pic')[0];
// console.log(down);
hover(pic,function(){
  var none=$('.none',this)[0];
  none.style.display='block';
  this.style.background='';
  },function(){
    var that=this;
    var none=$('.none',this)[0];
    that.style.background='#323333;';
    none.style.display='none';
  }
)

//选项卡
 function choose(obj){ 
  var lili=$('.lili_six',obj);
  var bottom=$('.bottom',obj);
  var sanjiao=$('.sanjiao',obj);
  for(var i=0;i<lili.length;i++){
       lili[i].index=i;
       lili[i].onmouseover=function(){
        for(var j=0;j<lili.length;j++){
          lili[j].style.borderBottom='4px solid #000';
          sanjiao[j].style.display='none';
          bottom[j].style.display='none';
          }       
        bottom[this.index].style.display='block';
        sanjiao[this.index].style.display='block';
        this.style.borderBottom=' 4px solid red';
        }  
      }
}
choose($('.left_six')[0])
choose($('.right_seven')[0])

//lunbo1
	var one_imgs=$('.ul2_img');
	var one_lits=$('.ul2_cir');
	var one_left=$('.ul2_left')[0];
	var one_banner=$('.ul2')[0];
	var one_right=$('.ul2_right')[0];//以类定义的要定义下标
	var one_width=parseInt(getStyle(one_banner,'width'));
	var n1=0;
	var next1=0;
  var flag1=true;
	function move1(){                    //时间函数
		if(!flag1){
      return;
    }
    flag1=false;
    next1=n1+1;
		if(next1>=one_imgs.length){
			next1=0;
		}
		one_imgs[next1].style.left=one_width+'px';  //强制转化下一张在右侧等待
		animate(one_imgs[n1],{left:-one_width},600);
		animate(one_imgs[next1],{left:0},600,function(){flag1=true;});
    one_lits[n1].style.background='#ccc';
    one_lits[next1].style.background='red';
		n1=next1;
	}
  one_banner.onmouseover=function(){      //鼠标进入图片静止
    one_right.style.display='block';
    one_left.style.display='block';
  }
  one_banner.onmouseout=function(){       //鼠标移出图片轮播
    one_right.style.display='none';
    one_left.style.display='none';
  }
  one_right.onclick=function(){           //右击按钮，图片左移
    move1();
  }
  one_left.onclick=function(){            //左击按钮，图片右移
    if(!flag1){
      return;
    }
    flag1=true;
    next1=n1-1;
    if(next1<0){
      next1=one_imgs.length-1;
    }
    one_imgs[next1].style.left=-one_width+'px';  //强制转化下一张在左侧等待
    animate(one_imgs[n1],{left:one_width},600);
    animate(one_imgs[next1],{left:0},600,function(){flag1=true;});
    one_lits[n1].style.background='#ccc';
    one_lits[next1].style.background='red';
    n1=next1;
  }
  //点击事件
  for(i=0;i<one_lits.length;i++){           //完成点击哪一张，那一张显示
    one_lits[i].index=i;
    one_lits[i].onclick=function(){
      if(this.index>n1){                 //点击右侧，左移
        if(!flag1){
          return;
        }
        flag1=true;
        one_imgs[this.index].style.left=one_width+'px';
        animate(one_imgs[n1],{left:-one_width},600);
        animate(one_imgs[this.index],{left:0},600,function(){flag1=true;});
        one_lits[n1].style.background='#ccc';
        one_lits[this.index].style.background='red';
        n1=this.index;
      }else if(this.index<n1){             //点击左侧，右移
        if(!flag1){
          return;
        }
        flag1=true;
        one_imgs[this.index].style.left=-one_width+'px';
        animate(one_imgs[n1],{left:one_width},600);
        animate(one_imgs[this.index],{left:0},600,function(){flag1=true;});
        one_lits[n1].style.background='#fff';
        one_lits[this.index].style.background='red';
        n1=this.index;
      }
    }
  }
//lunbo2
	var two_imgs=$('.ful2_img');
	var two_lits=$('.ful2_cir');
	var two_left=$('.ful2_left')[0];
	var two_banner=$('.ful2')[0];
	var two_right=$('.ful2_right')[0];//以类定义的要定义下标
	var two_width=parseInt(getStyle(two_banner,'width'));
	var n2=0;
	var next2=0;
  var flag2=true;
	function move2(){                    //时间函数
		if(!flag2){
      return;
    }
    flag2=false;
    next2=n2+1;
		if(next2>=two_imgs.length){
			next2=0;
		}
		two_imgs[next2].style.left=two_width+'px';  //强制转化下一张在右侧等待
		animate(two_imgs[n2],{left:-two_width},600);
		animate(two_imgs[next2],{left:0},600,function(){flag2=true;});
    two_lits[n2].style.background='#ccc';
    two_lits[next2].style.background='red';
		n2=next2;
	}
  two_banner.onmouseover=function(){      //鼠标进入图片静止
      two_right.style.display='block';
      two_left.style.display='block';
  }
  two_banner.onmouseout=function(){       //鼠标移出图片轮播
      two_right.style.display='none';
      two_left.style.display='none';
  }
  two_right.onclick=function(){           //右击按钮，图片左移
    move2();
  }
  two_left.onclick=function(){            //左击按钮，图片右移
    if(!flag2){
      return;
    }
    flag2=true;
    next2=n2-1;
    if(next2<0){
    next2=two_imgs.length-1;
    }
    two_imgs[next2].style.left=-two_width+'px';  //强制转化下一张在左侧等待
    animate(two_imgs[n2],{left:two_width},600);
    animate(two_imgs[next2],{left:0},600,function(){flag2=true;});
    two_lits[n2].style.background='#ccc';
    two_lits[next2].style.background='red';
    n2=next2;
  }
  //点击事件
  for(i=0;i<two_lits.length;i++){           //完成点击哪一张，那一张显示
    two_lits[i].index=i;
    two_lits[i].onclick=function(){
      if(this.index>n2){                 //点击右侧，左移
        if(!flag2){
          return;
        }
        flag2=true;
        two_imgs[this.index].style.left=two_width+'px';
        animate(two_imgs[n2],{left:-two_width},600);
        animate(two_imgs[this.index],{left:0},600,function(){flag2=true;});
        two_lits[n2].style.background='#ccc';
        two_lits[this.index].style.background='red';
        n2=this.index;
      }else if(this.index<n2){             //点击左侧，右移
        if(!flag2){
          return;
        }
        flag2=true;
        two_imgs[this.index].style.left=-two_width+'px';
        animate(two_imgs[n2],{left:two_width},600);
        animate(two_imgs[this.index],{left:0},600,function(){flag2=true;});
        two_lits[n2].style.background='#fff';
        two_lits[this.index].style.background='red';
        n2=this.index;
      }
    }
  }
//lunbo3
	var three_imgs=$('.vul2_img');
	var three_lits=$('.vul2_cir');
	var three_left=$('.vul2_left')[0];
	var three_banner=$('.vul2')[0];
	var three_right=$('.vul2_right')[0];//以类定义的要定义下标
	var three_width=parseInt(getStyle(three_banner,'width'));
	var n3=0;
	var next3=0;
  var flag3=true;
	function move3(){                    //时间函数
		if(!flag3){
      return;
    }
    flag3=false;
    next3=n3+1;
		if(next3>=three_imgs.length){
			next3=0;
		}
		three_imgs[next3].style.left=three_width+'px';  //强制转化下一张在右侧等待
		animate(three_imgs[n3],{left:-three_width},600);
		animate(three_imgs[next3],{left:0},600,function(){flag3=true;});
    three_lits[n3].style.background='#ccc';
    three_lits[next3].style.background='red';
		n3=next3;
	}
  three_banner.onmouseover=function(){      //鼠标进入图片静止
      three_right.style.display='block';
      three_left.style.display='block';
  }
  three_banner.onmouseout=function(){       //鼠标移出图片轮播
      three_right.style.display='none';
      three_left.style.display='none';
  }
  three_right.onclick=function(){           //右击按钮，图片左移
    move3();
  }
  three_left.onclick=function(){            //左击按钮，图片右移
    if(!flag3){
      return;
    }
    flag3=true;
    next3=n3-1;
    if(next3<0){
      next3=three_imgs.length-1;
    }
    three_imgs[next3].style.left=-three_width+'px';  //强制转化下一张在左侧等待
    animate(three_imgs[n3],{left:three_width},600);
    animate(three_imgs[next3],{left:0},600,function(){flag3=true;});
    three_lits[n3].style.background='#ccc';
    three_lits[next3].style.background='red';
    n3=next3;
  }
  //点击事件
  for(i=0;i<three_lits.length;i++){           //完成点击哪一张，那一张显示
    three_lits[i].index=i;
    three_lits[i].onclick=function(){
      if(this.index>n3){                 //点击右侧，左移
        if(!flag3){
          return;
        }
        flag3=true;
        three_imgs[this.index].style.left=three_width+'px';
        animate(three_imgs[n3],{left:-three_width},600);
        animate(three_imgs[this.index],{left:0},600,function(){flag3=true;});
        three_lits[n3].style.background='#ccc';
        three_lits[this.index].style.background='red';
        n3=this.index;
        }else if(this.index<n3){             //点击左侧，右移
        if(!flag3){
          return;
        }
        flag3=true;
        three_imgs[this.index].style.left=-three_width+'px';
        animate(three_imgs[n3],{left:three_width},600);
        animate(three_imgs[this.index],{left:0},600,function(){flag3=true;});
        three_lits[n3].style.background='#fff';
        three_lits[this.index].style.background='red';
        n3=this.index;
      }
    }
  }

//lunbo4
  var four_imgs=$('.sul2_img');
	var four_lits=$('.sul2_cir');
	var four_left=$('.sul2_left')[0];
	var four_banner=$('.sul2')[0];
	var four_right=$('.sul2_right')[0];//以类定义的要定义下标
	var four_width=parseInt(getStyle(four_banner,'width'));
	var n4=0;
	var next4=0;
  var flag4=true;
	function move4(){                    //时间函数
		if(!flag4){
      return;
    }
    flag4=false;
    next4=n4+1;
		if(next4>=four_imgs.length){
			next4=0;
		}
		four_imgs[next4].style.left=four_width+'px';  //强制转化下一张在右侧等待
		animate(four_imgs[n4],{left:-four_width},600);
		animate(four_imgs[next4],{left:0},600,function(){flag4=true;});
    four_lits[n4].style.background='#ccc';
    four_lits[next4].style.background='red';
		n4=next4;
	}
  four_banner.onmouseover=function(){      //鼠标进入图片静止
      four_right.style.display='block';
      four_left.style.display='block';
  }
  four_banner.onmouseout=function(){       //鼠标移出图片轮播
      four_right.style.display='none';
      four_left.style.display='none';
  }
  four_right.onclick=function(){           //右击按钮，图片左移
    move4();
  }
  four_left.onclick=function(){            //左击按钮，图片右移
    if(!flag4){
      return;
    }
    flag4=true;
    next4=n4-1;
    if(next4<0){
      next4=four_imgs.length-1;
    }
    four_imgs[next4].style.left=-four_width+'px';  //强制转化下一张在左侧等待
    animate(four_imgs[n4],{left:four_width},600);
    animate(four_imgs[next4],{left:0},600,function(){flag4=true;});
    four_lits[n4].style.background='#ccc';
    four_lits[next4].style.background='red';
    n4=next4;
  }
  //点击事件
  for(i=0;i<four_lits.length;i++){           //完成点击哪一张，那一张显示
    four_lits[i].index=i;
    four_lits[i].onclick=function(){
      if(this.index>n4){                 //点击右侧，左移
        if(!flag4){
          return;
        }
        flag4=true;
        four_imgs[this.index].style.left=four_width+'px';
        animate(four_imgs[n4],{left:-four_width},600);
        animate(four_imgs[this.index],{left:0},600,function(){flag4=true;});
        four_lits[n4].style.background='#ccc';
        four_lits[this.index].style.background='red';
        n4=this.index;
      }else if(this.index<n4){             //点击左侧，右移
        if(!flag4){
          return;
        }
        flag4=true;
        four_imgs[this.index].style.left=-four_width+'px';
        animate(four_imgs[n4],{left:four_width},600);
        animate(four_imgs[this.index],{left:0},600,function(){flag4=true;});
        four_lits[n4].style.background='#fff';
        four_lits[this.index].style.background='red';
        n4=this.index;
      }
    }
  }
//lunbo5
  var five_imgs=$('.seul2_img');
	var five_lits=$('.seul2_cir');
	var five_left=$('.seul2_left')[0];
	var five_banner=$('.seul2')[0];
	var five_right=$('.seul2_right')[0];//以类定义的要定义下标
	var five_width=parseInt(getStyle(five_banner,'width'));
	var n5=0;
	var next5=0;
  var flag5=true;
	function move5(){                    //时间函数
		if(!flag5){
      return;
    }
    flag5=false;
    next5=n5+1;
		if(next5>=five_imgs.length){
			next5=0;
		}
		five_imgs[next5].style.left=five_width+'px';  //强制转化下一张在右侧等待
		animate(five_imgs[n5],{left:-five_width},600);
		animate(five_imgs[next5],{left:0},600,function(){flag5=true;});
    five_lits[n5].style.background='#ccc';
    five_lits[next5].style.background='red';
		n5=next5;
	}
  five_banner.onmouseover=function(){      //鼠标进入图片静止
      five_right.style.display='block';
      five_left.style.display='block';
  }
  five_banner.onmouseout=function(){       //鼠标移出图片轮播
      five_right.style.display='none';
      five_left.style.display='none';
  }
  five_right.onclick=function(){           //右击按钮，图片左移
    move5();
  }
  five_left.onclick=function(){            //左击按钮，图片右移
    if(!flag5){
      return;
    }
    flag5=true;
    next5=n5-1;
    if(next5<0){
      next5=five_imgs.length-1;
    }
    five_imgs[next5].style.left=-five_width+'px';  //强制转化下一张在左侧等待
    animate(five_imgs[n5],{left:five_width},600);
    animate(five_imgs[next5],{left:0},600,function(){flag5=true;});
    five_lits[n5].style.background='#ccc';
    five_lits[next5].style.background='red';
    n5=next5;
  }
  //点击事件
  for(i=0;i<five_lits.length;i++){           //完成点击哪一张，那一张显示
    five_lits[i].index=i;
    five_lits[i].onclick=function(){
      if(this.index>n5){                 //点击右侧，左移
        if(!flag5){
          return;
        }
        flag5=true;
        five_imgs[this.index].style.left=five_width+'px';
        animate(five_imgs[n5],{left:-five_width},600);
        animate(five_imgs[this.index],{left:0},600,function(){flag5=true;});
        five_lits[n5].style.background='#ccc';
        five_lits[this.index].style.background='red';
        n5=this.index;
      }else if(this.index<n5){             //点击左侧，右移
        if(!flag5){
          return;
        }
        flag5=true;
        five_imgs[this.index].style.left=-five_width+'px';
        animate(five_imgs[n5],{left:five_width},600);
        animate(five_imgs[this.index],{left:0},600,function(){flag5=true;});
        five_lits[n5].style.background='#fff';
        five_lits[this.index].style.background='red';
        n5=this.index;
      }
    }
  }
//lunbo6
  var six_imgs=$('.eul2_img');
	var six_lits=$('.eul2_cir');
	var six_left=$('.eul2_left')[0];
	var six_banner=$('.eul2')[0];
	var six_right=$('.eul2_right')[0];//以类定义的要定义下标
	var six_width=parseInt(getStyle(six_banner,'width'));
	var n6=0;
	var next6=0;
  var flag6=true;
	function move6(){                    //时间函数
		if(!flag6){
      return;
    }
    flag6=false;
    next6=n6+1;
		if(next6>=six_imgs.length){
			next6=0;
		}
		six_imgs[next6].style.left=six_width+'px';  //强制转化下一张在右侧等待
		animate(six_imgs[n6],{left:-six_width},600);
		animate(six_imgs[next6],{left:0},600,function(){flag6=true;});
    	six_lits[n6].style.background='#ccc';
    	six_lits[next6].style.background='red';
		n6=next6;
	}
  six_banner.onmouseover=function(){      //鼠标进入图片静止
      six_right.style.display='block';
      six_left.style.display='block';
  }
  six_banner.onmouseout=function(){       //鼠标移出图片轮播
      six_right.style.display='none';
      six_left.style.display='none';
  }
  six_right.onclick=function(){           //右击按钮，图片左移
    move6();
  }
  six_left.onclick=function(){            //左击按钮，图片右移
    if(!flag6){
      return;
    }
    flag6=true;
    next6=n6-1;
    if(next6<0){
      next6=six_imgs.length-1;
    }
    six_imgs[next6].style.left=-six_width+'px';  //强制转化下一张在左侧等待
    animate(six_imgs[n6],{left:six_width},600);
    animate(six_imgs[next6],{left:0},600,function(){flag6=true;});
    six_lits[n6].style.background='#ccc';
    six_lits[next6].style.background='red';
    n6=next6;
  }
  //点击事件
  for(i=0;i<six_lits.length;i++){           //完成点击哪一张，那一张显示
    six_lits[i].index=i;
    six_lits[i].onclick=function(){
      if(this.index>n6){                 //点击右侧，左移
        if(!flag6){
          return;
        }
        flag6=true;
        six_imgs[this.index].style.left=six_width+'px';
        animate(six_imgs[n6],{left:-six_width},600);
        animate(six_imgs[this.index],{left:0},600,function(){flag6=true;});
        six_lits[n6].style.background='#ccc';
        six_lits[this.index].style.background='red';
        n6=this.index;
      }else if(this.index<n6){             //点击左侧，右移
        if(!flag6){
          return;
        }
        flag6=true;
        six_imgs[this.index].style.left=-six_width+'px';
        animate(six_imgs[n5],{left:six_width},600);
        animate(six_imgs[this.index],{left:0},600,function(){flag6=true;});
        six_lits[n6].style.background='#fff';
        six_lits[this.index].style.background='red';
        n6=this.index;
      }
    }
  }

//floor_jamp
	var floor_nav=$('.floor_nav')[0];
	var floor=$('.floor');
	var floor_lis=$('.floor_lis');//返回属性
	var back=$('.back')[0];		//获取属性‘返回’
	var Cheight=document.documentElement.clientHeight;
	var Cwidth=document.documentElement.clientWidth;	
	var nownode;
  var floor_flag=true;	
  var floor_flag1=true;
	for(var i=0;i<floor.length;i++){		//获取每一楼层距离浏览器的高度
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var top=obj.scrollTop;				//取滚动条的高度
	if(top>=floor[0].h-500){
		floor_nav.style.display='block';
		back.style.display='block';
		// animate(top_hidden,{height:60},100);
		var nHeight=floor_nav.offsetHeight;
		floor_nav.style.top=(Cheight-nHeight)/2+'px';	//
    if(floor_flag){
      floor_flag=false;
    }floor_flag=true;
	}
  if(top<floor[0].h-500){
    floor_nav.style.display='none';
    back.style.display='none';
      if(floor_flag1){
        floor_flag1=false;  
      }floor_flag1=true;
  }
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-200){
				for(var j=0;j<floor_lis.length;j++){
					floor_lis[j].style.background='';
          floor_lis[j].style.lineHeight=999+'px';
				}
				floor_lis[i].style.background='#F6004F'
        floor_lis[i].style.lineHeight=20+"px";
				nownode=i;
			}
		}
	}
	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h});
			animate(document.documentElement,{scrollTop:floor[this.index].h});
		}
		floor_lis[i].onmouseover=function(){
			this.style.background='#F6004F';
      this.style.lineHeight=20+'px';
		}	
		floor_lis[i].onmouseout=function(){
			if(nownode==this.index){
				return;
			}
			this.style.background='';
      this.style.lineHeight=999+'px';
			}
		}
	back.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	animate(document.documentElement,{scrollTop:0})


//侧栏的小轮播
  // function lunbo(obj){
 function com(obj){
    var bottomBox=$('.li_banner',obj)[0];
    var bottomWidth=parseInt(getStyle(bottomBox,'width'));
    var bottomImg=$('.t_img',obj);
    var bottomLeft=$('.small_bbton_left',obj)[0];
    var bottomRight=$('.small_bbton_right',obj)[0];
    var now=0;
    var nextt=0;  
    var flag=true;
    bottomRight.onclick=function(){
      if(!flag){
        return;
      }
      flag=false;
      nextt=now+1;
      if(nextt>bottomImg.length-1){
        nextt=0;
      }
      bottomImg[nextt].style.left=bottomWidth+'px';
      animate(bottomImg[now],{left:-bottomWidth},600,Tween.Quad.easeInOut);
      animate(bottomImg[nextt],{left:0},600,Tween.Quad.easeInOut,function(){flag=true;});
      now=nextt;
    }
    bottomLeft.onclick=function(){
      if(!flag){
        return;
      }
      flag=false;
      nextt=now-1;
      if(nextt<0){
        nextt=bottomImg.length-1;
      }
      bottomImg[nextt].style.left=-bottomWidth+'px';
      animate(bottomImg[now],{left:bottomWidth},600,Tween.Quad.easeInOut);
      animate(bottomImg[nextt],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
      now=nextt;
    }
  }
  for(var i=0;i<9;i++){
    com($('.ul1')[i]);
  }

function boder(obj){
      // var bot=$('.bot',obj)[0];
      var bot=obj
      var Height=bot.offsetHeight;
      var Width=bot.offsetWidth;
      hover(bot,function(){
        var f_top=$('.f_top',this)[0];
        var f_left=$('.f_left',this)[0];
        var f_right=$('.f_right',this)[0];
        var f_bottom=$('.f_bottom',this)[0];
        that=this
        animate(f_top,{width:Width},600,function(){
          this.style.width=Width;
        })
      animate(f_bottom,{width:Width},600,function(){
        this.style.width=Width;
        })
      animate(f_left,{height:Height},600,function(){
        this.style.height=Height;
        })
      animate(f_right,{height:Height},600,function(){
        this.style.height=Height;
        })
      },function(){
        var f_top=$('.f_top',this)[0];
        var f_left=$('.f_left',this)[0];
        var f_right=$('.f_right',this)[0];
        var f_bottom=$('.f_bottom',this)[0];
        animate(f_top,{width:0},600,function(){
          this.style.width=0;
        })
      animate(f_bottom,{width:0},600,function(){
          this.style.width=0;
        })
      animate(f_left,{height:0},600,function(){
          this.style.height=0;
        })
      animate(f_right,{height:0},600,function(){
          this.style.height=0;
        })
      })
    }
    for(var i=0;i<12;i++){
      boder($('.bike')[i])
    }
    // boder($('.bot')[0])
    // boder($('.bot')[1])
    // boder($('.bot')[2])
    // boder($('.bot')[3])
    // boder($('.bot')[4])
    // boder($('.bot')[5])
    // boder($('.bot')[6])
    // boder($('.bot')[7])
    // boder($('.bot')[8])
    // boder($('.bot')[9])
    // boder($('.bot')[10])
    // boder($('.bot')[11])


function boder1(obj){
      var bot1=obj;
      var Height1=248;
      var Width1=198;
      hover(bot1,function(){
        var b_top=$('.b_top',this)[0];
        var b_left=$('.b_left',this)[0];
        var b_right=$('.b_right',this)[0];
        var b_bottom=$('.b_bottom',this)[0];
        animate(b_top,{width:Width1},500,function(){
          this.style.width=Width1;
        })
      animate(b_bottom,{width:Width1},500,function(){
        this.style.width=Width1;
        })
      animate(b_left,{height:Height1},500,function(){
        this.style.height=Height1;
        })
      animate(b_right,{height:Height1},500,function(){
        this.style.height=Height1;
        })
      },function(){
        var b_top=$('.b_top',this)[0];
        var b_left=$('.b_left',this)[0];
        var b_right=$('.b_right',this)[0];
        var b_bottom=$('.b_bottom',this)[0];
        animate(b_top,{width:0},500,function(){
          this.style.width=0;
        })
      animate(b_bottom,{width:0},500,function(){
        this.style.width=0;
        })
      animate(b_left,{height:0},500,function(){
        this.style.height=0;
        })
      animate(b_right,{height:0},500,function(){
        this.style.height=0;
        })
      })
    }
    for(var i=0;i<8;i++){
    boder1($('.small_li0')[i])
    }

//
function boder2(bian){
      var beauty=bian;
      var Height2=beauty.offsetHeight-2;
      var Width2=beauty.offsetWidth-2;
      hover(beauty,function(){
        var shang=$('.shang',this)[0];
       
        var zuo=$('.zuo',this)[0];
        var you=$('.you',this)[0];
        var xia=$('.xia',this)[0];
        // var that=this;
        animate(shang,{width:Width2},500,function(){
          this.style.width=Width2; 
        })
      animate(xia,{width:Width2},500,function(){
        this.style.width=Width2;
        })
      animate(zuo,{height:Height2},500,function(){
        this.style.height=Height2;
        })
      animate(you,{height:Height2},500,function(){
        this.style.height=Height2;
        })
      },function(){
        var shang=$('.shang',this)[0];
        var zuo=$('.zuo',this)[0];
        var you=$('.you',this)[0];
        var xia=$('.xia',this)[0];
        that=this;
        animate(shang,{width:0},500,function(){
          this.style.width=0;
        })
      animate(xia,{width:0},500,function(){
        this.style.width=0;
        })
      animate(zuo,{height:0},500,function(){
        this.style.height=0;
        })
      animate(you,{height:0},500,function(){
        this.style.height=0;
        })
      })
    }

for(var i=0;i<36;i++){
  boder2($('.beauty')[i]);
}
  




})