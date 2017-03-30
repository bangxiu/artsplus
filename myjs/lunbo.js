

//轮播图
	var _wrap=getClass("tu")[0];
	var _ul=getClass("dian")[0];
	Element.prototype.showFocus=function(option){
		if(option.tabeve==undefined){
			option.tabeve="mouseover";
		}
		if(option.tabact==undefined){
			option.tabact="lor";
		}
		var wrapchild=option.tabcon.childNodes;
		var ulchild=this.childNodes;
		// console.log(ulchild.length)
		var oldindex=0;
		var timer=setInterval(autoplay,1000);
		 wrapchild[0].style.opacity="1";

		this.addHandler(option.tabeve,function(e){
			var e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				showtab(oldindex,target.index());
				console.log("111");
				clearInterval(timer);
			}
		});

		_ul.addHandler("mouseout",function(e){
			var e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				 timer=setInterval(autoplay,1000);
			}
		})
		function showtab(_old,_new){
			oldindex=_new;
			wrapchild[_old].style.opacity="0";
			wrapchild[_new].style.opacity="1";
			ulchild[_old].removeClass(option.tabact);
			ulchild[_new].addClass(option.tabact);

		}
		function autoplay(){
			var newindex;
			if(oldindex<wrapchild.length-1){
				newindex=oldindex+1;
			}else{
				newindex=0;
			}
			showtab(oldindex,newindex)
		}
	}
	_ul.showFocus({
		tabcon:_wrap
	})


// 选项卡1
// 		var $ul=getClass("ull")[0];
// 		var $box=getClass("box")[0];
// 		var $ulchild=$ul.childNodes;
// 		var $boxchild=$box.childNodes;
// 		$ul.addHandler("mouseover",function(e){
// 			var e=e||window.event;
// 			var target=e.target||e.srcElement;
// 			if(target.tagName=="LI"){
// 				show(target.index());
// 			}
// 		})
// 		function show(_new){
// 			for(var i=0;i<$ulchild.length;i++){
// 				if(i==_new){
// 					$ulchild[_new].setAttribute("calss","n");
// 				 	$ulchild[_new].style.background="#999";
// 					$boxchild[_new].style.display="block";
// 				}else{
// 				$ulchild[i].removeAttribute("calss");
// 				$ulchild[i].style.background="#7098DA";
// 		 		$boxchild[i].style.display="none";
// 				}
// 			}
// 		}



//选项卡2--加定时器
		var $ul=getClass("ullu")[0];
		var $box=getClass("boxx")[0];
		var $ulchild=$ul.childNodes;
		var $boxchild=$box.childNodes;
		var oldindex=0;
		var timer=setInterval(autoplay,1000);
		$ul.addHandler("mouseover",function(e){
			var e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				oldindex=target.index();
				clearInterval(timer);
				show(target.index());	
			}
		})
		$ul.addHandler("mouseout",function(e){
			var e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				timer=setInterval(autoplay,1000);
			}
		});
		function show(_new){
			for(var i=0;i<$boxchild.length;i++){
				if(i==_new){
					$ulchild[_new].setAttribute("calss","act");
					$ulchild[_new].style.color="#8e00d7";
				 	$boxchild[_new].style.display="block";
				}else{
					$ulchild[i].removeAttribute("calss");
					$ulchild[i].style.color="#999";
					$boxchild[i].style.display="none";
				}
			}
		}
		function autoplay(){
				if(oldindex<$boxchild.length-1){
					oldindex++;
				}
				else{
					oldindex=0;
				}
				show(oldindex);
			}




//封装
	// 	var $ul=getClass("uth")[0];
	// 	var $box=getClass("bth")[0];

	// 		Element.prototype.myTab=function(option){

	// 	if(option.tabeve==undefined){
	// 		option.tabeve="mouseover";
	// 	}
	// 	if(option.tabact==undefined){
	// 		option.tabact='n';
	// 	}
	// 	var $ulchild=this.childNodes;
	// 	var $boxchild=option.tabbox.childNodes;
	// 	var oldindex=0;
	// 	var timer=setInterval(autoplay,500);
	// 	this.addHandler(option.tabeve,function(e){
	// 		var e=e||window.event;
	// 		var target=e.target||e.srcElement;
	// 		if(target.tagName=="LI"){
	// 			oldindex=target.index();
	// 			show(target.index());
	// 			clearInterval(timer);
	// 		}
	// 	})
	// 	this.addHandler("mouseout",function(e){
	// 		var e=e||window.event;
	// 		var target=e.target||e.srcElement;
	// 		if(target.tagName=="LI"){
	// 			timer=setInterval(autoplay,500);
	// 		}
	// 	})
	// 	function show(_new){
	// 		for(var i=0;i<$ulchild.length;i++){
	// 			if(i==_new){
	// 				$ulchild[_new].addClass(option.tabact);
	// 				$ulchild[_new].style.background="#999";
	// 			 	$boxchild[_new].style.display="block";
	// 			}else{
	// 				$ulchild[i].removeClass(option.tabact);
	// 				$ulchild[i].style.background="#7098DA";
	// 				$boxchild[i].style.display="none";
	// 			}
	// 		}
	// 	}
	// 	function autoplay(){
	// 			if(oldindex<$boxchild.length-1){
	// 				oldindex++;
	// 			}
	// 			else{
	// 				oldindex=0;
	// 			}
	// 			show(oldindex);
	// 		}
	// }
	// $ul.myTab({
	// 		tabbox:$box
	// 	})



	// var $allul=getClass("wu")[0];
	// var aullen= $allul.childNodes;
	// for(var i=0;i<aullen.length;i++){
	// 	aullen[i].onclick=function(){
	// 		for(var j=0;j<=this.index();j++){
	// 			aullen[j].addClass("mact");
	// 		}
	// 		for(var k=this.index()+1;k<aullen.length;k++){
	// 			aullen[k].removeClass("mact");
	// 		}
	// 	}
		
	// }



	//随机变颜色
	var botto=document.getElementById("bott");
	var bchild1=botto.getElementsByTagName("li")[0];
	var bchild2=botto.getElementsByTagName("li")[1];
	var bchild3=botto.getElementsByTagName("li")[2];
	var bchild4=botto.getElementsByTagName("li")[3];
	var bchild5=botto.getElementsByTagName("li")[4];
	var bchild6=botto.getElementsByTagName("li")[5];
	var bchild7=botto.getElementsByTagName("li")[6];
	var bchild8=botto.getElementsByTagName("li")[7];
	var bchild9=botto.getElementsByTagName("li")[8];
	var bchild10=botto.getElementsByTagName("li")[9];
	function suiji( ge,bg){
		this.ge=ge;
		this.ge.style.background=bg;
		
	}
	var ww1=new suiji(bchild1,bg());
	var ww2=new suiji(bchild2,bg());
	var ww3=new suiji(bchild3,bg());
	var ww4=new suiji(bchild4,bg());
	var ww5=new suiji(bchild5,bg());
	var ww6=new suiji(bchild6,bg());
	var ww7=new suiji(bchild7,bg());
	var ww8=new suiji(bchild8,bg());
	var ww9=new suiji(bchild9,bg());
	var ww10=new suiji(bchild10,bg());

	function bg(){
		var bg="#"+Math.floor(Math.random()*225).toString(16)+Math.floor(Math.random()*225).toString(16)+Math.floor(Math.random()*225).toString(16);
		return bg;
	}
