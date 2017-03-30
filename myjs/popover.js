$(document).ready(function(){
	var day=new Date();
	day.setTime(day.getTime()+(1*60*1000));
	var acc=$.cookie("username");

		// console.log($.cookie("username"));
	if($.cookie("username")!=undefined){
		$(".dl").text($.cookie("username")+'你好');
	}



	$(".dl").on("click",function(){
		$(".bg").show();
		$(".tan").show();
	})
	$(".cuo").on("click",function(){
		$(".bg").hide();
		$(".tan").hide();
	})
	$(".bg").on("click",function(){
		$(".bg").hide();
		$(".tan").hide();

	})
	$(".mysub").on("submit",function(){
		var userna=$("#na").val();
		var userpa=$("#pa").val();
		var text=$(".text");
		if(userna==""){
			alert("请输入姓名");
			return false;
		}
		if(userpa==""){
			alert("请输入密码");
			return false;
		}
		text.text("正在登录，请等待。。。。。。");
			$.ajax({
				type:"get",
				url:"http://www.hulupiao.com/index.php?r=api/login",
				data:{"user_name":userna,
				"password":userpa
			},
				dataType:"jsonp",
				success:function(data){
					console.log(data);
					if(data.success==1){
						$.cookie("username",na,{"expires":day});
						$(".dl").text(userna+'你好');
						$(".tan").hide();
						$(".bg").hide();
						$(".txt").show();
					}else{
						text.text("很遗憾，您登录失败");
					}
				}
			})
			return false;
	})




	$(".zhu").on("click",function(){
		$(".bg").show();
		$(".zhuce").show();
	})
	$(".cuo").on("click",function(){
		$(".bg").hide();
		$(".zhuce").hide();
	})
	$(".bg").on("click",function(){
		$(".bg").hide();
		$(".zhuce").hide();

	})
	var oneList=['所有地区','北京','河南','山东'];
	var twoList=[['所有地区'],['北京市'],['郑州市','焦作市','开封市','洛阳市'],['济南市','青岛市','淄博市','潍坊市']];
	var threeList=[[['所有地区']],[['东城区','西城区']],[['金水区','中原区'],['博爱县','山阳区'],['龙亭区','顺河回族区'],['老城区','西工区']],[['历下区','市中区'],['市南区','市北区'],['张店县','桓台县'],['潍城区','寒亭区']]];
	var one=$("#one");
	var two=$("#two");
	var three=$("#three");
	
	function ci(ee){
		var str="";
		for(var i=0;i<ee.length;i++){
			str=str+"<option value='"+i+"'>"+ee[i]+"</option>";
		}
		return str;
	}
	one.html(ci(oneList));	
	one.on('change',function(){
		two.html(ci(twoList[this.value]));
		three.html(ci(threeList[this.value][0]));
	})
	two.on("change",function(){
		three.html(ci(threeList[onelist.value][this.value]));
	})	
	$(".mub").on("submit",function(){
		var ym=$("#yong").val();
		var ymm=$("#mima").val();
		var yc=$("#czmm").val();
		var age=$("#age").val();
		if(ym==""){
			alert("请填写用户名字");
			return false;
		}
		if(ymm==""){
			alert("请填写用户密码");
			return false;
		}
		if(yc==""){
			alert("请确认用户密码");
			return false;
		}
		if(yc!=ymm){
			alert("请再次确认用户密码");
			return false;
		}
		if(age==""){
			alert("请填写用户年龄");
			return false;
		}
		if($(".sex:checked").length!=1){
			alert("请填写用户性别");
			return false;
		}
		if($("select").val()==0){
			alert("请选择");
			return false;
		}
		// if($("#two").val()==0){
		// 	alert("请填写城市");
		// 	return false;
		// }
		// if($("#three").val()==0){
		// 	alert("请填写地区");
		// 	return false;
		// }

	})
			
	$(".er").on('mouseenter',function(){
 	$(".er img").fadeIn(2000);
 				})
 	$(".er").on('mouseleave',function(){
 	$(".er img").fadeOut(2000);
 				})





 	$(".nav>ul").on("mouseenter",'.two',function(){
		$(this).find(".one").slideDown(500);
		$(this).siblings().find(".one").slideUp(500);
	})
	$(".nav>ul").on("mouseleave",function(){
		$(this).find(".one").slideUp(500);
	})

	$(".nav>ul>.two").on("mouseenter","li",function(){
		// $(this).addClass("act").siblings().removeClass("act");
		$(this).addClass("co").siblings().removeClass("co");
	})










	$(".box").mouseenter(function(){
			$(this).removeClass("box-t");
			$(this).children('.tit').hide(1000);
			$(this).children(".pic").show(1000);
			$(this).siblings('.box').children(".pic").hide(1000);
			$(this).siblings(".box").addClass("box-t");
			$(this).siblings(".box").children(".tit").show(1000);
		})
})

	