/**
*
*  Engine file for Tower Quest
*  http://ChrisSiena.com/
*
**/
var Save = {
	cookie: {
		cName: '_gameSave',
		cDomain: 'chrissiena.com',
	},
	
	gameString: function() {
		var string = (Game.player.attack + ', ' + Game.player.attackxp + ', ' + Game.player.defense + ', ' + Game.player.defensexp + ', ' + Game.player.health + ', ' + Game.player.healthstatic + ', ' + Game.player.healthstaticcheat + ', ' + Game.player.mining + ', ' + Game.player.miningxp + ', ' + Game.player.fish + ', ' + Game.player.fishing + ', ' + Game.player.fishingxp + ', ' + Game.player.net + ', ' + Game.player.woodcutting + ', ' + Game.player.woodcuttingxp + ', ' + Game.player.iron + ', ' + Game.player.gold + ', ' + Game.player.coal + ', ' + Game.player.wood + ', ' + Game.player.sword + ', ' + Game.player.armour + ', ' + Game.player.swordcheat + ', ' + Game.player.armourcheat + ', ' + Game.player.silver + ', ' + Game.player.key + ', ' + Game.player.kills + ', ' + Game.player.deaths + ', ' + Game.player.woodIncome + ', ' + Game.player.ironIncome + ', ' + Game.player.goldIncome + ', ' + Game.player.coalIncome + ', ' + Game.player.location + ', ' + Game.player.globalLocation + ', ' + Game.player.towerLocation + ', ' + Game.player.shopLocation + ', ' + Game.player.cheat + ', ' + Game.player.start + ', ' + Game.player.swordname + ', ' + Game.player.armourname + ', ' + Game.player.name);
	return string;
	},
	
	encode: function() {
		var encodedString = Base64.encode(Save.gameString());
		return encodedString;
	},
	
	decode: function(encodedString) {
		var decodedString = Base64.decode(encodedString);
		return decodedString;
	},
	
	saveGame: function() {
		var domainString = Save.cookie.cDomain ? ("; domain=" + Save.cookie.cDomain) : '';
		document.cookie = Save.cookie.cName + "=" + Save.encode() +
			"; max-age=" + 60 * 60 * 24 * 60 /* Number of days */ +
			"; path=/" + domainString;
		var save = $('<span>')
			.addClass('save')
			.text('Game Saved')
		save.appendTo('div.topNav');
		$("span.save").fadeOut(1000, function() {});
		function timeStamp() {
			var now = new Date();
			var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
			var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
			var suffix = ( time[0] < 12 ) ? "AM" : "PM";
			time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
			time[0] = time[0] || 12;
			for ( var i = 1; i < 3; i++ ) {
				if ( time[i] < 10 ) {
					time[i] = "0" + time[i];
				}
			}
			return date.join("/") + " " + time.join(":") + " " + suffix;
		}
		console.log('Game saved at ' + timeStamp());
	},
	
	loadGame: function() {
		var name = Save.cookie.cName + "=";
		var cookie = document.cookie.split(';');
		for (var i=0; i<cookie.length; i++) {
			var cookieTrimmed = cookie[i].trim();
			if (cookieTrimmed.indexOf(name)==0) {
				Save.convertString(Save.decode(cookieTrimmed.substring(name.length,cookieTrimmed.length)));
			}
		}
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
		Save.cheatLoad();
		var save = $('<span>')
			.addClass('save')
			.text('Game Loaded')
		save.appendTo('div.topNav');
		$("span.save").fadeOut(1000, function() {});
	},
	
	autoSave: function() {
		setInterval(Save.saveGame, 1000 * 60 * 5 /* Saves every 5 minutes */);
	},
	
	resetGame: function() {
		var base = "1, 0, 1, 0, 10, 10, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, false, true, Fists, none, ";
		Save.display('<span class="center bold">GAME WAS RESET!</span>');
		Save.convertString(base);
		setTimeout(function () {
			Game.start();
		}, 3000);
	}
};