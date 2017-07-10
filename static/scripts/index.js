window.onload = function(){
  var menu = document.getElementsByClassName("menu")[0],
  	  nav= document.getElementsByClassName("one-menu")[0],
  	  linkTo= document.getElementsByClassName("link-to"),
  	  homeMain= document.getElementsByClassName("main")[0],
  	  position = nav.offsetLeft,
  	  showSymbol = true,
  	  stop = null;

  linkTo = Array.prototype.slice.call(linkTo);
  menu.addEventListener("click",function(){
      toggleMenu(8,0);
      showSymbol = !showSymbol;
  },false);

  linkTo.forEach(function(val){
    val.addEventListener("click",function(){
      toggleMenu(-8,position);
      showSymbol = !showSymbol;
     },false);
  });

  homeMain.addEventListener("click",function(){
      toggleMenu(-8,position);
      showSymbol = !showSymbol;
  },false);

  window.onresize = function(){
	var width = nav.offsetWidth;
	nav.style.left = - width - 10 +"px";
  }
  function toggleMenu(speed,position){
	if(stop){
	  window.cancelAnimationFrame(moveTo.bind(this,speed,position));
	  window.requestAnimationFrame(moveTo.bind(this,speed,position));   
	}else{
	  window.requestAnimationFrame(moveTo.bind(this,speed,position));   
	}
  }
  function moveTo(speed,position){
	nav.style.left = nav.offsetLeft + speed +"px";
	if(Math.abs(Math.abs(nav.offsetLeft) - Math.abs(position)) > 8){
	 stop = window.requestAnimationFrame(moveTo.bind(this,speed,position));   
	}else{
	  nav.style.left = position +"px";
	  window.cancelAnimationFrame(moveTo.bind(this,speed,position));
	}
  }
}
