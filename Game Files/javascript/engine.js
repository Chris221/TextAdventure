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

function run() {
	var input = document.querySelector('input').value;
	input = input.toLowerCase();
	document.querySelector('input').value = '';
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
			west();
			break;
		case 'go east':
			east();
			break;
		case 'go south':
			south();
			break;
		case 'enter the cave':
			enterthecave();
			break;
		case 'chop wood':
			chopwood();
			break;
		case 'enter the mine':
			enterthemine();
			break;
		case 'enter the shop':
			entertheshop();
			break;
		case 'return':
			goback();
			break;
		case 'attack':
			break;
		case 'run':
			runfrom();
			break;
		case 'leave':
			leave();
			break;
		case 'mine iron':
			mineiron();
			break;
		case 'mine coal':
			minecoal();
			break;
		case 'mine gold':
			minegold();
			break;
		case 'enter the draydon port':
			enterport();
			break;
		case 'buy':
			buy();
			break;
		case 'fish':
			fish();
			break;
		case 'pay':
			pay();
			break;
		case 'explore':
			explore();
			break;
		case 'enter the magician tower':
			entertower();
			break;
		case 'find your way':
			findway();
			break;
		case 'search':
			searchfor();
			break;
		case 'attempt to leave':
			attempttoleave();
			break;
		case 'browse swords':
			browseswords();
			break;
		case 'browse armour':
			browsearmour();
			break;
		case 'sell wood':
			sellwood();
			break;
		case 'sell ores':
			sellores();
			break;
		case 'sell iron':
			selliron();
			break;
		case 'sell gold':
			sellgold();
			break;
		case 'sell coal':
			sellcoal();
			break;
		case 'bronze sword':
			bronzesword();
			break;
		case 'gold sword':
			goldsword();
			break;
		case 'iron sword':
			ironsword();
			break;
		case 'steel sword':
			steelsword();
			break;
		case 'titanium sword':
			titaniumsword();
			break;
		case 'tungsten sword':
			tungstensword();
			break;
		case 'bronze armour':
			bronzearmour();
			break;
		case 'gold armour':
			goldarmour();
			break;
		case 'iron armour':
			ironarmour();
			break;
		case 'steel armour':
			steelarmour();
			break;
		case 'titanium armour':
			titaniumarmour();
			break;
		case 'tungsten armour':
			tungstenarmour();
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

function south() {
	if (Game.player.location === 3) {
		Game.backleigh();
	} else if (Game.player.location === 4) {
		Game.grimtol();
	} else {
		notValid();
	}
};

function west() {
	if (Game.player.location === 1) {
		Game.draydon();
	} else if (Game.player.location === 4) {
		Game.elden();
	} else if (Game.player.location === 5) {
		Game.grimtolBridge();
	} else {
		notValid();
	}
};

function east() {
	if (Game.player.location === 1) {
		Game.grimtolBridge();
	} else if (Game.player.location === 2) {
		Game.backleigh();
	} else if (Game.player.location === 3) {
		Game.kirkoswald();
	} else {
		notValid();
	}
};

function enterthecave() {
	if (Game.player.location === 1) {
		Game.backleighCaveEntrance();
	} else {
		notValid();
	}
};

function chopwood() {
	if (Game.player.location === 1 && Game.player.globalLocation === 0) {
		Game.backleighLumber();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.lumber();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 0) {
		Game.eldenLumber();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 1) {
		Game.lumber();
	} else {
		notValid();
	}
};

function enterthemine() {
	if (Game.player.location === 5 && Game.player.globalLocation === 0) {
		Game.grimtolMine();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 0) {
		Game.backleighMine();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 0) {
		Game.eldenMine();
	} else {
		notValid();
	}
};

function entertheshop() {
	if (Game.player.globalLocation === 0) {
		Game.shop();
	} else {
		notValid();
	}
};

function goback() {
	if (Game.player.location === 1 && Game.player.globalLocation === 3) {
		Game.caveLeave();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.backleigh();
	} else if (Game.player.location === 2 && Game.player.globalLocation === 2) {
		Game.draydon();
	} else if (Game.player.location === 2 && Game.player.globalLocation === 3) {
		Game.draydonPort();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
		Game.elden();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 3) {
		Game.eldon();
	} else if (Game.player.location === 5 && Game.player.globalLocation === 2) {
		Game.grimtol();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.backleigh();
	} else if (Game.player.location === 4 && Game.player.globalLocation === 2) {
		Game.kirkoswald();
	} else if (Game.player.shopLocation > 0) {
		Game.shop();
	} else {
		notValid();
	}
};

function mineiron() {
	if (Game.player.location === 5 && Game.player.globalLocation === 2) {
		Game.iron();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.iron();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
		Game.iron();
	} else {
		notValid();
	}
};

function minecoal() {
	if (Game.player.location === 5 && Game.player.globalLocation === 2) {
		Game.coal();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.coal();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
		Game.coal();
	} else {
		notValid();
	}
};

function minegold() {
	if (Game.player.location === 5 && Game.player.globalLocation === 2) {
		Game.gold();
	} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
		Game.gold();
	} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
		Game.gold();
	} else {
		notValid();
	}
};

