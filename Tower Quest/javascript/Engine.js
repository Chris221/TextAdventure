/**
*
*  Engine file for Tower Quest
*  http://ChrisSiena.com/
*
**/
var Engine = {
	Engine: {
		inputBox: false,
		stats: false,
		cheats: false,
		base: "1, 0, 1, 0, 10, 10, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, false, true, Fists, none, ",
		cName: '_gameSave',
		cDomain: 'chrissiena.com',
	},
	
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
		Engine.Engine.stats = false;
		Engine.hideInput();
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
		Engine.Engine.stats = false;
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
			case 'kill':
				Engine.dead();
				break;
			case 'suicide':
				Game.dead();
				break;
			default:
				Engine.notValid();
				break;
		}
	},
	
	cheat: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		var text = '';
		if (Game.player.cheat === false) {
			Game.player.cheat = true;
			text = '<span class="bold">Cheats:</span> <span class="stats bold">ON</span><br />';
			if (!Engine.Engine.cheats) {
				new Button.Button({
					id: 'SliverButton',
					text: _('Give 100,000 Silver'),
					click: Engine.giveSilver,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'FishButton',
					text: _('Give 100,000 Fish'),
					click: Engine.giveFish,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodSwordButton',
					text: _('God Sword'),
					click: Engine.godSword,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodArmourButton',
					text: _('God Armour'),
					click: Engine.godArmour,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodButton',
					text: _('God'),
					click: Engine.god,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				Engine.Engine.cheats = true;
				new Button.Button({
					id: 'CheatButton',
					text: _('Cheats'),
					click: Engine.cheat,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'ResetButton',
					text: _('RESET!!!'),
					click: Save.resetGame,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				Engine.Engine.cheats = true;
			} else {
				$("div#SliverButton").show();
				$("div#FishButton").show();
				$("div#GodSwordButton").show();
				$("div#GodArmourButton").show();
				$("div#GodButton").show();
				$("div#CheatButton").show();
				$("div#ResetButton").show();
			}
		} else {
			Game.player.cheat = false;
			text = '<span class="bold">Cheats:</span> <span class="stats bold">OFF</span><br />';
			$("div#SliverButton").hide();
			$("div#FishButton").hide();
			$("div#GodSwordButton").hide();
			$("div#GodArmourButton").hide();
			$("div#GodButton").hide();
			$("div#CheatButton").hide();
			$("div#ResetButton").hide();
		}
		Engine.rightdisplay(text);
		Engine.Engine.stats = false;
	},
	
	cheatLoad: function() {
		if (Game.player.cheat === true) {
			if (!Engine.Engine.cheats) {
				new Button.Button({
					id: 'SliverButton',
					text: _('Give 100,000 Silver'),
					click: Engine.giveSilver,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'FishButton',
					text: _('Give 100,000 Fish'),
					click: Engine.giveFish,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodSwordButton',
					text: _('God Sword'),
					click: Engine.godSword,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodArmourButton',
					text: _('God Armour'),
					click: Engine.godArmour,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'GodButton',
					text: _('God'),
					click: Engine.god,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				Engine.Engine.cheats = true;
				new Button.Button({
					id: 'CheatButton',
					text: _('Cheats'),
					click: Engine.cheat,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				new Button.Button({
					id: 'ResetButton',
					text: _('RESET!!!'),
					click: Save.resetGame,
					width: Game.player.width,
				}).appendTo('span#rightColButton');
				Engine.Engine.cheats = true;
			} else {
				$("div#SliverButton").show();
				$("div#FishButton").show();
				$("div#GodSwordButton").show();
				$("div#GodArmourButton").show();
				$("div#GodButton").show();
				$("div#CheatButton").show();
				$("div#ResetButton").show();
			}
		} else {
			$("div#SliverButton").hide();
			$("div#FishButton").hide();
			$("div#GodSwordButton").hide();
			$("div#GodArmourButton").hide();
			$("div#GodButton").hide();
			$("div#CheatButton").hide();
			$("div#ResetButton").hide();
		}
	},
	
	giveSilver: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		if (Game.player.cheat === true) {
			Game.player.silver += 100000;
			Engine.rightdisplay('<span class="stats bold">+100,000 Silver</span><br />');
		} else {
			Engine.notValid();
		}
		Engine.Engine.stats = false;
	},
	
	giveFish: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		if (Game.player.cheat === true) {
			Game.player.fish += 100000;
			Engine.rightdisplay('<span class="stats bold">+100,000 Fish</span><br />');
		} else {
			Engine.notValid();
		}
		Engine.Engine.stats = false;
	},
	
	godSword: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		if (Game.player.cheat === true) {
			if (Game.player.sword === 100) {
				Game.player.sword = Game.player.swordcheat;
				var text = '';
				text += ('You unequipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				Game.swordName();
				text += ('You equipped the <span class="stats bold">' + Game.player.swordname + '</span> from before.<br />');
				Engine.rightdisplay(text);
			} else {
				Game.player.swordcheat = Game.player.sword;
				Game.player.sword = 100;
				var text = '';
				text += ('You unequipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				Game.swordName();
				text += ('You equipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
		Engine.Engine.stats = false;
	},
	
	godArmour: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		if (Game.player.cheat === true) {
			if (Game.player.armour === 100) {
				Game.player.armour = Game.player.armourcheat;
				Game.player.healthstatic = Game.player.healthstaticcheat;
				Game.player.health = Game.player.healthstatic;
				var text = '';
				text += ('You unequipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Game.armourName();
				text += ('You equipped the <span class="stats bold">' + Game.player.armourname + '</span> from before.<br />');
				Engine.rightdisplay(text);
			} else {
				Game.player.armourcheat = Game.player.armour;
				Game.player.armour = 100;
				Game.player.health = 100000;
				Game.player.healthstaticcheat = Game.player.healthstatic;
				Game.player.healthstatic = 100000;
				var text = '';
				text += ('You unequipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Game.armourName();
				text += ('You equipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
		Engine.Engine.stats = false;
	},
	
	god: function() {
		Engine.Engine.stats = false;
		Engine.hideInput();
		if (Game.player.cheat === true) {
			if (Game.player.sword === 100 && Game.player.armour === 100) {
				Game.player.sword = Game.player.swordcheat;
				Game.player.armour = Game.player.armourcheat;
				Game.player.healthstatic = Game.player.healthstaticcheat;
				Game.player.health = Game.player.healthstatic;
				var text = '';
				text += ('You unequipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				Game.swordName();
				text += ('You equipped the <span class="stats bold">' + Game.player.swordname + '</span> from before.<br />');
				text += ('You unequipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Game.armourName();
				text += ('You equipped the <span class="stats bold">' + Game.player.armourname + '</span> from before.<br />');
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
				text += ('You unequipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				Game.swordName();
				text += ('You equipped the <span class="stats bold">' + Game.player.swordname + '</span>.<br />');
				text += ('You unequipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Game.armourName();
				text += ('You equipped the <span class="stats bold">' + Game.player.armourname + '</span>.<br />');
				Engine.rightdisplay(text);
			}
		} else {
			Engine.notValid();
		}
		Engine.Engine.stats = false;
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
			Game.netStore();
		} else if (Game.player.location === 2 && Game.player.globalLocation === 3) {
			Game.netBuy();
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
	
	dead: function() {
			Game.player.health = -1;
	},
	
	showInput: function() {
		if (!Engine.Engine.inputBox) {
			Engine.Engine.inputBox = true;
			$("input").show();
		} else {
			Engine.Engine.inputBox = false;
			$("input").hide();
		}
	},
	
	hideInput: function() {
		Engine.Engine.inputBox = false;
		$("input").hide();
	},
	
	stats: function() {
		var text = '';
		if (!Engine.Engine.stats) {
			Engine.Engine.stats = true;
			var kd = 0;
			if (Game.player.deaths === 0 && Game.player.kills === 0) {
				kd = 0;
			} else if (Game.player.deaths === 0 && Game.player.kills != 0){
				kd = Game.player.kills + '.00';
			} else {
				kd = Math.round(Game.player.kills / Game.player.deaths*100)/100;
			}
			var attackP = Math.round(Game.player.attackxp / (Game.player.attack*21)*100);
			var defenseP = Math.round(Game.player.defensexp / (Game.player.defense*21)*100);
			var healthP = Math.round(Game.player.health /  Game.player.healthstatic*100);
			var miningP = Math.round(Game.player.miningxp / (Game.player.mining*21)*100);
			var fishingP = Math.round(Game.player.fishingxp / (Game.player.fishing*21)*100);
			var woodCuttingP = Math.round(Game.player.woodcuttingxp / (Game.player.woodcutting*21)*100);
			text += ('Kills: <span class="stats">' + Game.player.kills + '</span><br />');
			text += ('Deaths: <span class="stats">' + Game.player.deaths + '</span><br />');
			text += ('K/D: <span class="stats">' + kd + '</span><br />');
			text += ('Attack: <span class="stats">' + Game.player.attack + '</span><br />');
			text += ('Attack: <span class="stats">' + attackP + '%</span><br />');
			text += ('Defense: <span class="stats">' + Game.player.defense + '</span><br />');
			text += ('Defense: <span class="stats">' + defenseP + '%</span><br />');
			text += ('Health: <span class="stats">' + Game.player.health + '</span><br />');
			text += ('Health: <span class="stats">' + healthP + '%</span><br />');
			text += ('Max Health: <span class="stats">' + Game.player.healthstatic + '</span><br />');
			text += ('Mining: <span class="stats">' + Game.player.mining + '</span><br />');
			text += ('Mining: <span class="stats">' + miningP + '%</span><br />');
			text += ('Fish: <span class="stats">' + Game.player.fish + '</span><br />');
			text += ('Nets: <span class="stats">' + Game.player.net + '</span><br />');
			text += ('Fishing: <span class="stats">' + Game.player.fishing + '</span><br />');
			text += ('Fishing: <span class="stats">' + fishingP + '%</span><br />');
			text += ('Woodcutting: <span class="stats">' + Game.player.woodcutting + '</span><br />');
			text += ('Woodcutting: <span class="stats">' + woodCuttingP + '%</span><br />');
			text += ('Iron: <span class="stats">' + Game.player.iron + '</span><br />');
			text += ('Coal: <span class="stats">' + Game.player.coal + '</span><br />');
			text += ('Gold: <span class="stats">' + Game.player.gold + '</span><br />');
			text += ('Wood: <span class="stats">' + Game.player.wood + '</span><br />');
			text += ('Weapon: <span class="stats">' + Game.player.swordname + '</span><br />');
			text += ('Armour: <span class="stats">' + Game.player.armourname + '</span><br />');
			text += ('Silver: <span class="stats">' + Game.player.silver + '</span><br />');
		} else {
			Engine.Engine.stats = false;
			text += ('');
		}
		Engine.rightdisplay(text);
		Engine.showInput();
	},
	
	gameString: function() {
		var string = (Game.player.attack + ', ' + Game.player.attackxp + ', ' + Game.player.defense + ', ' + Game.player.defensexp + ', ' + Game.player.health + ', ' + Game.player.healthstatic + ', ' + Game.player.healthstaticcheat + ', ' + Game.player.mining + ', ' + Game.player.miningxp + ', ' + Game.player.fish + ', ' + Game.player.fishing + ', ' + Game.player.fishingxp + ', ' + Game.player.net + ', ' + Game.player.woodcutting + ', ' + Game.player.woodcuttingxp + ', ' + Game.player.iron + ', ' + Game.player.gold + ', ' + Game.player.coal + ', ' + Game.player.wood + ', ' + Game.player.sword + ', ' + Game.player.armour + ', ' + Game.player.swordcheat + ', ' + Game.player.armourcheat + ', ' + Game.player.silver + ', ' + Game.player.key + ', ' + Game.player.kills + ', ' + Game.player.deaths + ', ' + Game.player.woodIncome + ', ' + Game.player.ironIncome + ', ' + Game.player.goldIncome + ', ' + Game.player.coalIncome + ', ' + Game.player.location + ', ' + Game.player.globalLocation + ', ' + Game.player.towerLocation + ', ' + Game.player.shopLocation + ', ' + Game.player.cheat + ', ' + Game.player.start + ', ' + Game.player.swordname + ', ' + Game.player.armourname + ', ' + Game.player.name);
	return string;
	},
	
	convertString: function(decodedString) {
		var player = decodedString.split(', ');
		Game.player.attack = parseInt(player[0]);
		Game.player.attackxp = parseInt(player[1]);
		Game.player.defense = parseInt(player[2]);
		Game.player.defensexp = parseInt(player[3]);
		Game.player.health = parseInt(player[4]);
		Game.player.healthstatic = parseInt(player[5]);
		Game.player.healthstaticcheat = parseInt(player[6]);
		Game.player.mining = parseInt(player[7]);
		Game.player.miningxp = parseInt(player[8]);
		Game.player.fish = parseInt(player[9]);
		Game.player.fishing = parseInt(player[10]);
		Game.player.fishingxp = parseInt(player[11]);
		Game.player.net = parseInt(player[12]);
		Game.player.woodcutting = parseInt(player[13]);
		Game.player.woodcuttingxp = parseInt(player[14]);
		Game.player.iron = parseInt(player[15]);
		Game.player.gold = parseInt(player[16]);
		Game.player.coal = parseInt(player[17]);
		Game.player.wood = parseInt(player[18]);
		Game.player.sword = parseInt(player[19]);
		Game.player.armour = parseInt(player[20]);
		Game.player.swordcheat = parseInt(player[21]);
		Game.player.armourcheat = parseInt(player[22]);
		Game.player.silver = parseInt(player[23]);
		Game.player.key = parseInt(player[24]);
		Game.player.kills = parseInt(player[25]);
		Game.player.deaths = parseInt(player[26]);
		Game.player.woodIncome = parseInt(player[27]);
		Game.player.ironIncome = parseInt(player[28]);
		Game.player.goldIncome = parseInt(player[29]);
		Game.player.coalIncome = parseInt(player[30]);
		Game.player.location = parseInt(player[31]);
		Game.player.globalLocation = parseInt(player[32]);
		Game.player.towerLocation = parseInt(player[33]);
		Game.player.shopLocation = parseInt(player[34]);
		if (player[35] === 'true') {
			Game.player.cheat = true;
		} else {
			Game.player.cheat = false;
		}
		if (player[36] === 'true') {
			Game.player.start = true;
		} else {
			Game.player.start = false;
		}
		Game.player.swordname = player[37];
	 	Game.player.armourname = player[38];
		Game.player.name = player[39];
		Engine.cheatLoad();
	},
	
	init: function() {
		if(Engine.detectMobile()) {
			window.location = 'mobilegame.html';
		}
	},
	
	detectMobile: function() {
		if(window.innerWidth <= 800 && window.innerHeight <= 600) {
			return true;
		} else {
			return false;
		}
	},
	
};

$(window).load(function() {
	Game.help();
})