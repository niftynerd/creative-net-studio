if (window.addEventListener) {
  window.addEventListener("scroll", function () {fix_nav(); });
  window.addEventListener("resize", function () {fix_nav(); });  
  window.addEventListener("touchmove", function () {fix_nav(); });  
  window.addEventListener("load", function () {fix_nav(); });
} else if (window.attachEvent) {
  window.attachEvent("onscroll", function () {fix_nav(); });
  window.attachEvent("onresize", function () {fix_nav(); });  
  window.attachEvent("ontouchmove", function () {fix_nav(); });
  window.attachEvent("onload", function () {fix_nav(); });
}

document.getElementById("aboutlnk").addEventListener("click", fix);

function fix() {
		//alert(document.body.scrollHeight+'');
		//alert(window.innerHeight);
		/*if (document.body.scrollHeight - window.innerHeight - window.pageYOffset > 120) {
			document.getElementById("navbar").style.position = "fixed"; 
		}*/
		//document.getElementById("aboutlnk").click(); 

}

function fix_nav() {
	var top = scrolltop();
	if (top > 120) {
		document.getElementById("navbar").style.position = "fixed";  
	} else {
		document.getElementById("navbar").style.position = "relative";
	}
	return;
}

function scrolltop() {
  var top;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}
