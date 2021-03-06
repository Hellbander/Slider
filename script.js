var slider = document.getElementById('slide-ul');
var left = document.getElementById('left');
var right = document.getElementById('right');

var image = document.getElementsByClassName('image')[0];
var img_width = image.offsetWidth;

var sld = img_width * (-1);
var li_count = slider.children.length;
var first_Li = document.getElementsByClassName('li-image')[0];
var last_Li = document.getElementsByClassName('li-image')[li_count - 1];
var newLi;
var i = 1;
var move_image = 0;
var dir;
var int;
var int1;


/*---------------auto function form imagesfom the begining---------------*/
function changeList() {
	'use strict';
	slider.insertBefore(last_Li, first_Li);
   first_Li = document.getElementsByClassName('li-image')[0];
   last_Li = document.getElementsByClassName('li-image')[li_count - 1];
	first_Li.style.marginLeft = sld + "px";
	 
}
/*-------------right side adding element--------------*/
function rightInsert() {
	'use strict';
   newLi.style.marginLeft = sld * 2 + "px";
   slider.insertBefore(newLi, first_Li);
	first_Li.style.marginLeft = 0;
	first_Li = document.getElementsByClassName('li-image')[0];
	last_Li = document.getElementsByClassName('li-image')[li_count - 1];
}
/*--------------------moving image------------------*/
function moveImage() {
	'use strict';
   var left_move;
	/*--check--*/
	if (dir === "left")
		left_move = 0;
	else if (dir === "right")
		left_move = sld * 2;
	/*--making transition--*/
   function frame() {
		if (dir === "left")
         left_move = left_move - 1;  
		else if (dir === "right")
			left_move = left_move + 1;
      first_Li.style.marginLeft = left_move + 'px'; 
      if (left_move === sld)  {
         clearInterval(int);
		   if (a === 0){ 
		      setTimeout(function () {instantPlay()}, 1200);
			}
			left.addEventListener("click", eventLlistLeft);
         right.addEventListener("click", eventLlistRight);
		}
   }
   int = setInterval(frame, 3);
}
/*-----------------find QUERY variable-------------------*/
function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] === variable){return pair[1];}
   }
   return(false);
}
/*--------------main function--------------*/
function moveSlider(direction) {
	'use strict';
	left.removeEventListener("click", eventLlistLeft);
	right.removeEventListener("click", eventLlistRight);
   if (direction === "left") {
      move_image = sld * 2;
      newLi = first_Li.cloneNode(true);
      slider.appendChild(newLi);
		newLi.style.marginLeft = 0;
      if (i === 1) {
         newLi.style.marginLeft = -4 + "px";
         i = i + 1;
      }
   } else if (direction === "right") {
		dir = "right";
		moveImage();
   }

   switch (direction) {
   case "left":
      first_Li.remove();
      first_Li = document.getElementsByClassName('li-image')[0];
		dir = "left";
		moveImage();
		last_Li = document.getElementsByClassName('li-image')[li_count - 1];
      break;
   case "right":
		newLi = last_Li.cloneNode(true);
		last_Li.remove();
      rightInsert();
      break;
   }
}

changeList();

var nextTime;
var auto_direction;
var a = 0;

function instantPlay () {
	if (a !== 1) {
		nextTime = getQueryVariable("nextTime");
   	auto_direction = getQueryVariable("direction");
		if  (nextTime !== "" & auto_direction !== "") {
			int1 = setInterval(function () {moveSlider(auto_direction)}, nextTime * 1000);
   		a = 1;
		}
	}
}

function eventLlistLeft () {
	a = 0;
	clearInterval(int1);
	left.removeEventListener("click", eventLlistLeft);
	moveSlider.call(this, "left");
}

function eventLlistRight () {
	a = 0;
	clearInterval(int1);
	right.removeEventListener("click", eventLlistRight);
	moveSlider.call(this, "right");
}

left.addEventListener("click", eventLlistLeft);
right.addEventListener("click", eventLlistRight);

setTimeout(function () {instantPlay()}, 3000);