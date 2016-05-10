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

function changeList() {
	'use strict';
	slider.insertBefore(last_Li, first_Li);
   first_Li = document.getElementsByClassName('li-image')[0];
   last_Li = document.getElementsByClassName('li-image')[li_count - 1];
	first_Li.style.marginLeft = sld + "px";
	 
}


function moveSlider(direction) {
	'use strict';
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
      move_image = 0;
		first_Li.style.marginLeft = move_image + "px"; 
	   
   }

   switch (direction) {
   case "left":
      first_Li.remove();
      move_image = sld;
      first_Li = document.getElementsByClassName('li-image')[0];
      first_Li.style.marginLeft = move_image + "px";
		last_Li = document.getElementsByClassName('li-image')[li_count - 1];
      break;
   case "right":
		newLi = last_Li.cloneNode(true);
		newLi.style.marginLeft = sld + "px";
		slider.insertBefore(newLi, first_Li);
		first_Li.style.marginLeft = 0;  
		first_Li = document.getElementsByClassName('li-image')[0];
      rightDelete();
      break;
   }
}

function rightDelete() {
	 last_Li.remove();
    last_Li = document.getElementsByClassName('li-image')[li_count - 1];
}

changeList();
left.addEventListener("click", moveSlider.bind(this, "left"));
right.addEventListener("click", moveSlider.bind(this, "right"));