function enterport() {
	if (Game.player.location === 2 && Game.player.globalLocation === 0) {
		Game.draydonPort();
	} else {
		notValid();
	}
};

function buy() {
	if (Game.player.location === 2 && Game.player.globalLocation === 2) {
		Game.baitStore();
	} else if (Game.player.location === 2 && Game.player.globalLocation === 3) {
		var text = '';
		if (Game.player.silver >= 50) {
			Game.player.silver -= 50;
			Game.player.bait += 20;
			text += ('You have ' + Game.player.silver + ' silver.<br />');
			text += ('You have ' + Game.player.bait + ' pieces of bait.<br />');
		} else {
			text += ('Bait costs 50 silver.<br />');
			text += ('You have ' + Game.player.silver + ' silver.<br />');
		}
		display(text);
		setTimeout(function () {
			Game.draydonPort();
		}, 3000);
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 1) {
		Game.bronzeSwordBuy();
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 2) {
		Game.goldSwordBuy();
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 3) {
		Game.ironSwordBuy();
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 4) {
		Game.steelSwordBuy();
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 5) {
		Game.titaniumSwordBuy();
	} else if (Game.player.shopLocation === 1 && Game.player.globalLocation === 6) {
		Game.tungstenSwordBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 1) {
		Game.bronzeArmourBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 2) {
		Game.goldArmourBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 3) {
		Game.ironArmourBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 4) {
		Game.steelArmourBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 5) {
		Game.titaniumArmourBuy();
	} else if (Game.player.shopLocation === 2 && Game.player.globalLocation === 6) {
		Game.tungstenArmourBuy();
	} else {
		notValid();
	}
};

function fish() {
	if (Game.player.location === 2 && Game.player.globalLocation === 2) {
		Game.draydonPort();
	} else {
		notValid();
	}
};

function pay() {
	if (Game.player.location === 1 && Game.player.globalLocation === 3) {
		var text = '';
		text += ('You pay the gaurds 50 silver.<br />');
		text += ('They let you pass.<br />');
		silver -= 50;
		text += ('You now have ' + silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			Game.grimtol();
		}, 3000);
	} else {
		notValid();
	}
};

function explore() {
	if (Game.player.location === 4 && Game.player.globalLocation === 0) {
		Game.magicalForestEntrance();
	} else if (Game.player.location === 4 && Game.player.globalLocation === 2) {
		Game.magicalForest();
	} else {
		notValid();
	}
};

function entertower() {
	if (Game.player.location === 4 && Game.player.globalLocation === 0) {
		Game.magicianTowerEntrance();
	} else if (Game.player.location === 4 && Game.player.globalLocation === 2) {
		Game.magicianTowerEntrance();
	} else {
		notValid();
	}
};

function findway() {
	if (Game.player.location === 4 && Game.player.globalLocation === 3) {
		Game.findWayForest(0);
	} else {
		notValid();
	}
};

function searchfor() {
	if (Game.player.location === 4 && Game.player.globalLocation === 3) {
		Game.findWayForest(1);
	} else {
		notValid();
	}
};

