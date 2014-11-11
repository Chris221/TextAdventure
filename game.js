var player = {
	items: [],
}
player.pickup = function(item) {
	this.items.push(item);
}

function interpret() {
	var text = document.getElementById("action");
	var textStr = text.value;
	var command = textStr.split(' ');
	var holder = command.slice(1).join(' ');
	command[1] = holder;
	return command;
};

function execute(command) {
	var command = interpret();
	var action = command[0].toLowerCase();
	player[action](command[1]);
};

function report(txt) {
	for (i in player.items) {
		var aside_Tag = document.createElement("div");
		var text = document.createTextNode(txt);
		aside_Tag.appendChild(text);
		document.querySelector("#inventory > ul").appendChild(aside_Tag);
	}
};

function gameStep() {
	var text_Box = document.getElementById("action");
	var command = interpret();
	execute(command);
	report(command[1]);
};

addEventListener("keyup", function(event) {
	if (event.keyCode == 13)
		gameStep();
});