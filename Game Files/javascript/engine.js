function interpret(input) {
	var command = input.trim().split(' ');
	var holder = command.slice(1).join(' ');
	command[1] = holder;
	return command;
};

function execute(cmd) {
	var action = cmd[0];
	var object = cmd[1];
	var method = player[action];
	if(method) {
		method(object);
	} else {
		alert('Invalid action');
	}
};

function display(text) {
	var output = document.getElementById('output');
	output.innerHTML = '';
	output.innerHTML = text;
	var nullOutput = document.getElementById('null_output');
	nullOutput.innerHTML = '';
};

/*
var input = document.querySelector('input');
input.addEventListener("keyup", function(event) {
	if(event.keycode == 13) {
		var cmd = interpret(this.value);
		display(cmd);
		//execute(cmd);
	}
});
*/

function run() {
	var input = document.querySelector('input').value;
	input = input.toLowerCase();
	trans(input);
};

function notValid() {
	var nullOutput = document.getElementById('null_output');
	nullOutput.innerHTML = '';
	nullOutput.innerHTML = 'That command is not a valid command at this location.';
};

function trans(input) {
	switch(input) {
		case 'go north':
			north();
			break;
		case 'go west':
			break;
		case 'go east':
			break;
		case 'go south':
			break;
		case 'enter the cave':
			break;
		case 'chop wood':
			break;
		case 'enter the mine':
			break;
		case 'enter the shop':
			break;
		case 'return':
			break;
		case 'attack':
			break;
		case 'run':
			break;
		case 'leave':
			break;
		case 'mine iron':
			break;
		case 'mine coal':
			break;
		case 'mine gold':
			break;
		case 'enter the draydon port':
			break;
		case 'buy':
			break;
		case 'fish':
			break;
		case 'pay':
			break;
		case 'explore':
			break;
		case 'enter the magician tower':
			break;
		case 'find your way':
			break;
		case 'search':
			break;
		case 'attempt to leave':
			break;
		case 'browse swords':
			break;
		case 'browse armour':
			break;
		case 'sell wood':
			break;
		case 'sell ores':
			break;
		case 'sell':
			break;
		case 'sell iron':
			break;
		case 'sell gold':
			break;
		case 'sell coal':
			break;
		case 'bronze sword':
			break;
		case 'gold sword':
			break;
		case 'iron sword':
			break;
		case 'steel sword':
			break;
		case 'titanium sword':
			break;
		case 'tungsten sword':
			break;
		case 'browse':
			break;
		case 'bronze armour':
			break;
		case 'gold armour':
			break;
		case 'iron armour':
			break;
		case 'steel armour':
			break;
		case 'titanium armour':
			break;
		case 'tungsten armour':
			break;
		default:
			notValid();
			break;
	}
	
};

function north() {
	if (Game.player.location === 1) {
		Game.elden();
	} else if (Game.player.location === 5) {
		Game.kirkoswald();
	} else {
		notValid();
	}
};
