function getNextElement(node){
	if(node.nodeType ==1){
		return node;
	}
	if (node.nextSibling == 1){
		return getNextElement(node.nextSibling);
	}
	return null;
}
