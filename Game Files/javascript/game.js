var player = {
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
			swordname: '',
	 		armourname: '',
			name: '',
};
var x = 0;

function start() {
			player.location = 1;
			var text = '';
			text += ('You find yourself in the Castle of Backleigh.<br \>');
			text += ('What would you like to do?<br \>');
			text += ('1) Go north to Elden Stronghold.<br \>');
			text += ('2) Go west to Draydon Keep.<br \>');
			text += ('3) Go East to the Deserts of Grimtol.<br \>');
			text += ('4) Enter the cave under Backleigh Castle.<br \>');
			text += ('5) Chop wood in the lumber yard.<br \>');
			text += ('6) Go to the mine.<br \>');
			text += ('7) Go to the shop.<br \>');
			display(text);
			x = returner();
			display(x);
			console.log('this works');
			/**
			while (x < 1 || x > 7) {
				text += ('You entered an invalid number.<br \>');
				text += ('Please enter a valid number.<br \>');
				display(text);
				x = returner();
			}
			console.log('this works');
			/**
			if (x == 1) {
				elden();
			} else if (x == 2) {
				draydon();
			} else if (x == 3) {
				grimtolBridge();
			} else if (x == 4) {
				backleighCaveEntrance();
			} else if (x == 5) {
				backleighLumber();
			} else if (x == 6) {
				backleighMine();
			} else if (x == 7) {
				shop();
			}
			*/
};
