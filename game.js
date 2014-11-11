var player = {
	items: [],
}
player.pickup = function(item) {
	this.items.push(item);
}

function interpret(input) {
	var inputStr = input.value;
	var command = inputStr.split(' ', 1);
	return command;
};

function execut(command) {
	var command = interpret();
	var action = command[0].toLowerCase();
	player[action](command[1]);
};

function report(txt) {
	for (i in player.items) {
		var aside_Tag = document.createElement('aside');
		var text = document.createTextNode(txt);
		aside_Tag.appendChild(text);
		document.querySelector('#inventory > ul').appendChild(aside_Tag);
	}
};

function gameStep() {
	var input = document.getElementById('text');
	var command = interpret(input);
	execute(command);
	report(command[1]);
};

addEventListener("keyup", function(event) {
	if (event.keyCode == 13)
		gameStep;
});