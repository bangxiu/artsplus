var imgtop=$(".m").offset().top;

$(document).on("scroll",function(){
	var nowtop=$("body").scrollTop();
	console.log(nowtop)
	if(imgtop<=nowtop){
		$(".m").addClass("act");
	}else{
		$(".m").removeClass("act");
	}
})