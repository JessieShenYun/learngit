function moveElement(elementID,final_x,final_y,interval){
//elementID--The element I prepare to move
//final_x && final_y --The left and top of the final absolute position 
//interval -- 时间间隔
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID))  return false;
  var elem = document.getElementById(elementID);
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos==final_x && ypos==final_y) {
  	return true;
  }
  if (xpos<final_x) {
  	xpos++;
  }
  if (xpos>final_x) {
  	xpos--;
  }
  if (ypos<final_y) {
  	ypos++;
  }
  if (ypos>final_y) {
  	ypos--;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
 // var repeat = "moveElement('elementID',final_x,final_y,interval)";
  movement = setTimeout(repeat,interval);
}