function attempttoleave() {
	if (Game.player.location === 4 && Game.player.globalLocation === 3) {
		Game.findWayForest(2);
	} else if (Game.player.location === 4 && Game.player.globalLocation === 4) {
		Game.findWayForest(2);
	} else {
		notValid();
	}
};

function browseswords() {
	if (Game.player.shopLocation === 0 || Game.player.shopLocation === 1) {
		Game.swordShop();
	} else {
		notValid();
	}
};

function browsearmour() {
	if (Game.player.shopLocation === 0 || Game.player.shopLocation === 2) {
		Game.armourShop();
	} else {
		notValid();
	}
};

function sellwood() {
	if (Game.player.shopLocation === 0) {
		Game.sellwood();
	} else if (Game.player.shopLocation === 3) {
		Game.sellwoodcomplete();
	} else {
		notValid();
	}
};

function sellores() {
	if (Game.player.shopLocation === 0) {
		Game.sellore();
	} else {
		notValid();
	}
};

function selliron() {
	if (Game.player.shopLocation === 4) {
		Game.selliron();
	} else {
		notValid();
	}
};

function sellcoal() {
	if (Game.player.shopLocation === 4) {
		Game.sellcoal();
	} else {
		notValid();
	}
};

function sellgold() {
	if (Game.player.shopLocation === 4) {
		Game.sellgold();
	} else {
		notValid();
	}
};

function bronzesword() {
	if (Game.player.shopLocation === 1) {
		Game.bronzeSword();
	} else {
		notValid();
	}
};

function goldsword() {
	if (Game.player.shopLocation === 1) {
		Game.goldSword();
	} else {
		notValid();
	}
};

function ironsword() {
	if (Game.player.shopLocation === 1) {
		Game.ironSword();
	} else {
		notValid();
	}
};

function steelsword() {
	if (Game.player.shopLocation === 1) {
		Game.steelSword();
	} else {
		notValid();
	}
};

function titaniumsword() {
	if (Game.player.shopLocation === 1) {
		Game.titaniumSword();
	} else {
		notValid();
	}
};

function tungstensword() {
	if (Game.player.shopLocation === 1) {
		Game.tungstenSword();
	} else {
		notValid();
	}
};

function bronzearmour() {
	if (Game.player.shopLocation === 2) {
		Game.bronzeArmour();
	} else {
		notValid();
	}
};

function goldarmour() {
	if (Game.player.shopLocation === 2) {
		Game.goldArmour();
	} else {
		notValid();
	}
};

function ironarmour() {
	if (Game.player.shopLocation === 2) {
		Game.ironArmour();
	} else {
		notValid();
	}
};

function steelarmour() {
	if (Game.player.shopLocation === 2) {
		Game.steelArmour();
	} else {
		notValid();
	}
};

function titaniumarmour() {
	if (Game.player.shopLocation === 2) {
		Game.titaniumArmour();
	} else {
		notValid();
	}
};

function tungstenarmour() {
	if (Game.player.shopLocation === 2) {
		Game.tungstenArmour();
	} else {
		notValid();
	}
};

function runfrom() {
	if (Game.player.location === 1 && Game.player.globalLocation === 4) {
		Game.runCave();
	} else if (Game.player.location === 4 && Game.player.globalLocation === 4) {
		Game.runForest();
	} else {
		notValid();
	}
};

function leave() {
	if (Game.player.shopLocation === 0 && Game.player.location === 1) {
		Game.backleigh();
	} else if (Game.player.shopLocation === 0 && Game.player.location === 2) {
		Game.draydonPort();
	} else if (Game.player.shopLocation === 0 && Game.player.location === 3) {
		Game.elden();
	} else if (Game.player.shopLocation === 0 && Game.player.location === 4) {
		Game.kirkoswald();
	} else if (Game.player.shopLocation === 0 && Game.player.location === 5) {
		Game.grimtol();
	} else if (Game.player.globalLocation === 4 && Game.player.location === 1) {
		Game.caveLeave();
	} else {
		notValid();
	}
};

