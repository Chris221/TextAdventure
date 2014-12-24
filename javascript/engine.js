/**
*
*  Engine file for Tower Quest
*  http://ChrisSiena.com/
*
**/
var Engine = {
	interpret: function(input) {
		var command = input.trim().split(' ');
		var holder = command.slice(1).join(' ');
		command[1] = holder;
		return command;
	},
	
	execute: function(cmd) {
		var action = cmd[0];
		var object = cmd[1];
		var method = player[action];
		if(method) {
			method(object);
		} else {
			alert('Invalid action');
		}
	},
	
	display: function(text) {
		var output = document.getElementById('output');
		output.innerHTML = '';
		output.innerHTML = text;
		var nullOutput = document.getElementById('null_output');
		nullOutput.innerHTML = '';
		var rightOutput = document.getElementById('right_output');
		rightOutput.innerHTML = '';
	},
	
	run: function() {
		var input = document.querySelector('input').value;
		input = input.toLowerCase();
		document.querySelector('input').value = '';
		Engine.trans(input);
	},
	
	notValid: function() {
		var rightOutput = document.getElementById('right_output');
		rightOutput.innerHTML = '';
		var nullOutput = document.getElementById('null_output');
		nullOutput.innerHTML = '';
		nullOutput.innerHTML = 'That command is not a valid command at this location.';
	},
	
	rightdisplay: function(text) {
		var nullOutput = document.getElementById('null_output');
		nullOutput.innerHTML = '';
		var rightOutput = document.getElementById('right_output');
		rightOutput.innerHTML = '';
		rightOutput.innerHTML = text;
	},
	
	trans: function(input) {
		switch(input) {
			case 'start':
				Engine.start();
				break;
			case 'go north':
				Engine.north();
				break;
			case 'go west':
				Engine.west();
				break;
			case 'go east':
				Engine.east();
				break;
			case 'go south':
				Engine.south();
				break;
			case 'enter the cave':
				Engine.enterthecave();
				break;
			case 'chop wood':
				Engine.chopwood();
				break;
			case 'enter the mine':
				Engine.enterthemine();
				break;
			case 'enter the shop':
				Engine.entertheshop();
				break;
			case 'return':
				Engine.goback();
				break;
			case 'attack':
				Engine.attack();
				break;
			case 'swing':
				Engine.swing();
				break;
			case 'eat':
				Engine.eat();
				break;
			case 'run':
				Engine.runfrom();
				break;
			case 'leave':
				Engine.leave();
				break;
			case 'mine iron':
				Engine.mineiron();
				break;
			case 'mine coal':
				Engine.minecoal();
				break;
			case 'mine gold':
				Engine.minegold();
				break;
			case 'enter the draydon port':
				Engine.enterport();
				break;
			case 'buy':
				Engine.buy();
				break;
			case 'fish':
				Engine.fish();
				break;
			case 'pay':
				Engine.pay();
				break;
			case 'explore':
				Engine.explore();
				break;
			case 'enter the magician tower':
				Engine.entertower();
				break;
			case 'find your way':
				Engine.findway();
				break;
			case 'search':
				Engine.searchfor();
				break;
			case 'attempt to leave':
				Engine.attempttoleave();
				break;
			case 'browse swords':
				Engine.browseswords();
				break;
			case 'browse armour':
				Engine.browsearmour();
				break;
			case 'sell wood':
				Engine.sellwood();
				break;
			case 'sell ores':
				Engine.sellores();
				break;
			case 'sell iron':
				Engine.selliron();
				break;
			case 'sell gold':
				Engine.sellgold();
				break;
			case 'sell coal':
				Engine.sellcoal();
				break;
			case 'bronze sword':
				Engine.bronzesword();
				break;
			case 'gold sword':
				Engine.goldsword();
				break;
			case 'iron sword':
				Engine.ironsword();
				break;
			case 'steel sword':
				Engine.steelsword();
				break;
			case 'titanium sword':
				Engine.titaniumsword();
				break;
			case 'tungsten sword':
				Engine.tungstensword();
				break;
			case 'bronze armour':
				Engine.bronzearmour();
				break;
			case 'gold armour':
				Engine.goldarmour();
				break;
			case 'iron armour':
				Engine.ironarmour();
				break;
			case 'steel armour':
				Engine.steelarmour();
				break;
			case 'titanium armour':
				Engine.titaniumarmour();
				break;
			case 'tungsten armour':
				Engine.tungstenarmour();
				break;
			case 'cheats':
				Engine.cheat();
				break;
			case 'give silver':
				Engine.giveSilver();
				break;
			case 'give fish':
				Engine.giveFish();
				break;
			case 'god':
				Engine.god();
				break;
			case 'god sword':
				Engine.godSword();
				break;
			case 'god armour':
				Engine.godArmour();
				break;
			case 'stats':
				Engine.stats();
				break;
			default:
				Engine.notValid();
				break;
		}
	},
	
	cheat: function() {
		var text = '';
		if (Game.player.cheat === false) {
			Game.player.cheat = true;
			text = '<b>Cheats:</b> <font color="black">ON</font><br />';
		} else {
			Game.player.cheat = false;
			text = '<b>Cheats:</b> <font color="black">OFF</font><br />';
		}
		Engine.rightdisplay(text);
	},
	
	giveSilver: function() {
		if (Game.player.cheat === true) {
			Game.player.silver += 100000;
			Engine.rightdisplay('<font color="black"><b>+100,000 Silver</b></font><br />');
		} else {
			Engine.notValid();
		}
	},
	
	giveFish: function() {
		if (Game.player.cheat === true) {
			Game.player.fish += 100000;
			Engine.rightdisplay('<font color="black"><b>+100,000 Fish</b></font><br />');
		} else {
			Engine.notValid();
		}
	},
	
	godSword: function() {
		if (Game.player.cheat === true) {
			if (Game.player.sword === 100) {
				Game.player.sword = Game.player.swordcheat;
				var text = '';
				text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
				Game.swordName();
				text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font> from before.<br />');
				Engine.rightdisplay(text);
			} else {
				Game.player.swordcheat = Game.player.sword;
				Game.player.sword = 100;
				var text = '';
				text += ('You unequipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
				Game.swordName();
				text += ('You equipped the <font color="black"><b>' + Game.player.swordname + '</b></font>.<br />');
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
	},
	
	godArmour: function() {
		if (Game.player.cheat === true) {
			if (Game.player.armour === 100) {
				Game.player.armour = Game.player.armourcheat;
				Game.player.healthstatic = Game.player.healthstaticcheat;
				Game.player.health = Game.player.healthstatic;
				var text = '';
				text += ('You unequipped the <font color="black"><b>' + Game.player.armourname + '</b></font>.<br />');
				Game.armourName();
				text += ('You equipped the <font color="black"><b>' + Game.player.armourname + '</b></font> from before.<br />');
				Engine.rightdisplay(text);
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
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
	},
	
	god: function() {
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
				Engine.rightdisplay(text);
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
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
	},
	
	north: function() {
		if (Game.player.location === 1) {
			Game.elden();
		} else if (Game.player.location === 5) {
			Game.kirkoswald();
		} else {
			Engine.notValid();
		}
	},
	
	south: function() {
		if (Game.player.location === 3) {
			Game.backleigh();
		} else if (Game.player.location === 4) {
			Game.grimtol();
		} else {
			Engine.notValid();
		}
	},
	
	west: function() {
		if (Game.player.location === 1) {
			Game.draydon();
		} else if (Game.player.location === 4) {
			Game.elden();
		} else if (Game.player.location === 5) {
			Game.grimtolBridge();
		} else {
			Engine.notValid();
		}
	},
	
	east: function() {
		if (Game.player.location === 1) {
			Game.grimtolBridge();
		} else if (Game.player.location === 2) {
			Game.backleigh();
		} else if (Game.player.location === 3) {
			Game.kirkoswald();
		} else {
			Engine.notValid();
		}
	},
	
	enterthecave: function() {
		if (Game.player.location === 1 && Game.player.globalLocation === 0) {
			Game.backleighCaveEntrance();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 3) {
			Game.backleighCaveEnter();
		} else {
			Engine.notValid();
		}
	},
	
	chopwood: function() {
		if (Game.player.location === 1 && Game.player.globalLocation === 0) {
			Game.backleighLumber();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
			Game.lumber();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 0) {
			Game.eldenLumber();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 1) {
			Game.lumber();
		} else {
			Engine.notValid();
		}
	},
	
	enterthemine: function() {
		if (Game.player.location === 5 && Game.player.globalLocation === 0) {
			Game.grimtolMine();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 0) {
			Game.backleighMine();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 0) {
			Game.eldenMine();
		} else {
			Engine.notValid();
		}
	},
	
	entertheshop: function() {
		if (Game.player.globalLocation === 0) {
			Game.shop();
		} else {
			Engine.notValid();
		}
	},
	
	goback: function() {
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
		} else if (Game.player.location === 3 && Game.player.globalLocation === 1) {
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
			Engine.notValid();
		}
	},
	
	mineiron: function() {
		if (Game.player.location === 5 && Game.player.globalLocation === 2) {
			Game.iron();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
			Game.iron();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
			Game.iron();
		} else {
			Engine.notValid();
		}
	},
	
	minecoal: function() {
		if (Game.player.location === 5 && Game.player.globalLocation === 2) {
			Game.coal();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
			Game.coal();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
			Game.coal();
		} else {
			Engine.notValid();
		}
	},
	
	minegold: function() {
		if (Game.player.location === 5 && Game.player.globalLocation === 2) {
			Game.gold();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 2) {
			Game.gold();
		} else if (Game.player.location === 3 && Game.player.globalLocation === 2) {
			Game.gold();
		} else {
			Engine.notValid();
		}
	},
	
	enterport: function() {
		if (Game.player.location === 2 && Game.player.globalLocation === 0) {
			Game.draydonPort();
		} else {
			Engine.notValid();
		}
	},
	
	buy: function() {
		if (Game.player.location === 2 && Game.player.globalLocation === 2) {
			Game.baitStore();
		} else if (Game.player.location === 2 && Game.player.globalLocation === 3) {
			Game.baitBuy();
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
			Engine.notValid();
		}
	},
	
	fish: function() {
		if (Game.player.location === 2 && Game.player.globalLocation === 2) {
			Game.fish();
		} else {
			Engine.notValid();
		}
	},
	
	pay: function() {
		if (Game.player.location === 1 && Game.player.globalLocation === 3) {
			Game.grimtolBridgePay();
		} else {
			Engine.notValid();
		}
	},
	
	explore: function() {
		if (Game.player.location === 4 && Game.player.globalLocation === 0) {
			Game.magicalForestEntrance();
		} else if (Game.player.location === 4 && Game.player.globalLocation === 2) {
			Game.magicalForest();
		} else {
			Engine.notValid();
		}
	},
	
	entertower: function() {
		if (Game.player.location === 4 && Game.player.globalLocation === 0) {
			Game.magicianTowerEntrance();
		} else if (Game.player.location === 4 && Game.player.globalLocation === 2) {
			Game.magicianTowerEntrance();
		} else {
			Engine.notValid();
		}
	},
	
	findway: function() {
		if (Game.player.location === 4 && Game.player.globalLocation === 3) {
			Game.findWayForest(0);
		} else {
			Engine.notValid();
		}
	},
	
	searchfor: function() {
		if (Game.player.location === 4 && Game.player.globalLocation === 3) {
			Game.findWayForest(1);
		} else {
			Engine.notValid();
		}
	},
	
	attempttoleave: function() {
		if (Game.player.location === 4 && Game.player.globalLocation === 3) {
			Game.findWayForest(2);
		} else if (Game.player.location === 4 && Game.player.globalLocation === 4) {
			Game.findWayForest(2);
		} else {
			Engine.notValid();
		}
	},
	
	browseswords: function() {
		if (Game.player.shopLocation === 0 || Game.player.shopLocation === 1) {
			Game.swordShop();
		} else {
			Engine.notValid();
		}
	},
	
	browsearmour: function() {
		if (Game.player.shopLocation === 0 || Game.player.shopLocation === 2) {
			Game.armourShop();
		} else {
			Engine.notValid();
		}
	},
	
	sellwood: function() {
		if (Game.player.shopLocation === 0) {
			Game.sellwood();
		} else if (Game.player.shopLocation === 3) {
			Game.sellwoodcomplete();
		} else {
			Engine.notValid();
		}
	},
	
	sellores: function() {
		if (Game.player.shopLocation === 0) {
			Game.sellore();
		} else {
			Engine.notValid();
		}
	},
	
	selliron: function() {
		if (Game.player.shopLocation === 4) {
			Game.selliron();
		} else {
			Engine.notValid();
		}
	},
	
	sellcoal: function() {
		if (Game.player.shopLocation === 4) {
			Game.sellcoal();
		} else {
			Engine.notValid();
		}
	},
	
	sellgold: function() {
		if (Game.player.shopLocation === 4) {
			Game.sellgold();
		} else {
			Engine.notValid();
		}
	},
	
	bronzesword: function() {
		if (Game.player.shopLocation === 1) {
			Game.bronzeSword();
		} else {
			Engine.notValid();
		}
	},
	
	goldsword: function() {
		if (Game.player.shopLocation === 1) {
			Game.goldSword();
		} else {
			Engine.notValid();
		}
	},
	
	ironsword: function() {
		if (Game.player.shopLocation === 1) {
			Game.ironSword();
		} else {
			Engine.notValid();
		}
	},
	
	steelsword: function() {
		if (Game.player.shopLocation === 1) {
			Game.steelSword();
		} else {
			Engine.notValid();
		}
	},
	
	titaniumsword: function() {
		if (Game.player.shopLocation === 1) {
			Game.titaniumSword();
		} else {
			Engine.notValid();
		}
	},
	
	tungstensword: function() {
		if (Game.player.shopLocation === 1) {
			Game.tungstenSword();
		} else {
			Engine.notValid();
		}
	},
	
	bronzearmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.bronzeArmour();
		} else {
			Engine.notValid();
		}
	},
	
	goldarmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.goldArmour();
		} else {
			Engine.notValid();
		}
	},
	
	ironarmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.ironArmour();
		} else {
			Engine.notValid();
		}
	},
	
	steelarmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.steelArmour();
		} else {
			Engine.notValid();
		}
	},
	
	titaniumarmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.titaniumArmour();
		} else {
			Engine.notValid();
		}
	},
	
	tungstenarmour: function() {
		if (Game.player.shopLocation === 2) {
			Game.tungstenArmour();
		} else {
			Engine.notValid();
		}
	},
	
	runfrom: function() {
		if (Game.player.location === 1 && Game.player.globalLocation === 4) {
			Game.runCave();
		} else if (Game.player.location === 4 && Game.player.globalLocation === 4) {
			Game.runForest();
		} else {
			Engine.notValid();
		}
	},
	
	leave: function() {
		if (Game.player.shopLocation === 0) {
			Game.backToCity();
		} else if (Game.player.shopLocation === 0 && Game.player.location === 1) {
			Game.backleigh();
		} else if (Game.player.shopLocation === 0 && Game.player.location === 2) {
			Game.draydon();
		} else if (Game.player.shopLocation === 0 && Game.player.location === 3) {
			Game.elden();
		} else if (Game.player.shopLocation === 0 && Game.player.location === 4) {
			Game.kirkoswald();
		} else if (Game.player.shopLocation === 0 && Game.player.location === 5) {
			Game.grimtol();
		} else if (Game.player.globalLocation === 4 && Game.player.location === 1 && Game.player.shopLocation === -1) {
			Game.caveLeave();
		} else {
			Engine.notValid();
		}
	},
	
	swing: function() {
		if (Combat.enemy.fighting) {
			Combat.monster2();
		} else {
			Engine.notValid();
		}
	},
	
	eat: function() {
		if (Combat.enemy.fighting) {
			Game.eat();
		} else {
			Engine.notValid();
		}
	},
	
	attack: function() {
		if (Combat.enemy.fighting === false && (
			(Game.player.location === 4 && Game.player.globalLocation === 4)
			||
			(Game.player.location === 1 && Game.player.globalLocation === 4)
		)) {
			Combat.attack();
		} else {
			Engine.notValid();
		}
	},
	
	start: function() {
		if (Game.player.start) {
			Game.player.start = false;
			Game.start();
		} else {
			Engine.notValid();
		}
	},
	
	stats: function() {
		var text = '';
		text += ('Kills: <font color="black">' + Game.player.kills + '</font><br />');
		text += ('Deaths: <font color="black">' + Game.player.deaths + '</font><br />');
		text += ('K/D: <font color="black">' + Math.round(Game.player.kills / Game.player.deaths*100)/100 + '</font><br />');
		text += ('Attack: <font color="black">' + Game.player.attack + '</font><br />');
		text += ('Attack: <font color="black">' + Math.round(Game.player.attackxp / (Game.player.attack*21)*100) + '%</font><br />');
		text += ('Defense: <font color="black">' + Game.player.defense + '</font><br />');
		text += ('Defense: <font color="black">' + Math.round(Game.player.defensexp / (Game.player.defense*21)*100) + '%</font><br />');
		text += ('Health: <font color="black">' + Game.player.health + '</font><br />');
		text += ('Health: <font color="black">' + Math.round(Game.player.health /  Game.player.healthstatic*100) + '%</font><br />');
		text += ('Max Health: <font color="black">' + Game.player.healthstatic + '</font><br />');
		text += ('Mining: <font color="black">' + Game.player.mining + '</font><br />');
		text += ('Mining: <font color="black">' + Math.round(Game.player.miningxp / (Game.player.mining*21)*100) + '%</font><br />');
		text += ('Fish: <font color="black">' + Game.player.fish + '</font><br />');
		text += ('Bait: <font color="black">' + Game.player.bait + '</font><br />');
		text += ('Fishing: <font color="black">' + Game.player.fishing + '</font><br />');
		text += ('Fishing: <font color="black">' + Math.round(Game.player.fishingxp / (Game.player.fishing*21)*100) + '%</font><br />');
		text += ('Woodcutting: <font color="black">' + Game.player.woodcutting + '</font><br />');
		text += ('Woodcutting: <font color="black">' + Math.round(Game.player.woodcuttingxp / (Game.player.woodcutting*21)*100) + '%</font><br />');
		text += ('Iron: <font color="black">' + Game.player.iron + '</font><br />');
		text += ('Coal: <font color="black">' + Game.player.coal + '</font><br />');
		text += ('Gold: <font color="black">' + Game.player.gold + '</font><br />');
		text += ('Wood: <font color="black">' + Game.player.wood + '</font><br />');
		text += ('Weapon: <font color="black">' + Game.player.swordname + '</font><br />');
		text += ('Armour: <font color="black">' + Game.player.armourname + '</font><br />');
		text += ('Silver: <font color="black">' + Game.player.silver + '</font><br />');
		Engine.rightdisplay(text);
	},
};