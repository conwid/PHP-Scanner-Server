(function(){
	"use strict";
	document.write('<select name="bright" onchange="changeBrightContrast()">');
	for(var i=-100;i<=100;i++){
		document.write('<option '+(i==15?'selected="selected" ':'')+'value="'+i+'">'+i+' %</option>');
	}
	document.write('</select>');
})();
