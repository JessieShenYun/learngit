function styleElementSiblings(tag,theclass){
	if(!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	for (var i = 0; i < elems.length; i++) {
		var elem = getNextElement(elems[i].nextsibling);
		addClass(elem,theclass);
	}
}
addLoadEvent(styleElementSiblings);