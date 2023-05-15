import * as flsFunctions from "./modules/functions.js"
flsFunctions.isWebp();
import './modules/functions.js';
import './modules/showmore.js';
import './modules/swipers.js';
import './modules/playvideo.js';


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn-grams");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}