function createText(txt) {
	var div_Tag = document.createElement('div');
	var text = document.createTextNode(txt);
	div_Tag.appendChild(text);
	document.querySelector('#help').appendChild(div_Tag);
};

createText('eat');
createText('stand');
createText('sit');

var test = document.querySelectorAll('#help');

for (i in test){
	console.log(test[i]);
}

var test = document.querySelector('#help');
console.log(test.tagName);