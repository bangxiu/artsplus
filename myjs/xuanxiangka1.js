		var $ulo=getClass("ull")[0];
		var $boxl=getClass("box")[0];
		var $ulchildd=$ulo.childNodes;
		var $boxchildd=$boxl.childNodes;
		$ulo.addHandler("mouseover",function(e){
			var e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.tagName=="LI"){
				showl(target.index());
			}
		})
		function showl(_new){
			for(var i=0;i<$ulchildd.length;i++){
				if(i==_new){
					$ulchildd[_new].setAttribute("calss","n");
				 	$ulchildd[_new].style.color="#8e00d7";
					$boxchildd[_new].style.display="block";
				}else{
				$ulchildd[i].removeAttribute("calss");
				$ulchildd[i].style.color="#999";
		 		$boxchildd[i].style.display="none";
				}
			}
		}