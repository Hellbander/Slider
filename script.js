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

function changeList() {
	'use strict';
	slider.insertBefore(last_Li, first_Li);
   first_Li = document.getElementsByClassName('li-image')[0];
   last_Li = document.getElementsByClassName('li-image')[li_count - 1];
	first_Li.style.marginLeft = sld + "px";
	 
}


function moveSlider(direction) {
	'use strict';
   var move_image = 0;
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
      if (sld === 0) {
      // setTimeout(function(){
         slider.insertBefore(last_Li, first_Li);
         first_Li = document.getElementsByClassName('li-image')[0];
         last_Li = document.getElementsByClassName('li-image')[li_count - 1];
         slider.insertBefore(last_Li, first_Li);
         first_Li = document.getElementsByClassName('li-image')[0];
         last_Li = document.getElementsByClassName('li-image')[li_count - 1];
        //  }, 2000);
         first_Li.style.marginLeft = img_width * (-2)  + "px";
         sld = img_width * (-1);
         move_image = img_width * (-1);


      } else if (sld < 0) {
         move_image = sld * 2;
         newLi = last_Li.cloneNode(true);
         newLi.style.marginLeft = move_image + "px";
         first_Li.style.marginLeft = "0 px";
         slider.insertBefore(newLi, first_Li);
         first_Li = document.getElementsByClassName('li-image')[0];
         move_image = img_width * (-1);
         direction = "right_delete";
      }
   }

   switch (direction) {
   case "left":
      first_Li.style.marginLeft = move_image + "px";
      first_Li.remove();
      move_image = sld;
      first_Li = document.getElementsByClassName('li-image')[0];
      first_Li.style.marginLeft = move_image + "px";
      break;
   case "right":
      first_Li.style.marginLeft = move_image + "px";
	   first_Li.style.marginLeft = move_image + "px";
      break;
   case "right_delete":
      first_Li.style.marginLeft = move_image + "px";
      last_Li.remove();
      last_Li = document.getElementsByClassName('li-image')[li_count - 1];
      break;
   }
}

changeList();
left.addEventListener("click", moveSlider.bind(this, "left"));
right.addEventListener("click", moveSlider.bind(this, "right"));



/*  if (direction === "left") {
     if (sld > max_width_left && sld >= 0) {
       sld = sld + img_width*(-1);
       move_image = sld;
      }
      else if (sld >= max_width_left && sld < 0) {
        sld = sld - img_width;
        move_image = sld;
       }
     if (sld < max_width_left) {
        sld = max_width_left;
        move_image = sld;
      //var tempData = repeatImageLeft();
      //  sld = tempData.slide;
      //  move_image = tempData.move_img;

      }
    }
      else if (direction === "right") {
     if (sld < 0 || (sld + img_width) <= 0) {
        sld = sld + img_width;
        move_image = sld;
      }
     if (sld === 0) {
       sld = 0;
        move_image = 0;
      }
  }

*/

//document.createElement("li");

//var createImage = $("slider:first-child").clone();
//console.log(createImage);
//$(newLi).append(createImage);
// console.log(newLi);
// $(slider).append(newLi);

/*  var data = {}
  data.slide = m_w_l - (img_width*2);
  data.move_img = slide;
  return data;*/
