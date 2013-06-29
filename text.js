function addText( text, top, left ,classname){
  
 // var frag = document.createDocumentFragment(),
  var temp = document.createElement('div');
  temp.innerHTML = text;
  temp.className = "container";// " + classname !== "undefined"?classname: "";  
  temp.style.cssText = "top:"+top+"px;left:"+left+"px;";
  document.body.appendChild(temp);
  
  return temp;
  
}

function moveText (elem, top,left){
	elem.style.cssText = "top:"+top+"px;left:"+left+"px;";
}

function removeAllText(){
  var textlst = document.querySelectorAll(".container");
  for( var i = 0; i < textlst.length; i++){
	textlst[i].parentNode.removeChild(textlst[i]);
  }
}

function removeText(elem){
  elem.parentNode.removeChild(elem);
}