var $allul=getClass("ic")[0];
	var aullen= $allul.childNodes;
	for(var i=0;i<aullen.length;i++){
		aullen[i].onclick=function(){
			for(var j=0;j<=this.index();j++){
				aullen[j].addClass("mact");
			}
			for(var k=this.index()+1;k<aullen.length;k++){
				aullen[k].removeClass("mact");
			}
		}
		
	}