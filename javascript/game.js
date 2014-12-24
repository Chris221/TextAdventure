/**
*
*  Game main file for Tower Quest
*  http://ChrisSiena.com/
*
**/
var Game = {
	player: {
		attack: 1,
		attackxp: 0,
		defense: 1,
		defensexp: 0,
		health: 10,
		healthstatic: 10,
		healthstaticcheat: 0,
		mining: 1,
		miningxp: 0,
		fish: 0,
		fishing: 1,
		fishingxp: 0,
		bait: 0,
		woodcutting: 1,
		woodcuttingxp: 0,
		iron: 0,
		gold: 0,
		coal: 0,
		wood: 0,
		sword: 0,
		armour: 0,
		swordcheat: 0,
		armourcheat: 0,
		silver: 200,
		key: 0,
		kills: 0,
		deaths: 0,
		woodIncome: 0,
		ironIncome: 0,
		goldIncome: 0,
		coalIncome: 0,
		location: 0,
		globalLocation: 0,
		towerLocation: 0,
		shopLocation: 0,
		cheat: false,
		start: true,
		swordname: '',
	 	armourname: '',
		name: '',
		width: '125px',
	},
	
	start: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 1;
		Game.armourName();
		Game.swordName();
		var text = '';
		text += ('You find yourself in the Castle of Backleigh.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go North</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go West</b> to Draydon Keep.<br />');
		text += ('3) <b>Go East</b> to the Deserts of Grimtol.<br />');
		text += ('4) <b>Enter the cave</b> under Backleigh Castle.<br />');
		text += ('5) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('6) <b>Enter the mine</b>.<br />');
		text += ('7) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'NorthButton',
			text: _('Go North'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WestButton',
			text: _('Go West'),
			click: Game.draydon,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'EastButton',
			text: _('Go East'),
			click: Game.grimtolBridge,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CaveButton',
			text: _('Enter the cave'),
			click: Game.backleighCaveEntrance,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WoodButton',
			text: _('Chop wood'),
			click: Game.backleighLumber,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'MineButton',
			text: _('Enter the mine'),
			click: Game.backleighMine,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	backleigh: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 1;
		var text = '';
		text += ('You arrive in Backleigh Castle.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go North</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go West</b> to Draydon Keep.<br />');
		text += ('3) <b>Go East</b> to the Deserts of Grimtol.<br />');
		text += ('4) <b>Enter the cave</b> under Backleigh Castle.<br />');
		text += ('5) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('6) <b>Enter the mine</b>.<br />');
		text += ('7) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'NorthButton',
			text: _('Go North'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WestButton',
			text: _('Go West'),
			click: Game.draydon,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'EastButton',
			text: _('Go East'),
			click: Game.grimtolBridge,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CaveButton',
			text: _('Enter the cave'),
			click: Game.backleighCaveEntrance,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WoodButton',
			text: _('Chop wood'),
			click: Game.backleighLumber,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'MineButton',
			text: _('Enter the mine'),
			click: Game.backleighMine,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	backleighCaveEntrance: function() {
		Game.player.globalLocation = 3;
		var text = '';
		text += ('You are standing outside the cave in Backleigh.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <br /><b>\"ONLY ENTER IF YOU DARE!\" <br />\"THE CAVE IS FILLED WITH MONSTERS!\"</b><br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Enter the cave</b>.<br />');
		text += ('2) <b>Return</b> to Backleigh Castle.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'CaveButton',
			text: _('Enter the cave'),
			click: Game.backleighCaveEnter,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.caveLeave,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	  
	cave: function() {
		var b = 300;
		var r = Math.floor(Math.random() * (b-1 - 0));
		var x = '';
		if (r >= 0 && r < 20) {
			x = 'soldier';
		} else if (r >= 20 && r < 25) {
			x = 'dragon';
		} else if (r >= 25 && r < 35) {
			x = 'demon';
		} else if (r >= 35 && r < 50) {
			x = 'baby dragon';
		} else if (r >= 50 && r < 100) {
			x = 'goblin';
		} else if (r >= 100 && r < 150) {
			x = 'goblin';
		} else if (r >= 150 && r < 185) {
			x = 'bear';
		} else if (r >= 185 && r < 210) {
			x = 'ghoul';
		} else if (r >= 210 && r < 235) {
			x = 'zombie';
		} else if (r >= 235 && r < 260) {
			x = 'troll';
		} else if (r >= 260 && r < 285) {
			x = 'skeleton';
		} else if (r >= 260 && r < 300) {
			x = 'spider';
		}
		Game.player.name = x;
		return;
	},
	
	backleighCaveEnter: function() {
		Game.player.globalLocation = 4;
		var text = '';
		Game.cave();
		text += ('You have entered the cave.<br />');
		text += ('You see a ' + Game.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + Game.player.name + '.<br />');
		text += ('2) <b>Run</b> from the ' + Game.player.name + '.<br />');
		text += ('3) <b>Leave</b> the cave.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'AttackButton',
			text: _('Attack'),
			click: Combat.attack,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'RunButton',
			text: _('Run'),
			click: Game.runCave,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'LeaveButton',
			text: _('Leave'),
			click: Game.caveLeave,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	backleighCaveContinue: function() {
		Game.player.globalLocation = 4;
		var text = '';
		Game.cave();
		text += ('You continue down the cave.<br />');
		text += ('You see a ' + Game.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + Game.player.name + '.<br />');
		text += ('2) <b>Run</b> from the ' + Game.player.name + '.<br />');
		text += ('3) <b>Leave</b> the cave.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'AttackButton',
			text: _('Attack'),
			click: Combat.attack,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'RunButton',
			text: _('Run'),
			click: Game.runCave,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'LeaveButton',
			text: _('Leave'),
			click: Game.caveLeave,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	 runCave: function() {
		var text = '';
		text += ('You have escaped from the ' + Game.player.name + '.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.backleighCaveContinue();
		}, 3000);
	},
	
	caveReturn: function() {
		var text = '';
		text += ('Now that you have slain the ' + Game.player.name + '.<br />');
		text += ('You continue to explore the cave.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.backleighCaveContinue();
		}, 3000);
	},
		
	caveLeave: function() {
		var text = '';
		text += ('You leave the cave.<br />');
		text += ('You head back to Backleigh Castle.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.backleigh();
		}, 3000);
	},
		
	backleighLumber: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You are in the Backleigh Lumber yard.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Chop wood</b><br />');
		text += ('2) <b>Return</b> to Backleigh Castle.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'WoodButton',
			text: _('Chop wood'),
			click: Game.lumber,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.backleigh,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	backleighMine: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You are in the Backleigh Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron</b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Backleigh.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'IronButton',
			text: _('Mine Iron'),
			click: Game.iron,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CoalButton',
			text: _('Mine Coal'),
			click: Game.coal,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldButton',
			text: _('Mine Gold'),
			click: Game.gold,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.backleigh,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	draydon: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 2;
		var text = '';
		text += ('You arrive in Draydon Keep.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go East</b> to Backleigh Castle.<br />');
		text += ('2) <b>Enter the Draydon port</b>.<br />');
		text += ('3) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'EastButton',
			text: _('Go East'),
			click: Game.backleigh,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'DraydonPortButton',
			text: _('Enter the Draydon port'),
			click: Game.draydonPort,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	draydonPort: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You arrive at Draydon Port.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Buy</b> bait.<br />');
		text += ('2) <b>Fish</b><br />');
		text += ('3) <b>Return</b> to Draydon Keep.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'BaitButton',
			text: _('Buy bait'),
			click: Game.baitStore,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'FishButton',
			text: _('Fish'),
			click: Game.fish,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.draydon,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	baitStore: function() {
		Game.player.globalLocation = 3;
		var text = '';
		text += ('20 pieces of bait costs 50 silver.<br />');
		text += ('You have ' + Game.player.silver + ' silver.<br />');
		text += ('You have ' + Game.player.bait + ' piece(s) of bait.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Buy</b> 20 bait.<br />');
		text += ('2) <b>Return</b> to the rest of the Port.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'BaitButton',
			text: _('Buy 20 bait'),
			click: Game.baitBuy,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.draydonPort,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	baitBuy: function() {
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
		Engine.display(text);
		setTimeout(function () {
			Game.draydonPort();
		}, 3000);
	},
	
	elden: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 3;
		var text = '';
		text += ('You arrive in Elden Stronghold.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go East</b> to Kirkoswald Fortress.<br />');
		text += ('2) <b>Go South</b> to Backleigh Castle.<br />');
		text += ('3) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('4) <b>Enter the mine</b>.<br />');
		text += ('5) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'EastButton',
			text: _('Go East'),
			click: Game.kirkoswald,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'SouthButton',
			text: _('Go South'),
			click: Game.backleigh,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WoodButton',
			text: _('Chop wood'),
			click: Game.eldenLumber,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'MineButton',
			text: _('Enter the mine'),
			click: Game.eldenMine,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	eldenLumber: function() {
		Game.player.globalLocation = 1;
		var text = '';
		text += ('You are in the Elden Lumber yard.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Chop wood</b><br />');
		text += ('2) <b>Return</b> to Elden.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'WoodButton',
			text: _('Chop wood'),
			click: Game.lumber,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	eldenMine: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You are in the Elden Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron</b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Elden.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'IronButton',
			text: _('Mine Iron'),
			click: Game.iron,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CoalButton',
			text: _('Mine Coal'),
			click: Game.coal,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldButton',
			text: _('Mine Gold'),
			click: Game.gold,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	grimtol: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 5;
		var text = '';
		text += ('You arrive in the City of Grimtol.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go North</b> to Kirkoswald Fortress.<br />');
		text += ('2) <b>Go West</b> to Backleigh Castle.<br />');
		text += ('3) <b>Enter the mine</b>.<br />');
		text += ('4) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'NorthButton',
			text: _('Go North'),
			click: Game.kirkoswald,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WestButton',
			text: _('Go West'),
			click: Game.backleigh,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'MineButton',
			text: _('Enter the mine'),
			click: Game.grimtolMine,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	grimtolBridge: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You approach the bridge that links Backleigh and Grimtol.<br />');
		text += ('The bridge is armed with guards from Grimtol.<br /><br />');
		if (Game.player.location === 5) {
			text += ('The guards let you pass by for free.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.backleigh();
			}, 3000);
		} else if (Game.player.location === 1) {
			text += ('The guards will let you pass by for 50 silver.<br />');
			text += ('You have ' + Game.player.silver + ' Silver.<br /><br />');
			if (Game.player.silver >= 50) {
				Game.player.globalLocation = 2;
				text += ('What would you like to do?<br />');
				text += ('1) <b>Pay</b> the guards 50 silver and pass.<br />');
				text += ('2) <b>Return</b> to Backleigh Castle.<br />');
				Engine.display(text);
				new Button.Button({
					id: 'PayButton',
					text: _('Pay guards'),
					click: Game.grimtolBridgePay,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'ReturnButton',
					text: _('Return'),
					click: Game.backleigh,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You don\'t have enough Silver and head back to Backleigh Castle.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.backleigh();
				}, 3000);
			}
		}
	},
	grimtolBridgePay: function() {
		var text = '';
		text += ('You pay the guards 50 silver.<br />');
		text += ('They let you pass.<br />');
		Game.player.silver -= 50;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.grimtol();
		}, 3000);
	},

	grimtolMine: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You are in the Grimtol Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron</b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Grimtol.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'IronButton',
			text: _('Mine Iron'),
			click: Game.iron,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CoalButton',
			text: _('Mine Coal'),
			click: Game.coal,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldButton',
			text: _('Mine Gold'),
			click: Game.gold,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	kirkoswald: function() {
		Game.player.towerLocation = 0;
		Game.player.shopLocation = -1;
		Game.player.globalLocation = 0;
		Game.player.location = 4;
		var text = '';
		text += ('You arrive in Kirkoswald Fortress.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go West</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go South</b> to the deserts of Grimtol.<br />');
		text += ('3) <b>Explore</b> the Magical Forest.<br />');
		text += ('4) <b>Enter the Magician Tower</b>.<br />');
		text += ('5) <b>Enter the shop</b>.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'WestButton',
			text: _('Go West'),
			click: Game.elden,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'SouthButton',
			text: _('Go South'),
			click: Game.grimtol,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ExploreButton',
			text: _('Explore'),
			click: Game.magicalForestEntrance,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'EnterTowerButton',
			text: _('Enter the Magician Tower'),
			click: Game.magicianTowerEntrance,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ShopButton',
			text: _('Enter the shop'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	magicalForestEntrance: function() {
		Game.player.globalLocation = 2;
		var text = '';
		text += ('You are standing outside the Magical Forest.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <b><br />\'ONLY ENTER IF YOU DARE!\' <br />\'THE FOREST IS FILLED WITH MONSTERS!\'<br /></b>');
		text += ('The Magical Forest doesn\'t seem like a place you want to mess around in.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Explore</b> the Magical Forest.<br />');
		text += ('2) <b>Enter the Magician Tower</b>.<br />');
		text += ('3) <b>Return</b> to Kirkoswald Fortress.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'ExploreButton',
			text: _('Explore'),
			click: Game.magicalForest,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'EnterTowerButton',
			text: _('Enter the Magician Tower'),
			click: Game.magicianTowerEntrance,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.kirkoswald,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	magicalForest: function() {
		Game.player.globalLocation = 3;
		var text = '';
		text += ('You have been walking around the Magical Forest and seem to be lost.<br />');
		text += ('Everything in the Magical Forest looks the same.<br />');
		text += ('You hear sounds of monsters all over.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) Try to <b>find your way</b>.<br />');
		text += ('2) <b>Search</b> for these monsters you hear.<br />');
		text += ('3) <b>Attempt to leave</b> the forest.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'FindWayButton',
			text: _('Find your way'),
			click: Engine.findway,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'SearchButton',
			text: _('Search'),
			click: Engine.searchfor,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'AttemptLeaveButton',
			text: _('Attempt to leave'),
			click: Engine.attempttoleave,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	  
	findWayForest: function(a) {
		var b = -500;
		if (a === 0) {
			b = 400;
		} else if (a === 1) {
			b = 300;
		} else if (a === 2) {
			b = 600;
		}
		var r = Math.floor(Math.random() * (b-1 - 0));
		Game.player.name = '';
		if (r >= 0 && r < 20) {
			Game.player.name = 'soldier';
			Game.magicalForestFight();
		} else if (r >= 20 && r < 25) {
			Game.player.name = 'dragon';
			Game.magicalForestFight();
		} else if (r >= 25 && r < 35) {
			Game.player.name = 'demon';
			Game.magicalForestFight();
		} else if (r >= 35 && r < 50) {
			Game.player.name = 'baby dragon';
			Game.magicalForestFight();
		} else if (r >= 50 && r < 100) {
			Game.player.name = 'goblin';
			Game.magicalForestFight();
		} else if (r >= 100 && r < 150) {
			Game.player.name = 'goblin';
			Game.magicalForestFight();
		} else if (r >= 150 && r < 185) {
			Game.player.name = 'bear';
			Game.magicalForestFight();
		} else if (r >= 185 && r < 210) {
			Game.player.name = 'ghoul';
			Game.magicalForestFight();
		} else if (r >= 210 && r < 235) {
			Game.player.name = 'zombie';
			Game.magicalForestFight();
		} else if (r >= 235 && r < 260) {
			Game.player.name = 'troll';
			Game.magicalForestFight();
		} else if (r >= 260 && r < 285) {
			Game.player.name = 'skeleton';
			Game.magicalForestFight();
		} else if (r >= 260 && r < 300) {
			Game.player.name = 'spider';
			Game.magicalForestFight();
		} else if (r >= 300 && r < 400) {
			Game.magicalForest();
		} else if (r >= 400 && r < 600) {
			Game.magicalForestExit();
		}
	},
	  
	magicalForestExit: function() {
		var text = '';
		text += ('You have found your out of the Magical Forest.<br />');
		text += ('You decide to head back to Kirkoswald Fortress.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.kirkoswald();
		}, 3000);
	},

	magicalForestFight: function() {
		Game.player.globalLocation = 4;
		var text = '';
		text += ('You stumble upon a ' + Game.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + Game.player.name + '.<br />');
		text += ('2) <b>Run</b> from the ' + Game.player.name + '.<br />');
		text += ('3) <b>Attempt to leave</b> the forest.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'AttackButton',
			text: _('Attack'),
			click: Combat.attack,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'RunButton',
			text: _('Run'),
			click: Game.runForest,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'AttemptLeaveButton',
			text: _('Attempt to leave'),
			click: Engine.attempttoleave,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	  
	runForest: function() {
		var text = '';
		text += ('You have escaped from the ' + Game.player.name + '.<br />');
		text += ('You continue to walk around the Magical Forest.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.magicalForest();
		}, 3000);
	},
	  
	magicalForestReturn: function() {
		var text = '';
		text += ('Now that you have slain the ' + Game.player.name + '.<br />');
		text += ('You continue to walk around the Magical Forest.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.magicalForest();
		}, 3000);
	},

	magicianTowerEntrance: function() {
		if (Game.player.key > 0) {
			Game.magicianTower();
		} else {
			var text = '';
			text += ('The tower is locked.<br />');
			text += ('You need to find the key.<br />');
			text += ('You over hear one of the grounds keepers talking, <br />but it\'s hard to make out what he is saying.<br />');
			text += ('\'...The key.......Magical Forest.....Dragon....\'');
			text += ('but then he notices you are listening and walks way.<br />');
			text += ('You decide you head into the Magical Forest.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.magicalForestEntrance();
			}, 5000);
		}
	},

	magicianTower: function() {
		Game.player.towerLocation = 1;
		var text = '';
		text += ('The door unlocks with the key.<br />');
		Game.swordName();
		text += ('You walk in slowly with your ' + Game.player.swordname + ' in hand ready for anything.<br />');
		text += ('The door slams behind you, locking itself, <br />the noise made by the slam alerts the guard.<br />');
		text += ('The guard says \'How did you get the key to enter the tower?\'<br />');
		text += ('The tower seems to be filled with magical items.<br />');
		Engine.display(text);
		setTimeout(function () {
			Combat.guard();
		}, 5000);
	},
	
	end: function() {
		Game.player.towerLocation = 0;
		var text = '';
		text += ('<b>YOU WIN!</b><br />');
		text += ('For now....<br />');
		text += ('I will be adding more as I come up with more.<br />');
		text += ('The game will continue and now you may know that there is a cheat function.<br />');
		text += ('Cheats must be enabled for you to cheat.<br />');
		text += ('<b>Cheats</b>: Turns on/off cheats<br />');
		text += ('<b>God Sword</b>: Enables the God Sword<br />');
		text += ('<b>God Armour</b>: Enables the God Armour<br />');
		text += ('<b>God</b>: Enables the God Sword and God Armour<br />');
		text += ('<b>Give Fish</b>: Gives you 100,000 Fish<br />');
		text += ('<b>Give Silver</b>: Gives you 100,000 Silver<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.backleigh();
		}, 10000);
	},

	shop: function() {
		Game.player.shopLocation = 0;
		Game.armourName();
		Game.swordName();
		var text = '';
		text += ('You are in the general store.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Browse Swords</b><br />');
		text += ('2) <b>Browse Armour</b><br />');
		text += ('3) <b>Sell wood</b><br />');
		text += ('4) <b>Sell ores</b><br />');
		text += ('5) <b>Leave</b> the shop.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'SwordButton',
			text: _('Browse Swords'),
			click: Game.swordShop,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ArmourButton',
			text: _('Browse Armour'),
			click: Game.armourShop,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'WoodButton',
			text: _('Sell wood'),
			click: Game.sellwood,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'OreButton',
			text: _('Sell ores'),
			click: Game.sellore,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'LeaveButton',
			text: _('Leave'),
			click: Game.backToCity,
			width: Game.player.width,
		}).appendTo('span#output');
	},

	sellwood: function() {
		Game.player.shopLocation = 3;
		var b = 25;
		var r = Math.floor(Math.random() * (b-1 - 0));
		var pay = 3;
		if (r === 0) {
			pay = 4;
		}
		Game.player.woodIncome = pay*Game.player.wood;
		var text = '';
		text += ('You have ' + Game.player.wood + ' wood. The shop keeper will pay you ' + pay + ' silver per wood.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Sell</b> ' + Game.player.wood + ' <b>wood</b> for a total of ' + Game.player.woodIncome + ' silver.<br />');
		text += ('2) <b>Return</b> to the shop.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'WoodButton',
			text: _('Sell ' + Game.player.wood + ' wood'),
			click: Game.sellwoodcomplete,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	sellwoodcomplete: function() {
		var text = '';
		if (Game.player.wood === 0) {
			text += ('You do not have any wood to sell.<br />');
		} else {
			Game.player.silver += Game.player.woodIncome;
			text += ('You sold ' + Game.player.wood + ' wood for ' + Game.player.woodIncome + ' silver.<br />');
			text += ('You have ' + Game.player.silver + ' silver.<br />');
			Game.player.wood = 0;
		}
		Engine.display(text);
		setTimeout(function () {
			Game.shop();
		}, 3000);
	},
	  
	sellore: function() {
		Game.player.shopLocation = 4;
		var b = 25;
		var r = Math.floor(Math.random() * (b-1 - 0));
		var r2 = Math.floor(Math.random() * (b-1 - 0));
		var r3 = Math.floor(Math.random() * (b-1 - 0));
		var payiron = 10;
		var paygold = 30;
		var paycoal = 20;
		if (r === 0) {
			payiron = 15;
		}
		if (r2 === 0) {
			paygold = 45;
		}
		if (r3 === 0) {
			paycoal = 30;
		}
		Game.player.ironIncome = payiron*Game.player.iron;
		Game.player.goldIncome = paygold*Game.player.gold;
		Game.player.coalIncome = paycoal*Game.player.coal;
		var text = '';
		text += ('You have ' + Game.player.iron + ' iron. The shop keeper will pay you ' + payiron + ' silver per iron.<br />');
		text += ('You have ' + Game.player.gold + ' gold. The shop keeper will pay you ' + paygold + ' silver per gold.<br />');
		text += ('You have ' + Game.player.coal + ' coal. The shop keeper will pay you ' + paycoal + ' silver per coal.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Sell</b> ' + Game.player.iron + ' <b>iron</b> for a total of ' + Game.player.ironIncome + ' silver.<br />');
		text += ('2) <b>Sell</b> ' + Game.player.gold + ' <b>gold</b> for a total of ' + Game.player.goldIncome + ' silver.<br />');
		text += ('3) <b>Sell</b> ' + Game.player.coal + ' <b>coal</b> for a total of ' + Game.player.coalIncome + ' silver.<br />');
		text += ('4) <b>Return</b> to the shop.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'IronButton',
			text: _('Sell ' + Game.player.iron + ' iron'),
			click: Game.selliron,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldButton',
			text: _('Sell ' + Game.player.gold + ' gold'),
			click: Game.sellgold,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'CoalButton',
			text: _('Sell ' + Game.player.coal + ' coal'),
			click: Game.sellcoal,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	selliron: function() {
		var text = '';
		if (Game.player.iron === 0) {
			text += ('You do not have any iron to sell.<br />');
			Engine.display(text);
		} else {
			Game.player.silver += Game.player.ironIncome;
			text += ('You sold ' + Game.player.iron + ' iron for ' + Game.player.ironIncome + ' silver.<br />');
			text += ('You have ' + Game.player.silver + ' silver.<br />');
			Game.player.iron = 0;
			Engine.display(text);
		}
		setTimeout(function () {
			Game.shop();
		}, 3000);
	},
	
	sellgold: function() {
		var text = '';
		if (Game.player.gold === 0) {
			text += ('You do not have any gold to sell.<br />');
			Engine.display(text);
		} else {
			Game.player.silver += Game.player.goldIncome;
			text += ('You sold ' + Game.player.gold + ' gold for ' + Game.player.goldIncome + ' silver.<br />');
			text += ('You have ' + Game.player.silver + ' silver.<br />');
			Game.player.gold = 0;
			Engine.display(text);
		}
		setTimeout(function () {
			Game.shop();
		}, 3000);
	},
	
	sellcoal: function() {
		var text = '';
		if (Game.player.iron === 0) {
			text += ('You do not have any coal to sell.<br />');
			Engine.display(text);
		} else {
			Game.player.silver += Game.player.coalIncome;
			text += ('You sold ' + Game.player.coal + ' coal for ' + Game.player.coalIncome + ' silver.<br />');
			text += ('You have ' + Game.player.silver + ' silver.<br />');
			Game.player.coal = 0;
			Engine.display(text);
		}
		setTimeout(function () {
			Game.shop();
		}, 3000);
	},
	  
	swordShop: function() {
		Game.player.shopLocation = 1;
		var text = '';
		text += ('The shop keeper shows you to the sword area.<br />');
		text += ('What would you like to buy?<br />');
		text += ('1) <b>Bronze Sword</b>: 500 silver<br />');
		text += ('2) <b>Gold Sword</b>: 2,000 silver<br />');
		text += ('3) <b>Iron Sword</b>: 8,000 silver<br />');
		text += ('4) <b>Steel Sword</b>: 25,000 silver<br />');
		text += ('5) <b>Titanium Sword</b>: 50,000 silver<br />');
		text += ('6) <b>Tungsten Sword</b>: 100,000 silver<br />');
		text += ('7) <b>Return</b> to the main area of the shop.<br />');
		Engine.display(text);
		Game.swordName();
		new Button.Button({
			id: 'BronzeSwordButton',
			text: _('Bronze Sword'),
			click: Game.bronzeSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldSwordButton',
			text: _('Gold Sword'),
			click: Game.goldSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'IronSwordButton',
			text: _('Iron Sword'),
			click: Game.ironSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'SteelSwordButton',
			text: _('Steel Sword'),
			click: Game.steelSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'TitaniumSwordButton',
			text: _('Titanium Sword'),
			click: Game.titaniumSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'TungstenSwordButton',
			text: _('Tungsten Sword'),
			click: Game.tungstenSword,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	bronzeSword: function() {
		Game.player.globalLocation = 1;
		var text = '';
		if (Game.player.sword > 1) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a(n) ' + Game.player.swordname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 1) {
			text += ('You already have a Bronze Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 500 && Game.player.attack >= 1) {
				text += ('The Bronze Sword costs 500 silver and requires attack level 1.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Bronze Sword.<br />');
				text += ('2) <b>Browse Swords</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Bronze Sword'),
					click: Game.bronzeSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Bronze Sword costs 500 silver and requires attack level 1.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.swordShop();
				}, 3000);
			}
		}
	},
	
	bronzeSwordBuy: function() {
		var text = '';
		Game.player.silver -= 500;
		text += ('You purchased a Bronze Sword.<br />');
		Game.player.sword = 1;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	goldSword: function() {
		Game.player.globalLocation = 2;
		var text = '';
		if (Game.player.sword > 2) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a(n) ' + Game.player.swordname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 2) {
			text += ('You already have a Gold Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 2000 && Game.player.attack >= 5) {
				text += ('The Gold Sword costs 2,000 silver and requires attack level 5.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Gold Sword.<br />');
				text += ('2) <b>Browse Swords</b>');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Gold Sword'),
					click: Game.goldSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Gold Sword costs 2,000 silver and requires attack level 5.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.swordShop();
				}, 3000);
			}
		}
	},
	
	goldSwordBuy: function() {
		var text = '';
		Game.player.silver -= 2000;
		text += ('You purchased a Gold Sword.<br />');
		Game.player.sword = 2;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	ironSword: function() {
		Game.player.globalLocation = 3;
		var text = '';
		if (Game.player.sword > 3) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + Game.player.swordname + '.<br />');
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 3) {
			text += ('You already have an Iron Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 8000 && Game.player.attack >= 10) {
				text += ('The Iron Sword costs 8,000 silver and requires attack level 10.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Iron Sword.<br />');
				text += ('2) <b>Browse Swords</b>');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Iron Sword'),
					click: Game.ironSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Iron Sword costs 8,000 silver and requires attack level 10.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.swordShop();
				}, 3000);
			}
		}
	},
	
	ironSwordBuy: function() {
		var text = '';
		Game.player.silver -= 8000;
		text += ('You purchased an Iron Sword.<br />');
		Game.player.sword = 3;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	steelSword: function() {
		Game.player.globalLocation = 4;
		var text = '';
		if (Game.player.sword > 4) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + Game.player.swordname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 4) {
			text += ('You already have a Steel Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 25000 && Game.player.attack >= 20) {
				text += ('The Steel Sword costs 25,000 silver and requires attack level 20.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Steel Sword.<br />');
				text += ('2) <b>Browse Swords</b>');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Steel Sword'),
					click: Game.steelSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Steel Sword costs 25,000 silver and requires attack level 20.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Game.swordShop();
			}
		}
	},
	
	steelSwordBuy: function() {
		var text = '';
		Game.player.silver -= 25000;
		text += ('You purchased a Steel Sword.<br />');
		Game.player.sword = 4;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	titaniumSword: function() {
		Game.player.globalLocation = 5;
		var text = '';
		if (Game.player.sword > 5) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + Game.player.swordname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 5) {
			text += ('You already have a Titanium Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 50000 && Game.player.attack >= 30) {
				text += ('The Titanium Sword costs 50,000 silver and requires attack level 30.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Titanium Sword.<br />');
				text += ('2) <b>Browse Swords</b>');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Titanium Sword'),
					click: Game.titaniumSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Titanium Sword costs 50,000 silver and requires attack level 30.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.swordShop();
				}, 3000);
			}
		}
	},
	
	titaniumSwordBuy: function() {
		var text = '';
		Game.player.silver -= 50000;
		text += ('You purchased a Titanium Sword.<br />');
		Game.player.sword = 5;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	tungstenSword: function() {
		Game.player.globalLocation = 6;
		var text = '';
		if (Game.player.sword > 6) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + Game.player.swordname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else if (Game.player.sword === 6) {
			text += ('You already have a Tungsten Sword.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.swordShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 100000 && Game.player.attack >= 40) {
				text += ('The Tungsten Sword costs 100,000 silver and requires attack level 40.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Tungsten Sword.<br />');
				text += ('2) <b>Browse Swords</b>');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Tungsten Sword'),
					click: Game.tungstenSwordBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Swords'),
					click: Game.swordShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Tungsten Sword costs 100,000 silver and requires attack level 40.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your attack level is ' + Game.player.attack + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.swordShop();
				}, 3000);
			}
		}
	},
	
	tungstenSwordBuy: function() {
		var text = '';
		Game.player.silver -= 100000;
		text += ('You purchased a Tungsten Sword.<br />');
		Game.player.sword = 6;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.swordShop();
		}, 3000);
	},
	
	swordName: function() {
		if (Game.player.sword === 0) {
			Game.player.swordname = 'Fists';
		} else if (Game.player.sword === 1) {
			Game.player.swordname = 'Bronze Sword';
		} else if (Game.player.sword === 2) {
			Game.player.swordname = 'Gold Sword';
		} else if (Game.player.sword === 3) {
			Game.player.swordname = 'Iron Sword';
		} else if (Game.player.sword === 4) {
			Game.player.swordname = 'Steel Sword';
		} else if (Game.player.sword === 5) {
			Game.player.swordname = 'Titanium Sword';
		} else if (Game.player.sword === 6) {
			Game.player.swordname = 'Tungsten Sword';
		} else if (Game.player.sword === 100) {
			Game.player.swordname = 'God Sword';
		}
	},
	
	armourShop: function() {
		Game.player.shopLocation = 2;
		var text = '';
		text += ('The shop keeper shows you to the armour area.<br />');
		text += ('What would you like to buy?<br />');
		text += ('1) <b>Bronze Armour</b>: 500 silver<br />');
		text += ('2) <b>Gold Armour</b>: 2,000 silver<br />');
		text += ('3) <b>Iron Armour</b>: 8,000 silver<br />');
		text += ('4) <b>Steel Armour</b>: 25,000 silver<br />');
		text += ('5) <b>Titanium Armour</b>: 50,000 silver<br />');
		text += ('6) <b>Tungsten Armour</b>: 100,000 silver<br />');
		text += ('7) <b>Return</b> to the main area of the shop.<br />');
		Engine.display(text);
		new Button.Button({
			id: 'BronzeArmourButton',
			text: _('Bronze Armour'),
			click: Game.bronzeArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'GoldArmourButton',
			text: _('Gold Armour'),
			click: Game.goldArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'IronArmourButton',
			text: _('Iron Armour'),
			click: Game.ironArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'SteelArmourButton',
			text: _('Steel Armour'),
			click: Game.steelArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'TitaniumArmourButton',
			text: _('Titanium Armour'),
			click: Game.titaniumArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'TungstenArmourButton',
			text: _('Tungsten Armour'),
			click: Game.tungstenArmour,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'ReturnButton',
			text: _('Return'),
			click: Game.shop,
			width: Game.player.width,
		}).appendTo('span#output');
	},
	
	bronzeArmour: function() {
		Game.player.globalLocation = 1;
		var text = '';
		if (Game.player.armour > 1) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else if (Game.player.armour === 1) {
			text += ('You already have Bronze Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 500 && Game.player.defense >= 1) {
				text += ('The Bronze Armour costs 500 silver and requires defense level 1.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Bronze Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Bronze Armour'),
					click: Game.bronzeArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Bronze Armour costs 500 silver and requires defense level 1.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},
	
	bronzeArmourBuy: function() {
		var text = '';
		Game.player.silver -= 500;
		text += ('You purchased Bronze Armour.<br />');
		Game.player.armour = 1;
		Game.player.health = 20;
		Game.player.healthstatic = 20;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	goldArmour: function() {
		Game.player.globalLocation = 2;
		var text = '';
		if (Game.player.armour > 2) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else if (Game.player.armour === 2) {
			text += ('You already have Gold Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 2000 && Game.player.defense >= 5) {
				text += ('The Gold Armour costs 2,000 silver and requires defense level 5.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Gold Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Gold Armour'),
					click: Game.goldArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Gold Armour costs 2,000 silver and requires defense level 5.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},
	
	goldArmourBuy: function() {
		var text = '';
		Game.player.silver -= 2000;
		text += ('You purchased Gold Armour.<br />');
		Game.player.armour = 2;
		Game.player.health = 30;
		Game.player.healthstatic = 30;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	ironArmour: function() {
		Game.player.globalLocation = 3;
		var text = '';
		if (Game.player.armour > 3) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else if (Game.player.armour === 3) {
			text += ('You already have Iron Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 8000 && Game.player.defense >= 10) {
				text += ('The Iron Armour costs 8,000 silver and requires defense level 10.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Iron Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Iron Armour'),
					click: Game.ironArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Iron Armour costs 8,000 silver and requires defense level 10.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},
	
	ironArmourBuy: function() {
		var text = '';
		Game.player.silver -= 8000;
		text += ('You purchased Iron Armour.<br />');
		Game.player.armour = 3;
		Game.player.health = 40;
		Game.player.healthstatic = 40;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	steelArmour: function() {
		Game.player.globalLocation = 4;
		var text = '';
		if (Game.player.armour > 4) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else if (Game.player.armour === 4) {
			text += ('You already have Steel Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 25000 && Game.player.defense >= 20) {
				text += ('The Steel Armour costs 25,000 silver and requires defense level 20.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Steel Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Steel Armour'),
					click: Game.steelArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Steel Armour costs 25,000 silver and requires defense level 20.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},
	
	steelArmourBuy: function() {
		var text = '';
		Game.player.silver -= 25000;
		text += ('You purchased Steel Armour.<br />');
		Game.player.armour = 4;
		Game.player.health = 50;
		Game.player.healthstatic = 50;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	titaniumArmour: function() {
		Game.player.globalLocation = 5;
		var text = '';
		if (Game.player.armour > 5) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);					
		} else if (Game.player.armour === 5) {
			text += ('You already have Titanium Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 50000 && Game.player.defense >= 30) {
				text += ('The Titanium Armour costs 50,000 silver and requires defense level 30.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Titanium Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Titanium Armour'),
					click: Game.titaniumArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Titanium Armour costs 50,000 silver and requires defense level 30.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},
	
	titaniumArmourBuy: function() {
		var text = '';
		Game.player.silver -= 50000;
		text += ('You purchased Titanium Armour.<br />');
		Game.player.armour = 5;
		Game.player.health = 60;
		Game.player.healthstatic = 60;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	tungstenArmour: function() {
		Game.player.globalLocation = 6;
		var text = '';
			if (Game.player.armour > 6) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + Game.player.armourname + '.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else if (Game.player.armour === 6){
			text += ('You already have Tungsten Armour.<br />');
			Engine.display(text);
			setTimeout(function () {
				Game.armourShop();
			}, 3000);
		} else {
			if (Game.player.silver >= 100000 && Game.player.defense >= 40) {
				text += ('The Tungsten Armour costs 100,000 silver and requires defense level 40.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Tungsten Armour.<br />');
				text += ('2) <b>Browse Armour</b><br />');
				Engine.display(text);
				new Button.Button({
					id: 'BuyButton',
					text: _('Buy the Tungsten Armour'),
					click: Game.tungstenArmourBuy,
					width: Game.player.width,
				}).appendTo('span#output');
				new Button.Button({
					id: 'BrowseButton',
					text: _('Browse Armour'),
					click: Game.armourShop,
					width: Game.player.width,
				}).appendTo('span#output');
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Tungsten Armour costs 100,000 silver and requires defense level 40.<br />');
				text += ('You have ' + Game.player.silver + ' silver and your defense level is ' + Game.player.defense + '.<br />');
				Engine.display(text);
				setTimeout(function () {
					Game.armourShop();
				}, 3000);
			}
		}
	},

	tungstenArmourBuy: function() {
		var text = '';
		Game.player.silver -= 100000;
		text += ('You purchased Tungsten Armour.<br />');
		Game.player.armour = 6;
		Game.player.health = 70;
		Game.player.healthstatic = 70;
		text += ('You now have ' + Game.player.silver + ' Silver.<br />');
		Engine.display(text);
		setTimeout(function () {
			Game.armourShop();
		}, 3000);
	},
	
	armourName: function() {
		if (Game.player.armour === 0) {
			Game.player.armourname = 'none';
		} else if (Game.player.armour === 1) {
			Game.player.armourname = 'Bronze Armour';
		} else if (Game.player.armour === 2) {
			Game.player.armourname = 'Gold Armour';
		} else if (Game.player.armour === 3) {
			Game.player.armourname = 'Iron Armour';
		} else if (Game.player.armour === 4) {
			Game.player.armourname = 'Steel Armour';
		} else if (Game.player.armour === 5) {
			Game.player.armourname = 'Titanium Armour';
		} else if (Game.player.armour === 6) {
			Game.player.armourname = 'Tungsten Armour';
		} else if (Game.player.armour === 100) {
			Game.player.armourname = 'God Armour';
		} 
	},
  
	backToCity: function() {
		var text = '';
		text += ('You leave the shop.<br />');
		Engine.display(text);
		setTimeout(function () {
			if (Game.player.location === 1) {
				Game.backleigh();
			} else if (Game.player.location === 2) {
				Game.draydon();
			} else if (Game.player.location === 3) {
				Game.elden();
			} else if (Game.player.location === 4) {
				Game.kirkoswald();
			} else if (Game.player.location === 5) {
				Game.grimtol();
			}
		}, 3000);
	},
	
	iron: function() {
		var text = '';
		Engine.display('Mining.');
		setTimeout(function () {
			Engine.display('Mining..');
		}, 1000);
		setTimeout(function () {
			Engine.display('Mining...');
		}, 2000);
		setTimeout(function () {
			var r = 1;
			if (Game.player.mining >= 25) {
				r = 2;
			}
			Game.player.iron += r;
			Game.player.miningxp += 3;
			text += ('You have received ' + r + ' iron.<br />');
			text += ('You have ' + Game.player.iron + ' iron.<br />');
			if (Game.player.miningxp >= Game.player.mining*21) {
				text += ('<br /><b>Congratulations, you have advanced a Mining level!</b><br />');
				Game.player.mining++;
				text += ('<b>Mining level:</b> ' + Game.player.mining + '<br />');
				Game.player.miningxp -= Game.player.mining*21;
				if (Game.player.miningxp < 0) {
					Game.player.miningxp = 0;
				}
			}
			Engine.display(text);
			setTimeout(function () {
				if (Game.player.location === 5) {
					Game.grimtolMine();
				} else if (Game.player.location === 1) {
					Game.backleighMine();
				} else if (Game.player.location === 3) {
					Game.eldenMine();
				}
			}, 3000);
		}, 3000);
	},
	
	coal: function() {
		var text = '';
		var x = 3000;
		if (Game.player.mining >= 25) {
			x = 6000;
			Engine.display('Mining.');
			setTimeout(function () {
				Engine.display('Mining..');
			}, 1000);
			setTimeout(function () {
				Engine.display('Mining...');
			}, 2000);
			setTimeout(function () {
				r = 1;
				if (Game.player.mining >= 50) {
					r = 2;
				}
				Game.player.coal += r;
				Game.player.miningxp += 5;
				text += ('You have received ' + r + ' Coal.<br />');
				text += ('You have ' + Game.player.coal + ' Coal.<br />');
				if (Game.player.miningxp >= Game.player.mining*21) {
					text += ('<br /><b>Congratulations, you have advanced a Mining level!</b><br />');
					Game.player.mining++;
					text += ('<b>Mining level:</b> ' + Game.player.mining + '<br />');
					Game.player.miningxp -= Game.player.mining*21;
					if (Game.player.miningxp < 0) {
						Game.player.miningxp = 0;
					}
				}
				Engine.display(text);
			}, 3000);
		} else {
			text += ('To mine coal you need a mining level of 25.<br />');
			text += ('Your mining level is ' + Game.player.mining + '.<br />');
			Engine.display(text);
		}
		setTimeout(function () {
			if (Game.player.location === 5) {
				Game.grimtolMine();
			} else if (Game.player.location === 1) {
				Game.backleighMine();
			} else if (Game.player.location === 3) {
				Game.eldenMine();
			}
		}, x);
	},
  
	gold: function() {
		var text = '';
		var x = 3000;
		if (Game.player.mining >= 50) {
			x = 6000;
			Engine.display('Mining.');
			setTimeout(function () {
				Engine.display('Mining..');
			}, 1000);
			setTimeout(function () {
				Engine.display('Mining...');
			}, 2000);
			setTimeout(function () {
				r = 1;
				if (Game.player.mining >= 75) {
					r = 2;
				}
				Game.player.gold += r;
				Game.player.miningxp += 10;
				text += ('You have received ' + r + ' gold.<br />');
				text += ('You have ' + Game.player.gold + ' gold.<br />');
				if (Game.player.miningxp >= Game.player.mining*21) {
					text += ('<br /><b>Congratulations, you have advanced a Mining level!</b><br />');
					Game.player.mining++;
					text += ('<b>Mining level:</b> ' + Game.player.mining) + '<br />';
					Game.player.miningxp -= Game.player.mining*21;
					if (Game.player.miningxp < 0) {
						Game.player.miningxp = 0;
					}
				}
				Engine.display(text);
			}, 3000);
		} else {
			text += ('To mine gold you need a mining level of 50.<br />');
			text += ('Your mining level is ' + Game.player.mining + '.<br />');	
			Engine.display(text);
		}
		setTimeout(function () {
			if (Game.player.location === 5) {
				Game.grimtolMine();
			} else if (Game.player.location === 1) {
				Game.backleighMine();
			} else if (Game.player.location === 3) {
				Game.eldenMine();
			}
		}, x);
	},
  
	lumber: function() {
		var text = '';
		Engine.display('Chopping.');
		setTimeout(function () {
			Engine.display('Chopping..');
		}, 1000);
		setTimeout(function () {
			Engine.display('Chopping...');
		}, 2000);
		setTimeout(function () {
			var b = 6;
			var r = Math.floor(Math.random() * (b-1 - 0));
			if (Game.player.woodcutting < 25) {
				if (r >= 2) {
					Game.player.wood += 2;
					r = 2;
				} else {
					Game.player.wood += r;
				}
			} else {
				Game.player.wood += r;
			}
			if (r > 0) {
				if (Game.player.woodcutting < 25) {
					Game.player.woodcuttingxp += 5;
				} else if (Game.player.woodcutting < 50) {
					Game.player.woodcuttingxp += 10;
				} else {
					Game.player.woodcuttingxp += 3;
				}
			}
			text += ('You have received ' + r + ' wood.<br />');
			text += ('You have ' + Game.player.wood + ' wood.<br />');
			if (Game.player.woodcuttingxp >= Game.player.woodcutting*21) {
				text += ('<br /><b>Congratulations, you have advanced a Woodcutting level!</b><br />');
				Game.player.woodcutting++;
				text += ('<b>Woodcutting level:</b> ' + Game.player.woodcutting + '<br />');
				Game.player.woodcuttingxp -= Game.player.woodcutting*21;
				if (Game.player.woodcuttingxp < 0) {
					Game.player.woodcuttingxp = 0;
				}
			}
			Engine.display(text);
			setTimeout(function () {
				if (Game.player.location === 1 && Game.player.globalLocation === 2) {
					Game.backleighLumber();
				} else if (Game.player.location === 3 && Game.player.globalLocation === 1) {
					Game.eldenLumber();
				}
			}, 3000);
		}, 3000);
	},
	
	fish: function() {
		var text = '';
		if (Game.player.bait > 0) {
			Engine.display('Fishing.');
			setTimeout(function () {
				Engine.display('Fishing..');
			}, 1000);
			setTimeout(function () {
				Engine.display('Fishing...');
			}, 2000);
			setTimeout(function () {
				var b = 3;
				var r = Math.floor(Math.random() * (b-1 - 0));
				if (Game.player.fishing >= 25) {
					r = Math.floor(Math.random() * (Game.player.fishing - 0));
				} else if (Game.player.fishing >= 20) {
					r = Math.floor(Math.random() * (11-1 - 0));
				} else if (Game.player.fishing >= 15) {
					r = Math.floor(Math.random() * (9-1 - 0));
				} else if (Game.player.fishing >= 10) {
					r = Math.floor(Math.random() * (7-1 - 0));
				} else if (Game.player.fishing >= 5) {
					r = Math.floor(Math.random() * (5-1 - 0));
				}
				if (r > 0) {
					Game.player.fish++;
					if (Game.player.fishing < 25) {
						Game.player.fishingxp += 5;
					} else if (Game.player.fishing < 50) {
						Game.player.fishingxp += 10;
					} else {
						Game.player.fishingxp += 3;
					}
				}
				Game.player.bait--;
				text += ('You have received ' + r + ' fish.<br />');
				text += ('You have ' + Game.player.fish + ' fish.<br />');
				text += ('You have ' + Game.player.bait + ' piece(s) of bait.<br />');
				if (Game.player.fishingxp >= Game.player.fishing*21) {
					text += ('<br /><b>Congratulations, you have advanced a Fishing level!</b><br />');
					Game.player.fishing++;
					text += ('<b>Fishing level:</b> ' + Game.player.fishing + '<br />');
					Game.player.fishingxp -= Game.player.fishing*21;
					if (Game.player.fishingxp < 0) {
						Game.player.fishingxp = 0;
					}
				}
				Engine.display(text);
				setTimeout(function () {
					if (Game.player.location === 2 && Game.player.globalLocation === 2) {
						Game.draydonPort();
					}
				}, 3000);
			}, 3000);
		} else {
			text += ('You have 0 pieces of bait.<br />');
			text += ('You need at least 1 piece of bait to fish.<br />');
			text += ('You buy bait at the Draydon Port.<br />');
			Engine.display(text);
			setTimeout(function () {
				if (Game.player.location === 2 && Game.player.globalLocation === 2) {
					Game.draydonPort();
				}
			}, 3000);
		}
	},
	
	swing: function() {
		var b = Game.player.sword + 2;
		var r = Math.floor(Math.random() * (b - 0));
		var damage = 0;
		if (r > 0) {
			damage = Game.player.sword + 1;
		}
		if (Game.player.sword === 100) {
			damage = 100000;
		}
		return damage;
	},
	
	eat: function() {
		var text = '';
		if (Game.player.fish > 0) {
			text += ('You eat a fish.<br />');
			text += ('You gain 10 health.<br />');
			Game.player.health += 10;
			Game.player.fish -= 1;
			if (Game.player.health > Game.player.healthstatic) {
				Game.player.health = Game.player.healthstatic;
			}
			text += ('You now have ' + Game.player.health + ' health.<br />');
			text += ('You have ' + Game.player.fish + ' fish.<br />');
			Engine.display(text);
		} else {
			text += ('You don\'t have any fish.<br />');
			text += ('You have ' + Game.player.health + ' health.<br />');
			Engine.display(text);
		}
		setTimeout(function () {
			Combat.monsterSwing();
		}, 3000);
	},
	
	dead: function() {
		Combat.enemy.fighting = false;
		var text = '';
		Game.player.deaths += 1;
		text += ('Oh dear! You seemed to have died!<br />');
		text += ('Luckily the Gods brought you back to life.<br />');
		text += ('It seems they have retrieved all our goods, except you have lost some silver!<br />');
		Game.player.silver -= Game.player.silver*.2;
		text += ('You have ' + Game.player.silver + ' silver.<br />');
		text += ('At least you\'re alive.<br />');
		Engine.display(text);
		Game.player.health = Game.player.healthstatic;
		setTimeout(function () {
			Game.start();
		}, 5000);
	},
  
	heal: function() {
		Game.player.health = Game.player.healthstatic;
	},
	
	help: function() {
		var text = '';
		text += ('To play type the <b>Bold text</b> into the text box.<br />');
		text += ('EX: <em>1) <b>Swing</b> your Iron Sword.</em><br />');
		text += ('Or you can now click most commands!<br />');
		text += ('All command words have a space inbetween them.<br />');
		text += ('The game pauses at times for you to read the screen if there is no commands to enter.<br />');
		text += ('To see your player stats at any time type <b>stats</b><br />');
		text += ('Or click the button on the right!<br />');
		text += ('The game will begin shortly!<br />');
		text += ('Type <b>start</b> to begin playing the game or <b>click below</b>!<br />');
		Engine.display(text);
		new Button.Button({
			id: 'StartButton',
			text: _('Start!'),
			click: Game.start,
			width: Game.player.width,
		}).appendTo('span#output');
		new Button.Button({
			id: 'StatsButton',
			text: _('Your Stats'),
			click: Engine.stats,
			width: Game.player.width,
		}).appendTo('span#rightColButton');
	},

};
