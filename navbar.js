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
document.getElementById("aboutlnk").addEventListener("click", fix_anchor);
document.getElementById("portfoliolnk").addEventListener("click", fix_anchor);
document.getElementById("contactlnk").addEventListener("click", fix_anchor);
document.getElementById("topContactLnk").addEventListener("click", fix_anchor);

function fix_anchor() {
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (document.body.scrollHeight - h - window.pageYOffset > 177) {
		document.getElementById("navbar").style.position = "fixed";
		document.getElementById("main").style.paddingTop = "48px";
	}
	return;
}

function fix_nav() {
	var top = scrolltop();
	if (top > 177) {
		document.getElementById("navbar").style.position = "fixed";
		document.getElementById("main").style.paddingTop = "48px";
	} else {
		document.getElementById("navbar").style.position = "relative";
		document.getElementById("main").style.paddingTop = 0;
	}
	return;
}

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}
