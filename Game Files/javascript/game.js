var Game = {
	player: {
		attack: 1,
		attackxp: 0,
		defence: 1,
		defencexp: 0,
		health: 10,
		healthstatic: 10,
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
		silver: 200,
		key: 0,
		woodIncome: 0,
		ironIncome: 0,
		goldIncome: 0,
		coalIncome: 0,
		swordname: '',
	 	armourname: '',
		name: '',
	},
	
	start: function() {
		this.player.location = 1;
		this.armourName();
		this.swordName();
		var text = '';
		text += ('You find yourself in the Castle of Backleigh.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go north</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go west</b> to Draydon Keep.<br />');
		text += ('3) <b>Go East</b> to the Deserts of Grimtol.<br />');
		text += ('4) <b>Enter the cave</b> under Backleigh Castle.<br />');
		text += ('5) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('6) <b>Enter the mine</b>.<br />');
		text += ('7) <b>Enter the shop</b>.<br />');
		display(text);
	},
	
	backleigh: function() {
		this.player.location = 1;
		var text = '';
		text += ('You arrive in Backleigh Castle.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go north</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go west</b> to Draydon Keep.<br />');
		text += ('3) <b>Go East</b> to the Deserts of Grimtol.<br />');
		text += ('4) <b>Enter the cave</b> under Backleigh Castle.<br />');
		text += ('5) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('6) <b>Go to the mine</b>.<br />');
		text += ('7) <b>Go to the shop</b>.<br />');
		display(text);
	},
	
	backleighCaveEntrance: function() {
		var text = '';
		text += ('You are standing outside the cave in Backleigh.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <br /><b>\"ONLY ENTER IF YOU DARE!\" <br />\"THE CAVE IS FILLED WITH MONSTERS!\"</b><br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Enter the cave</b>.<br />');
		text += ('3) <b>Head back</b> to Backleigh Castle.<br />');
		display(text);
	},
	  
	cave: function() {
		b = 300;
		r = random(0, b-1);
		x = '';
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
			x = 'goblin suprise';
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
		this.player.name = x;
		return;
	},
	
	backleighCaveEnter: function() {
		var text = '';
		cave();
		text += ('You have entered the cave.<br />');
		text += ('You see a ' + this.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + this.player.name + '.<br />');
		text += ('2) <b>Run</b> from the ' + this.player.name + '.<br />');
		text += ('3) <b>Leave</b> the cave.<br />');
		display(text);
	},
	
	backleighCaveContinue: function() {
		var text = '';
		cave();
		text += ('You continue down the cave.<br />');
		text += ('You see a ' + this.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + this.player.name + '.<br />');
		text += ('2) <b>Run</b> from the ' + this.player.name + '.<br />');
		text += ('3) <b>Leave</b> the cave.<br />');
		display(text);
	},
	
	 runCave: function() {
		var text = '';
		text += ('You have escaped from the ' + this.player.name + '.<br />');
		display(text);
	},
	
	caveReturn: function() {
		var text = '';
		text += ('Now that you have slain the ' + this.player.name + '.<br />');
		text += ('You continue to explore the cave.<br />');
		display(text);
	},
		
	caveLeave: function() {
		var text = '';
		text += ('You leave the cave.<br />');
		text += ('You head back to Backleigh Castle.<br />');
		display(text);
	},
		
	backleighLumber: function() {
		var text = '';
		text += ('You are in the Backleigh Lumber yard.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Chop wood</b><br />');
		text += ('2) <b>Return</b> to Backleigh Castle.<br />');
		display(text);
	},
	
	backleighMine: function() {
		var text = '';
		text += ('You are in the Backleigh Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron<b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Backleigh.<br />');
		display(text);
	},
	
	draydon: function() {
		this.player.location = 2;
		var text = '';
		text += ('You arrive in Draydon Keep.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go East</b> to Backleigh Castle.<br />');
		text += ('2) <b>Enter the Draydon port</b>.<br />');
		text += ('3) <b>Go to the shop</b>.<br />');
		display(text);
	},
	
	draydonPort: function() {
		var text = '';
		text += ('You arrive at Draydon Port.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Buy bait</b>.<br />');
		text += ('2) <b>Fish</b><br />');
		text += ('3) <b>Return</b> to Draydon Keep.<br />');
		display(text);
	},
	
	baitStore: function() {
		var text = '';
		text += ('20 pieces of bait costs 50 silver.<br />');
		text += ('You have ' + silver + ' silver.<br />');
		text += ('You have ' + bait + ' piece(s) of bait.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Buy 20 bait</b>.<br />');
		text += ('2) <b>Return</b> to the rest of the Port.<br />');
		display(text);
	},
	
	elden: function() {
		this.player.location = 3;
		var text = '';
		text += ('You arrive in Elden Stronghold.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go East</b> to Kirkoswald Fortress.<br />');
		text += ('2) <b>Go south</b> to Backleigh Castle.<br />');
		text += ('3) <b>Chop wood</b> in the lumber yard.<br />');
		text += ('4) <b>Go to the mine</b>.<br />');
		text += ('5) <b>Go to the shop</b>.<br />');
		display(text);
	},
	
	eldenLumber: function() {
		var text = '';
		text += ('You are in the Elden Lumber yard.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Chop wood</b><br />');
		text += ('2) <b>Return</b> to Elden.<br />');
		display(text);
	},

	eldenMine: function() {
		var text = '';
		text += ('You are in the Elden Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron</b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Elden.<br />');
		display(text);
	},

	grimtol: function() {
		this.player.location = 5;
		var text = '';
		text += ('You arrive in the City of Grimtol.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go North</b> to Kirkoswald Fortress.<br />');
		text += ('2) <b>Go West</b> to Backleigh Castle.<br />');
		text += ('3) <b>Go to the mine</b>.<br />');
		text += ('4) <b>Go to the shop</b>.<br />');
		display(text);
	},

	grimtolBridge: function() {
		var text = '';
		text += ('You aproach the bridge that links Backleigh and Grimtol.<br />');
		text += ('The bridge is armed with gaurds from Grimtol.<br /><br />');
		if (this.player.location === 5) {
			text += ('The gaurds let you pass by for free.<br />');
			display(text);
			setTimeout(function () {
				this.backleigh();
			}, 6000);
		} else if (this.player.location === 1) {
			text += ('The gaurds will let you pass by for 50 silver.<br />');
			text += ('You have ' + this.player.silver + ' Silver.<br /><br />');
			if (this.player.silver >= 50) {
				text += ('What would you like to do?<br />');
				text += ('1) <b>Pay</b> the gaurds 50 silver and pass.<br />');
				text += ('2) <b>Return</b> to Backleigh Castle.<br />');
				display(text);
			} else {
				text += ('You don\'t have enough Silver and head back to Backleigh Castle.<br />');
				display(text);
				setTimeout(function () {
					this.backleigh();
				}, 6000);
			}
		}
	},

	grimtolMine: function() {
		var text = '';
		text += ('You are in the Grimtol Mine.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Mine Iron</b><br />');
		text += ('2) <b>Mine Coal</b><br />');
		text += ('3) <b>Mine Gold</b><br />');
		text += ('4) <b>Return</b> to Grimtol.<br />');
		display(text);
	},
	
	kirkoswald: function() {
		this.player.location = 4;
		var text = '';
		text += ('You arrive in Kirkoswald Fortress.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Go west</b> to Elden Stronghold.<br />');
		text += ('2) <b>Go south</b> to the deserts of Grimtol.<br />');
		text += ('3) <b>Explore</b> the Magical Forest.<br />');
		text += ('4) <b>Go to the Magician Tower</b>.<br />');
		text += ('5) <b>Go to the shop</b>.<br />');
		display(text);
	},

	magicalForestEntrance: function() {
		var text = '';
		text += ('You are standing outside the Magical Forest.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <b><br />\'ONLY ENTER IF YOU DARE!\' <br />\'THE FOREST IS FILLED WITH MONSTERS!\'<br /></b>');
		text += ('The Magical Forest doesn\'t seem like a place you want to mess around in.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Enter</b> the Magical Forest.<br />');
		text += ('2) <b>Go to the Magician Tower</b>.<br />');
		text += ('3) <b>Turn back</b> to Kirkoswald Fortress.<br />');
		display(text);
	},

	magicalForest: function() {
		var text = '';
		text += ('You have been walking around the Magical Forest and seem to be lost.<br />');
		text += ('Everything in the Magical Forest looks the same.<br />');
		text += ('You hear sounds of monsters all over.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) Try to <b>find your way</b>.<br />');
		text += ('2) <b>Search</b> for these monsters you hear.<br />');
		text += ('3) <b>Attempt to leave</b> the forest.<br />');
		display(text);
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
		var r = random(0, b-1);
		this.name = '';
		if (r >= 0 && r < 20) {
			this.name = 'soldier';
		} else if (r >= 20 && r < 25) {
			this.name = 'dragon';
		} else if (r >= 25 && r < 35) {
			this.name = 'demon';
		} else if (r >= 35 && r < 50) {
			this.name = 'baby dragon';
		} else if (r >= 50 && r < 100) {
			this.name = 'goblin';
		} else if (r >= 100 && r < 150) {
			this.name = 'goblin suprise';
			this.goblinSuprise();
			this.magicalForestReturn(x);
		} else if (r >= 150 && r < 185) {
			this.name = 'bear';
		} else if (r >= 185 && r < 210) {
			this.name = 'ghoul';
		} else if (r >= 210 && r < 235) {
			this.name = 'zombie';
		} else if (r >= 235 && r < 260) {
			this.name = 'troll';
		} else if (r >= 260 && r < 285) {
			this.name = 'skeleton';
		} else if (r >= 260 && r < 300) {
			this.name = 'spider';
		} else if (r >= 300 && r < 400) {
			this.magicalForest();
		} else if (r >= 400 && r < 600) {
			this.magicalForestExit();
		}
		this.magicalForestFight();
	},
	  
	magicalForestExit: function() {
		var text = '';
		text += ('You have found your out of the Magical Forest.<br />');
		text += ('You decide to head back to Kirkoswald Fortress.<br />');
		display(text);
		setTimeout(function () {
			this.kirkoswald();
		}, 6000);
	},

	magicalForestFight: function() {
		var text = '';
		text += ('You stumle appon a ' + this.player.name + '.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Attack</b> the ' + this.player.name);
		text += ('2) <b>Run</b> from the ' + this.player.name);
		text += ('3) <b>Attempt to leave</b> the forest.<br />');
		display(text);
	},
	  
	runForest: function() {
		var text = '';
		text += ('You have escaped from the ' + this.player.name + '.<br />');
		text += ('You continue to walk around the Magical Forest.<br />');
		display(text);
		setTimeout(function () {
			this.magicalForest();
		}, 6000);
	},
	  
	magicalForestReturn: function() {
		var text = '';
		text += ('Now that you have slain the ' + this.player.name + '.<br />');
		text += ('You continue to walk around the Magical Forest.<br />');
		display(text);
		setTimeout(function () {
			this.magicalForest();
		}, 6000);
	},

	magicianTowerEntrance: function() {
		if (key > 0) {
			this.magicianTower();
		} else {
			var text = '';
			text += ('The tower is locked.<br />');
			text += ('You need to find the key.<br />');
			text += ('You over hear one of the grounds keepers talking, <br />but it\'s hard to make out what he is saying.<br />');
			text += ('\'...The key.......Magical Forest.....Dragon....\'');
			text += ('but then he notices you are listening and walks way.<br />');
			text += ('You decide you head into the Magical Forest.<br />');
			display(text);
			setTimeout(function () {
				this.magicalForestEntrance();
			}, 10000);
		}
	},

	magicianTower: function() {
		var text = '';
		text += ('The door unlocks with the key.<br />');
		this.swordName();
		text += ('You walk in slowly with your ' + this.player.swordname + ' in hand ready for anything.<br />');
		text += ('The door slams behind you, locking itself, <br />the noise made by the slam alerts the guard.<br />');
		text += ('The guard says \'How did you get the key to enter the tower?\'<br />');
		this.guard();
		text += ('The tower seems to be filled with magical items.<br />');
		display(text);
	},

	shop: function() {
		this.armourName();
		this.swordName();
		var text = '';
		text += ('You are in the general store.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Browse Swords</b><br />');
		text += ('2) <b>Browse Armour</b><br />');
		text += ('3) <b>Sell wood</b><br />');
		text += ('4) <b>Sell ores</b><br />');
		text += ('5) <b>Leave</b> the shop.<br />');
		display(text);
	},

	sellwood: function() {
		var b = 25;
		var r = random(0, b-1);
		var pay = 3;
		if (r === 0) {
			pay = 4;
		}
		this.player.woodIncome = pay*this.player.wood;
		var text = '';
		text += ('You have ' + this.player.wood + ' wood. The shop keeper will pay you ' + pay + ' silver per wood.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Sell</b> ' + this.player.wood + ' wood for a total of ' + this.player.woodIncome + ' silver.<br />');
		text += ('2) <b>Return</b> to the shop.<br />');
		display(text);
	},
	
	sellwoodcomplete: function() {
		var text = '';
		if (this.player.wood === 0) {
			text += ('You do not have any wood to sell.<br />');
		} else {
			this.player.silver += this.player.woodIncome;
			text += ('You sold ' + this.player.wood + ' wood for ' + this.player.woodIncome + ' silver.<br />');
			text += ('You have ' + this.player.silver + ' silver.<br />');
			this.player.wood = 0;
		}
		display(text);
		setTimeout(function () {
			this.shop();
		}, 6000);
	},
	  
	sellore: function() {
		var b = 25;
		var r = random(0, b-1);
		var r2 = random(0, b-1);
		var r3 = random(0, b-1);
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
		this.player.ironIncome = payiron*this.player.iron;
		this.player.goldIncome = paygold*this.player.gold;
		this.player.coalIncome = paycoal*this.player.coal;
		var text = '';
		text += ('You have ' + this.player.iron + ' iron. The shop keeper will pay you ' + payiron + ' silver per iron.<br />');
		text += ('You have ' + this.player.gold + ' gold. The shop keeper will pay you ' + paygold + ' silver per gold.<br />');
		text += ('You have ' + this.player.coal + ' coal. The shop keeper will pay you ' + paycoal + ' silver per coal.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Sell</b> ' + this.player.iron + ' <b>iron</b> for a total of ' + this.player.ironIncome + ' silver.<br />');
		text += ('2) <b>Sell</b> ' + this.player.gold + ' <b>gold</b> for a total of ' + this.player.goldIncome + ' silver.<br />');
		text += ('3) <b>Sell</b> ' + this.player.coal + ' <b>coal</b> for a total of ' + this.player.coalIncome + ' silver.<br />');
		text += ('4) <b>Return</b> to the shop.<br />');
		display(text);
	},
	
	selliron: function() {
		var text = '';
		if (this.player.iron === 0) {
			text += ('You do not have any iron to sell.<br />');
			display(text);
		} else {
			this.player.silver += this.player.ironIncome;
			text += ('You sold ' + this.player.iron + ' iron for ' + this.player.ironIncome + ' silver.<br />');
			text += ('You have ' + this.player.silver + ' silver.<br />');
			this.player.iron = 0;
			display(text);
		}
		setTimeout(function () {
			this.shop();
		}, 6000);
	},
	
	sellgold: function() {
		var text = '';
		if (this.player.gold === 0) {
			text += ('You do not have any gold to sell.<br />');
			display(text);
		} else {
			this.player.silver += this.player.goldIncome;
			text += ('You sold ' + this.player.gold + ' gold for ' + this.player.goldIncome + ' silver.<br />');
			text += ('You have ' + this.player.silver + ' silver.<br />');
			this.player.gold = 0;
			display(text);
		}
		setTimeout(function () {
			this.shop();
		}, 6000);
	},
	
	sellcoal: function() {
		var text = '';
		if (this.player.iron === 0) {
			text += ('You do not have any coal to sell.<br />');
			display(text);
		} else {
			this.player.silver += this.player.coalIncome;
			text += ('You sold ' + this.player.coal + ' coal for ' + this.player.coalIncome + ' silver.<br />');
			text += ('You have ' + this.player.silver + ' silver.<br />');
			this.player.coal = 0;
			display(text);
		}
		setTimeout(function () {
			this.shop();
		}, 6000);
	},
	  
	swordShop: function() {
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
		display(text);
		this.swordName();
	},
	
	bronzeSword: function() {
		var text = '';
		if (this.player.sword > 1) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a(n) ' + this.player.swordname + '.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 1) {
			text += ('You already have a Bronze Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 500 && this.player.attack >= 1) {
				text += ('The Bronze Sword costs 500 silver and requires attack level 1.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Bronze Sword.<br />');
				text += ('2) <b>Browse</b> Swords<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Bronze Sword costs 500 silver and requires attack level 1.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				display(text);
				setTimeout(function () {
					this.swordShop();
				}, 6000);
			}
		}
	},
	
	bronzeSwordBuy: function() {
		var text = '';
		this.player.silver -= 500;
		text += ('You purchased a Bronze Sword.<br />');
		this.player.sword = 1;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	goldSword: function() {
		var text = '';
		if (this.player.sword > 2) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a(n) ' + this.player.swordname + '.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 2) {
			text += ('You already have a Gold Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 2000 && this.player.attack >= 5) {
				text += ('The Gold Sword costs 2,000 silver and requires attack level 5.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Gold Sword.<br />');
				text += ('2) <b>Browse</b> Swords');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Gold Sword costs 2,000 silver and requires attack level 5.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				display(text);
				setTimeout(function () {
					this.swordShop();
				}, 6000);
			}
		}
	},
	
	goldSwordBuy: function() {
		var text = '';
		this.player.silver -= 2000;
		text += ('You purchased a Gold Sword.<br />');
		this.player.sword = 2;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	ironSword: function() {
		var text = '';
		if (this.player.sword > 3) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + this.player.swordname + '.<br />');
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 3) {
			text += ('You already have an Iron Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 8000 && this.player.attack >= 10) {
				text += ('The Iron Sword costs 8,000 silver and requires attack level 10.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Iron Sword.<br />');
				text += ('2) <b>Browse</b> Swords');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Iron Sword costs 8,000 silver and requires attack level 10.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				display(text);
				setTimeout(function () {
					this.swordShop();
				}, 6000);
			}
		}
	},
	
	ironSwordBuy: function() {
		var text = '';
		this.player.silver -= 8000;
		text += ('You purchased an Iron Sword.<br />');
		this.player.sword = 3;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	steelSword: function() {
		var text = '';
		if (this.player.sword > 4) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + this.player.swordname + '.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 4) {
			text += ('You already have a Steel Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 25000 && this.player.attack >= 20) {
				text += ('The Steel Sword costs 25,000 silver and requires attack level 20.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Steel Sword.<br />');
				text += ('2) <b>Browse</b> Swords');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Steel Sword costs 25,000 silver and requires attack level 20.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				Game.swordShop();
			}
		}
	},
	
	steelSwordBuy: function() {
		var text = '';
		this.player.silver -= 25000;
		text += ('You purchased a Steel Sword.<br />');
		this.player.sword = 4;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	titaniumSword: function() {
		var text = '';
		if (this.player.sword > 5) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + this.player.swordname + '.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 5) {
			text += ('You already have a Titanium Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 50000 && this.player.attack >= 30) {
				text += ('The Titanium Sword costs 50,000 silver and requires attack level 30.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Titanium Sword.<br />');
				text += ('2) <b>Browse</b> Swords');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Titanium Sword costs 50,000 silver and requires attack level 30.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				display(text);
				setTimeout(function () {
					this.swordShop();
				}, 6000);
			}
		}
	},
	
	titaniumSwordBuy: function() {
		var text = '';
		this.player.silver -= 50000;
		text += ('You purchased a Titanium Sword.<br />');
		this.player.sword = 5;
		text += ('You now have ' + silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	tungstenSword: function() {
		var text = '';
		if (this.player.sword > 6) {
			text += ('You have a sword of higher value.<br />');
			text += ('You have a ' + this.player.swordname + '.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else if (this.player.sword === 6) {
			text += ('You already have a Tungsten Sword.<br />');
			display(text);
			setTimeout(function () {
				this.swordShop();
			}, 6000);
		} else {
			if (this.player.silver >= 100000 && this.player.attack >= 40) {
				text += ('The Tungsten Sword costs 100,000 silver and requires attack level 40.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> the Tungsten Sword.<br />');
				text += ('2) <b>Browse</b> Swords');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this sword.<br />');
				text += ('The Tungsten Sword costs 100,000 silver and requires attack level 40.<br />');
				text += ('You have ' + this.player.silver + ' silver and your attack level is ' + this.player.attack + '.<br />');
				display(text);
				setTimeout(function () {
					this.swordShop();
				}, 6000);
			}
		}
	},
	
	tungstenSwordBuy: function() {
		var text = '';
		this.player.silver -= 100000;
		text += ('You purchased a Tungsten Sword.<br />');
		this.player.sword = 6;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.swordShop();
		}, 6000);
	},
	
	swordName: function() {
		if (this.player.sword === 0) {
			this.player.swordname = 'Fists';
		} else if (this.player.sword === 1) {
			this.player.swordname = 'Bronze Sword';
		} else if (this.player.sword === 2) {
			this.player.swordname = 'Gold Sword';
		} else if (this.player.sword === 3) {
			this.player.swordname = 'Iron Sword';
		} else if (this.player.sword === 4) {
			this.player.swordname = 'Steel Sword';
		} else if (this.player.sword === 5) {
			this.player.swordname = 'Titanium Sword';
		} else if (this.player.sword === 6) {
			this.player.swordname = 'Tungsten Sword';
		}
	},
	
	armourShop: function() {
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
		display(text);
	},
	
	bronzeArmour: function() {
		var text = '';
		if (this.player.armour > 1) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else if (this.player.armour === 1) {
			text += ('You already have Bronze Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 500 && this.player.defence >= 1) {
				text += ('The Bronze Armour costs 500 silver and requires defence level 1.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Bronze Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Bronze Armour costs 500 silver and requires defence level 1.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},
	
	bronzeArmourBuy: function() {
		var text = '';
		this.player.silver -= 500;
		text += ('You purchased Bronze Armour.<br />');
		this.player.armour = 1;
		this.player.health = 20;
		this.player.healthstatic = 20;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	goldArmour: function() {
		var text = '';
		if (this.player.armour > 2) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else if (this.player.armour === 2) {
			text += ('You already have Gold Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 2000 && this.player.defence >= 5) {
				text += ('The Gold Armour costs 2,000 silver and requires defence level 5.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Gold Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Gold Armour costs 2,000 silver and requires defence level 5.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},
	
	goldArmourBuy: function() {
		var text = '';
		this.player.silver -= 2000;
		text += ('You purchased Gold Armour.<br />');
		this.player.armour = 2;
		this.player.health = 30;
		this.player.healthstatic = 30;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	ironArmour: function() {
		var text = '';
		if (this.player.armour > 3) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else if (this.player.armour === 3) {
			text += ('You already have Iron Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 8000 && this.player.defence >= 10) {
				text += ('The Iron Armour costs 8,000 silver and requires defence level 10.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Iron Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Iron Armour costs 8,000 silver and requires defence level 10.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},
	
	ironArmourBuy: function() {
		var text = '';
		this.player.silver -= 8000;
		text += ('You purchased Iron Armour.<br />');
		this.player.armour = 3;
		this.player.health = 40;
		this.player.healthstatic = 40;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	steelArmour: function() {
		var text = '';
		if (this.player.armour > 4) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else if (this.player.armour === 4) {
			text += ('You already have Steel Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 25000 && this.player.defence >= 20) {
				text += ('The Steel Armour costs 25,000 silver and requires defence level 20.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Steel Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Steel Armour costs 25,000 silver and requires defence level 20.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},
	
	steelArmourBuy: function() {
		var text = '';
		this.player.silver -= 25000;
		text += ('You purchased Steel Armour.<br />');
		this.player.armour = 4;
		this.player.health = 50;
		this.player.healthstatic = 50;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	titaniumArmour: function() {
		var text = '';
		if (this.player.armour > 5) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);					
		} else if (this.player.armour === 5) {
			text += ('You already have Titanium Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 50000 && this.player.defence >= 30) {
				text += ('The Titanium Armour costs 50,000 silver and requires defence level 30.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Titanium Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Titanium Armour costs 50,000 silver and requires defence level 30.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},
	
	titaniumArmourBuy: function() {
		var text = '';
		this.player.silver -= 50000;
		text += ('You purchased Titanium Armour.<br />');
		this.player.armour = 5;
		this.player.health = 60;
		this.player.healthstatic = 60;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	tungstenArmour: function() {
		var text = '';
			if (this.player.armour > 6) {
			text += ('You have armour of higher value.<br />');
			text += ('You have ' + this.player.armourname + '.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else if (this.player.armour === 6){
			text += ('You already have Tungsten Armour.<br />');
			display(text);
			setTimeout(function () {
				this.armourShop();
			}, 6000);
		} else {
			if (this.player.silver >= 100000 && this.player.defence >= 40) {
				text += ('The Tungsten Armour costs 100,000 silver and requires defence level 40.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				text += ('What would you like to do?<br />');
				text += ('1) <b>Buy</b> Tungsten Armour.<br />');
				text += ('2) <b>Browse</b> Armour<br />');
				display(text);
			} else {
				text += ('You do not meet the requirements to buy this armour.<br />');
				text += ('The Tungsten Armour costs 100,000 silver and requires defence level 40.<br />');
				text += ('You have ' + this.player.silver + ' silver and your defence level is ' + this.player.defence + '.<br />');
				display(text);
				setTimeout(function () {
					this.armourShop();
				}, 6000);
			}
		}
	},

	tungstenArmourBuy: function() {
		var text = '';
		this.player.silver -= 100000;
		text += ('You purchased Tungsten Armour.<br />');
		this.player.armour = 6;
		this.player.health = 70;
		this.player.healthstatic = 70;
		text += ('You now have ' + this.player.silver + ' Silver.<br />');
		display(text);
		setTimeout(function () {
			this.armourShop();
		}, 6000);
	},
	
	armourName: function() {
		if (this.player.armour === 0) {
			this.player.armourname = 'none';
		} else if (this.player.armour === 1) {
			this.player.armourname = 'Bronze Armour';
		} else if (this.player.armour === 2) {
			this.player.armourname = 'Gold Armour';
		} else if (this.player.armour === 3) {
			this.player.armourname = 'Iron Armour';
		} else if (armour === 4) {
			this.player.armourname = 'Steel Armour';
		} else if (this.player.armour === 5) {
			this.player.armourname = 'Titanium Armour';
		} else if (this.player.armour === 6) {
			this.player.armourname = 'Tungsten Armour';
		}
	},
  
	backToCity: function() {
		var text = '';
		text += ('You leave the shop.<br />');
		display(text);
		setTimeout(function () {
			if (this.player.location === 1) {
				this.backleigh();
			} else if (this.player.location === 2) {
				this.draydon();
			} else if (this.player.location === 3) {
				this.elden();
			} else if (this.player.location === 4) {
				this.kirkoswald();
			} else if (this.player.location === 5) {
				this.grimtol();
			}
		}, 6000);
	},
	
	iron: function() {
		var text = '';
		var r = 1;
		if (this.player.mining >= 25) {
			r = 2;
		}
		this.player.iron += r;
		this.player.miningxp++;
		text += ('You have recieved ' + r + ' iron.<br />');
		text += ('You have ' + this.player.iron + ' iron.<br />');
		if (this.player.miningxp === this.player.mining*21) {
			text += ('<br /><b>Congradulations, you have advanced a Mining level!</b><br />');
			this.player.mining++;
			text += ('<b>Mining level:</b> ' + this.player.mining + '<br />');
			this.player.miningxp = 0;
		}
		display(text);
	},
	
	coal: function() {
		var text = '';
		if (this.player.mining >= 25) {
			r = 1;
			if (this.player.mining >= 50) {
				r = 2;
			}
			this.player.coal += r;
			this.player.miningxp++;
			text += ('You have recieved ' + r + ' Coal.<br />');
			text += ('You have ' + this.player.coal + ' Coal.<br />');
			if (this.player.miningxp === mining*21) {
				text += ('<br /><b>Congradulations, you have advanced a Mining level!</b><br />');
				this.player.mining++;
				text += ('<b>Mining level:</b> ' + this.player.mining + '<br />');
				this.player.miningxp = 0;
			}
			display(text);
		} else {
			text += ('To mine coal you need a mining level of 25.<br />');
			text += ('Your mining level is ' + this.player.mining + '.<br />');
			display(text);
		}
	},
  
	gold: function() {
		var text = '';
		if (this.player.mining >= 50) {
			r = 1;
			if (this.player.mining >= 75) {
				r = 2;
			}
			this.player.gold += r;
			this.player.miningxp++;
			text += ('You have recieved ' + r + ' gold.<br />');
			text += ('You have ' + this.player.gold + ' gold.<br />');
			if (this.player.miningxp === this.player.mining*21) {
				text += ('<br /><b>Congradulations, you have advanced a Mining level!</b><br />');
				this.player.mining++;
				text += ('<b>Mining level:</b> ' + this.player.mining) + '<br />';
				this.player.miningxp = 0;
			}
			display(text);
		} else {
			text += ('To mine gold you need a mining level of 50.<br />');
			text += ('Your mining level is ' + this.player.mining + '.<br />');	
			display(text);
		}
	},
  
	lumber: function() {
		var text = '';
		var b = 6;
		var r = random(0, b-1);
		if (this.player.woodcutting < 25) {
			if (r >= 2) {
				this.player.wood += 2;
				r = 2;
			} else {
				this.player.wood += r;
			}
		} else {
			this.player.wood += r;
		}
		if (r > 0) {
			this.player.woodcuttingxp++;
		}
		text += ('You have recieved ' + r + ' wood.<br />');
		text += ('You have ' + this.player.wood + ' wood.<br />');
		if (this.player.woodcuttingxp === this.player.woodcutting*21) {
			text += ('<br /><b>Congradulations, you have advanced a Woodcutting level!</b><br />');
			this.player.woodcutting++;
			text += ('<b>Woodcutting level:</b> ' + this.player.woodcutting + '<br />');
			this.player.woodcuttingxp = 0;
		}
		display(text);
	},
	
	fish: function() {
		var text = '';
		if (this.player.bait > 0) {
			var b = 2;
			var r = random(0, b-1);
			if (this.player.fishing >= 25) {
				r = random(0, this.player.fishing);
			} else if (this.player.fishing >= 20) {
				r = random(0, 9-1);;
			} else if (this.player.fishing >= 15) {
				r = random(0, 7-1);;
			} else if (this.player.fishing >= 10) {
				r = random(0, 5-1);;
			} else if (this.player.fishing >= 5) {
				r = random(0, 3-1);;
			}
			if (r > 0) {
				this.player.fish++;
				this.player.fishingxp++;
			}
			this.player.bait--;
			text += ('You have recieved ' + r + ' fish.<br />');
			text += ('You have ' + this.player.fish + ' fish.<br />');
			text += ('You have ' + this.player.bait + ' piece(s) of bait.<br />');
			if (this.player.fishingxp === this.player.fishing*21) {
				text += ('<br /><b>Congradulations, you have advanced a Fishing level!</b><br />');
				this.player.fishing++;
				text += ('<b>Fishing level:</b> ' + this.player.fishing + '<br />');
				this.player.fishingxp = 0;
			}
			display(text);
		} else {
			text += ('You have 0 pieces of bait.<br />');
			text += ('You need at least 1 piece of bait to fish.<br />');
			text += ('You buy bait at the Draydon Port.<br />');
			display(text);
		}
	},
	
	swing: function() {
		var b = this.player.sword + 2;
		var r = random(0, b-1);
		var damage = 0;
		if (r > 0) {
			damage = this.player.sword + 1;
		}
		return damage;
	},
	
	eat: function() {
		var text = '';
		if (this.player.fish > 0) {
			text += ('You eat a fish.<br />');
			text += ('You gain 10 health.<br />');
			health += 10;
			if (this.player.health > this.player.healthstatic) {
				this.player.health = this.player.healthstatic;
			}
			text += ('You now have ' + this.player.health + ' health.<br />');
			text += ('You have ' + this.player.fish + ' fish.<br />');
			display(text);
		} else {
			text += ('You don\'t have any fish.<br />');
			text += ('You have ' + this.player.health + ' health.<br />');
			display(text);
		}
		setTimeout(function () {
			RETURN
		}, 10000);
	},
	
	dead: function() {
		var text = '';
		text += ('Oh dear! You seemed to have died!<br />');
		text += ('Luckily the Gods brought you back to life.<br />');
		text += ('It seems they have retrieved all our goods, except you have lost some silver!<br />');
		this.player.silver -= this.player.silver*.2;
		text += ('You have ' + this.player.silver + ' silver.<br />');
		text += ('At least you\'re alive.<br />');
		this.heal();
		display(text);
		setTimeout(function () {
			this.start();
		}, 10000);
	},
  
	heal: function() {
		this.player.health = this.player.healthstatic;
		return;
	},

};
