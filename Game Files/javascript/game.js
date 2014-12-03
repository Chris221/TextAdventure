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
		var text = '';
		text += ('You find yourself in the Castle of Backleigh.<br \>');
		text += ('What would you like to do?<br \>');
		text += ('1) <b>Go north</b> to Elden Stronghold.<br \>');
		text += ('2) <b>Go west</b> to Draydon Keep.<br \>');
		text += ('3) <b>Go East</b> to the Deserts of Grimtol.<br \>');
		text += ('4) <b>Enter the cave</b> under Backleigh Castle.<br \>');
		text += ('5) <b>Chop wood</b> in the lumber yard.<br \>');
		text += ('6) <b>Enter the mine</b>.<br \>');
		text += ('7) <b>Enter the shop</b>.<br \>');
		display(text);
	},
	
	backleigh: function() {
		this.player.location = 1;
		var text = '';
		text += ('You arrive in Backleigh Castle.<br />');
		text += ('What would you like to do?');
		text += ('1) Go north to Elden Stronghold.<br />');
		text += ('2) Go west to Draydon Keep.<br />');
		text += ('3) Go East to the Deserts of Grimtol.<br />');
		text += ('4) Enter the cave under Backleigh Castle.<br />');
		text += ('5) Chop wood in the lumber yard.<br />');
		text += ('6) Go to the mine.<br />');
		text += ('7) Go to the shop.<br />');
		display(text);
	},
	
	backleighCaveEntrance: function() {
		var text = '';
		text += ('You are standing outside the cave in Backleigh.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <br /><b>\"ONLY ENTER IF YOU DARE!\" <br />\"THE CAVE IS FILLED WITH MONSTERS!\"</b>');
		text += ('What would you like to do?');
		text += ('1) Enter the cave.<br />');
		text += ('3) Head back to Backleigh Castle.<br />');
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
		return x;
	},
	
	backleighCaveEnter: function() {
		var text = '';
		text += ('You have entered the cave.<br />');
		text += ('You see a ' + this.name + '.<br />');
		text += ('What would you like to do?');
		text += ('1) Attack the ' + this.name + '.<br />');
		text += ('2) Run from the ' + this.name);
		text += ('3) Leave the cave.<br />');
		display(text);
	},
	
	backleighCaveContinue: function() {
		var text = '';
		text += ('You continue down the cave.<br />');
		text += ('You see a ' + this.name + '.<br />');
		text += ('What would you like to do?');
		text += ('What would you like to do?');
		text += ('1) Attack the ' + this.name + '.<br />');
		text += ('2) Run from the ' + this.name);
		text += ('3) Leave the cave.<br />');
		display(text);
	},
	
	 runCave: function(name) {
		var text = '';
		text += ('You have escaped from the ' + name + '.<br />');
		display(text);
	},
	
	caveReturn: function(name) {
		var text = '';
		text += ('Now that you have slain the ' + name + '.<br />');
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
		text += ('What would you like to do?');
		text += ('1) Chop wood');
		text += ('2) Return to Backleigh Castle.<br />');
		display(text);
	},
	
	backleighMine: function() {
		var text = '';
		text += ('You are in the Backleigh Mine.<br />');
		text += ('What would you like to do?');
		text += ('1) Mine Iron');
		text += ('2) Mine Coal');
		text += ('3) Mine Gold');
		text += ('4) Return to Backleigh.<br />');
		display(text);
	},
	
	draydon: function() {
		this.player.location = 2;
		var text = '';
		text += ('You arrive in Draydon Keep.<br />');
		text += ('What would you like to do?');
		text += ('1) Go East to Backleigh Castle.<br />');
		text += ('2) Go to the Draydon port.<br />');
		text += ('3) Go to the shop.<br />');
		display(text);
	},
	
	draydonPort: function() {
		var text = '';
		text += ('You arrive at Draydon Port.<br />');
		text += ('What would you like to do?');
		text += ('1) Buy bait.<br />');
		text += ('2) Fish');
		text += ('3) Head back to Draydon Keep.<br />');
		display(text);
	},
	
	baitStore: function() {
		var text = '';
		text += ('20 pieces of bait costs 50 silver.<br />');
		text += ('You have ' + silver + ' silver.<br />');
		text += ('You have ' + bait + ' piece(s) of bait.<br />');
		text += ('What would you like to do?');
		text += ('1) Buy 20 bait.<br />');
		text += ('2) Return to the rest of the Port.<br />');
		display(text);
	},
	
	elden: function() {
		this.player.location = 3;
		var text = '';
		text += ('You arrive in Elden Stronghold.<br />');
		text += ('What would you like to do?');
		text += ('1) Go East to Kirkoswald Fortress.<br />');
		text += ('2) Go south to Backleigh Castle.<br />');
		text += ('3) Chop wood in the lumber yard.<br />');
		text += ('4) Go to the mine.<br />');
		text += ('5) Go to the shop.<br />');
		display(text);
	},
	
	eldenLumber: function() {
		var text = '';
		text += ('You are in the Elden Lumber yard.<br />');
		text += ('What would you like to do?');
		text += ('1) Chop wood');
		text += ('2) Return to Elden.<br />');
		display(text);
	},

	eldenMine: function() {
		var text = '';
		text += ('You are in the Elden Mine.<br />');
		text += ('What would you like to do?');
		text += ('1) Mine Iron');
		text += ('2) Mine Coal');
		text += ('3) Mine Gold');
		text += ('4) Return to Elden.<br />');
		display(text);
	},

	grimtol: function() {
		this.player.location = 5;
		var text = '';
		text += ('You arrive in the City of Grimtol.<br />');
		text += ('What would you like to do?');
		text += ('1) Go North to Kirkoswald Fortress.<br />');
		text += ('2) Go West to Backleigh Castle.<br />');
		text += ('3) Go to the mine.<br />');
		text += ('4) Go to the shop.<br />');
		display(text);
	},

	grimtolBridge: function() {
		var text = '';
		text += ('You aproach the bridge that links Backleigh and Grimtol.<br />');
		text += ('The bridge is armed with gaurds from Grimtol.<br />');
		if (this.player.location === 5) {
			text += ('The gaurds let you pass by for free.<br />');
			display(text);
		} else if (this.player.location === 1) {
			text += ('The gaurds will let you pass by for 50 silver.<br />');
			text += ('You have ' + silver + ' Silver.<br />');
			if (this.player.silver >= 50) {
				text += ('What would you like to do?');
				text += ('1) pay the gaurds 50 silver and pass.<br />');
				text += ('2) Go back to Backleigh Castle.<br />');
				display(text);
			} else {
				text += ('You don\'t have enough Silver and head back to Backleigh Castle.<br />');
				display(text);
			}
		}
	},

	grimtolMine: function() {
		var text = '';
		text += ('You are in the Grimtol Mine.<br />');
		text += ('What would you like to do?');
		text += ('1) Mine Iron');
		text += ('2) Mine Coal');
		text += ('3) Mine Gold');
		text += ('4) Return to Grimtol.<br />');
		display(text);
	},
	
	kirkoswald: function() {
		this.player.location = 4;
		var text = '';
		text += ('You arrive in Kirkoswald Fortress.<br />');
		text += ('What would you like to do?');
		text += ('1) Go west to Elden Stronghold.<br />');
		text += ('2) Go south to the deserts of Grimtol.<br />');
		text += ('3) Explore the Magical Forest.<br />');
		text += ('4) Head to the Magician Tower.<br />');
		text += ('5) Go to the shop.<br />');
		display(text);
	},

	magicalForestEntrance: function() {
		var text = '';
		text += ('You are standing outside the Magical Forest.<br />');
		text += ('You see a sign.<br />');
		text += ('The sign reads: <br />\'ONLY ENTER IF YOU DARE!\' <br />\'THE FOREST IS FILLED WITH MONSTERS!\'');
		text += ('The Magical Forest doesn\'t seem like a place you want to mess around in.<br />');
		text += ('What would you like to do?');
		text += ('1) Enter the Magical Forest.<br />');
		text += ('2) Head to the Magician Tower.<br />');
		text += ('3) Turn back to Kirkoswald Fortress.<br />');
		display(text);
	},

	magicalForest: function() {
		var text = '';
		text += ('You have been walking around the Magical Forest and seem to be lost.<br />');
		text += ('Everything in the Magical Forest looks the same.<br />');
		text += ('You hear sounds of monsters all over');
		text += ('What would you like to do?');
		text += ('1) Try to find your way.<br />');
		text += ('2) Search for these monsters you hear.<br />');
		text += ('3) Attempt to leave the forest.<br />');
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
		text += ('You stumle appon a ' + this.name + '.<br />');
		text += ('What would you like to do?');
		text += ('1) Attack the ' + this.name);
		text += ('2) Run from the ' + this.name);
		text += ('3) Attempt to leave the forest.<br />');
		display(text);
	},
	  
	runForest: function() {
		var text = '';
		text += ('You have escaped from the ' + this.name + '.<br />');
		text += ('You continue to walk around the Magical Forest.<br />');
		display(text);
		setTimeout(function () {
			this.magicalForest();
		}, 6000);
	},
	  
	magicalForestReturn: function() {
		var text = '';
		text += ('Now that you have slain the ' + this.name + '.<br />');
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
		text += ('You walk in slowly with your ' + this.swordname + ' in hand ready for anything.<br />');
		text += ('The door slams behind you, locking itself, <br />the noise made by the slam alerts the guard.<br />');
		text += ('The guard says \'How did you get the key to enter the tower?\'');
		this.guard();
		text += ('The tower seems to be filled with magical items.<br />');
		display(text);
	},

	shop: function() {
		var text = '';
		text += ('You are in the general store.<br />');
		text += ('What would you like to do?');
		text += ('1) Browse Swords');
		text += ('2) Browse Armour');
		text += ('3) Sell wood');
		text += ('4) Sell mineable items');
		text += ('5) Leave the shop.<br />');
		display(text);
	},

	sellwood: function() {
		var b = 25;
		var r = random(0, b-1);
		var pay = 3;
		if (r == 0) {
			pay = 4;
		}
		this.player.woodIncome = pay*this.player.wood;
		var text = '';
		text += ('You have ' + this.player.wood + ' wood. The shop keeper will pay you ' + pay + ' silver per wood.<br />');
		text += ('What would you like to do?');
		text += ('1) Sell ' + this.player.wood + ' wood for a total of ' + this.player.woodIncome + ' silver.' );
		text += ('2) Return to the shop.<br />');
		display(text);
	},
	
	fupsellwood: function() {
		if (this.player.wood == 0) {
			text += ('You do not have any wood to sell.' );
		} else {
			this.player.silver += this.player.woodIncome;
			text += ('You sold ' + this.player.wood + ' wood for ' + this.player.woodIncome + ' silver.' );
			text += ('You have ' + this.player.silver + ' silver.<br />');
			this.player.wood = 0;
		}
		display(text);
	},
	  
	sellore: function() {
		var b = 25;
		var r = random(0, b-1);
		var r2 = random(0, b-1);
		var r3 = random(0, b-1);
		var payiron = 10;
		var paygold = 30;
		var paycoal = 20;
		if (r == 0) {
			payiron = 15;
		}
		if (r2 == 0) {
			paygold = 45;
		}
		if (r3 == 0) {
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
		text += ('1) Sell ' + this.player.iron + ' iron for a total of ' + this.player.ironIncome + ' silver.<br />' );
		text += ('2) Sell ' + this.player.gold + ' gold for a total of ' + this.player.goldIncome + ' silver.<br />' );
		text += ('3) Sell ' + this.player.coal + ' coal for a total of ' + this.player.coalIncome + ' silver.<br />' );
		text += ('4) Return to the shop.<br />');
		display(text);
		  while (x < 1 || x > 4) {
			  text += ('You entered an invalid number.<br />');
			  text += ('Please enter a valid number.<br />');
		  }
		  if (x == 1) {
			  if (iron == 0) {
				  text += ('You do not have any iron to sell.' );
			  } else {
				  silver += ironIncome;
				  text += ('You sold ' + iron + ' iron for ' + ironIncome + ' silver.' );
				  text += ('You have ' + silver + ' silver.<br />');
				  iron = 0;
			  }
			  this.shop();
		  } else if (x == 2) {
			  if (gold == 0) {
				  text += ('You do not have any gold to sell.' );
			  } else {
				  silver += goldIncome;
				  text += ('You sold ' + gold + ' gold for ' + goldIncome + ' silver.' );
				  text += ('You have ' + silver + ' silver.<br />');
				  gold = 0;
			  }
			  this.shop();
		  } else if (x == 3) {
			  if (iron == 0) {
				  text += ('You do not have any iron to sell.' );
			  } else {
				  silver += coalIncome;
				  text += ('You sold ' + coal + ' coal for ' + coalIncome + ' silver.' );
				  text += ('You have ' + silver + ' silver.<br />');
				  coal = 0;
			  }
			  this.shop();
		  } else if (x == 4) {
			  this.shop();
		  }
	  },
};
