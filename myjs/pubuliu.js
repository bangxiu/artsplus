$(document).ready(function(){
	var page=1;
	var pnum=0;
	var domready=true;
	ajaxall();
	function ajaxall(){
		$.ajax({
			type:"get",
			url:"http://www.hulupiao.com/index.php?r=goods/list&callback=?",
			data:{
				"page":page++
			},
			dataType:"jsonp",
			success:function(data){
				pnum=data.pcount
				// console.log(pnum);
				var str="";
				for(var i=0;i<data.list.length;i++){
					str=str+"<li><img src='"+data.list[i].pic+"'>";
					str=str+"<p>"+data.list[i].name+"</p>";
					str=str+"<span><i class='iconfont icon-yanjing'></i>浏览器浏览次数：<b>"+data.list[i].nums+"</b></span></li>";
				}
				$(".clist").append(str);
				domready=true;
			}

		});
	};
	$(window).on("scroll",function(){
		var scroall=$(window).scrollTop()+$(window).height()>$(".waiting").offset().top;
		if(scroall&&domready){
			$(".waiting").html("正在加载，请稍后......");
			if(page<=pnum){
				ajaxall();
			}else{
				$(".waiting").html("已经加载完了，没有其他商品咯");
			}
		}
	});
})