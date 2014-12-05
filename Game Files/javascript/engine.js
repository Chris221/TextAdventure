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
	var rightOutput = document.getElementById('right_output');
	rightOutput.innerHTML = '';
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
	var rightOutput = document.getElementById('right_output');
	rightOutput.innerHTML = '';
	var nullOutput = document.getElementById('null_output');
	nullOutput.innerHTML = '';
	nullOutput.innerHTML = 'That command is not a valid command at this location.';
};

function rightdisplay(text) {
	var rightOutput = document.getElementById('right_output');
	rightOutput.innerHTML = '';
	rightOutput.innerHTML = text;
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
		case 'cheats':
			cheat();
			break;
		case 'give silver':
			giveSilver();
			break;
		case 'give fish':
			giveFish();
			break;
		case 'god':
			god();
			break;
		case 'god sword':
			godSword();
			break;
		case 'god armour':
			godArmour();
			break;
		case 'stats':
			break;
		default:
			notValid();
			break;
	}
	
};

function cheat() {
	var text = '';
	if (Game.player.cheat === false) {
		Game.player.cheat = true;
		text = '<b>Cheats:</b> <font color="black">ON</font><br />';
	} else {
		Game.player.cheat = false;
		text = '<b>Cheats:</b> <font color="black">OFF</font><br />';
	}
	rightdisplay(text);
};

function giveSilver() {
	if (Game.player.cheat === true) {
		Game.player.silver += 100000;
		rightdisplay('<font color="black"><b>+100,000 Silver</b></font><br />');
	} else {
		notValid();
	}
};

function giveFish() {
	if (Game.player.cheat === true) {
		Game.player.fish += 100000;
		rightdisplay('<font color="black"><b>+100,000 Fish</b></font><br />');
	} else {
		notValid();
	}
};

function godSword() {
	if (Game.player.cheat === true) {
		if (Game.player.sword === 100) {
			Game.player.sword = Game.player.swordcheat;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			Game.swordName();
			text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font> from before.<br />');
			rightdisplay(text);
		} else {
			Game.player.swordcheat = Game.player.sword;
			Game.player.sword = 100;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			Game.swordName();
			text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			rightdisplay(text);
		}
	} else {
		notValid();
	}
};

function godArmour() {
	if (Game.player.cheat === true) {
		if (Game.player.armour === 100) {
			Game.player.armour = Game.player.armourcheat;
			Game.player.healthstatic = Game.player.healthstaticcheat;
			Game.player.health = Game.player.healthstatic;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			Game.armourName();
			text += ('You equipped the <font color="black"><b>' + Game.player.armourname + '</b></font> from before.<br />');
			rightdisplay(text);
		} else {
			Game.player.armourcheat = Game.player.armour;
			Game.player.armour = 100;
			Game.player.health = 100000;
			Game.player.healthstaticcheat = Game.player.healthstatic;
			Game.player.healthstatic = 100000;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			Game.armourName();
			text += ('You equipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			rightdisplay(text);
		}
	} else {
		notValid();
	}
};

function god() {
	if (Game.player.cheat === true) {
		if (Game.player.sword === 100 && Game.player.armour === 100) {
			Game.player.sword = Game.player.swordcheat;
			Game.player.armour = Game.player.armourcheat;
			Game.player.healthstatic = Game.player.healthstaticcheat;
			Game.player.health = Game.player.healthstatic;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			Game.swordName();
			text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font> from before.<br />');
			text += ('You unequipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			Game.armourName();
			text += ('You equipped the <font color="black"><b>' + Game.player.armourname + '</b></font> from before.<br />');
			rightdisplay(text);
		} else {
			Game.player.swordcheat = Game.player.sword;
			Game.player.sword = 100;
			Game.player.armourcheat = Game.player.armour;
			Game.player.armour = 100;
			Game.player.healthstaticcheat = Game.player.healthstatic;
			Game.player.healthstatic = 100000;
			Game.player.health = Game.player.healthstatic;
			var text = '';
			text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			Game.swordName();
			text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
			text += ('You unequipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			Game.armourName();
			text += ('You equipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
			rightdisplay(text);
		}
	} else {
		notValid();
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
