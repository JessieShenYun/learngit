function highlightRows(){       //When your mouse hover on one row of a table,the font-weight changed from normal to bold.
    if (!document.getElementsByTagName) return false;   
	var rows = document.getElementsByTagName('tr');
	for (var i = 0; i < rows.length; i++) {
		rows[i].onmouseover = function(){
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function(){
			this.style.fontWeight = "normal";
		}
	}
}
addLoadEvent(highlightRows);