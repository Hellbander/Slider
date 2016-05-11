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
var int2;

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
   var left;
	/*--check--*/
	if (dir === "left") 
		left = 0;
	else if (dir === "right")
		left = sld * 2;
	/*--making transition--*/
   function frame() {
		if (dir === "left")
         left = left - 1;  
		else if (dir === "right")
			left = left + 1;
      first_Li.style.marginLeft = left + 'px'; 
      if (left === sld)  {
         clearInterval(int);
		   if (a = 0) 
		      instantPlay();
		}
   }
   int = setInterval(frame, 3)
}
/*-----------------find QUERY variable-------------------*/
function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable){return pair[1];}
   }
   return(false);
}
/*--------------main function--------------*/
function moveSlider(direction) {
	'use strict';
	if (a === 1) {
	   clearInterval(int1); 
		clearInterval(int2); 
	}
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
      //move_image = 0;
		dir = "right";
		moveImage();
		//first_Li.style.marginLeft = move_image + "px";
	   
   }

   switch (direction) {
   case "left":
      first_Li.remove();
      //move_image = sld;
      first_Li = document.getElementsByClassName('li-image')[0];
		//first_Li.style.marginLeft = move_image + "px";
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

//function autoPlay () {
//	int1 = setInterval(moveSlider(auto_direction), nextTime * 1000);
//}

function instantPlay () {
	if (a !== 1) {
		nextTime = getQueryVariable("nextTime");
   	auto_direction = getQueryVariable("direction");
		if  (nextTime !== "" & auto_direction !== "") {
			int2 = setInterval(moveSlider(auto_direction), nextTime * 1000);
   		a = 1;
		}
	}
}

left.addEventListener("click", moveSlider.bind(this, "left"), a = 0);
right.addEventListener("click", moveSlider.bind(this, "right"));

instantPlay();
