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
	
	encode: function() {
		var encodedString = Base64.encode(Engine.gameString());
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
		console.log('Game saved at ' + Save.timeStamp());
	},
	
	loadGame: function() {
		var name = Save.cookie.cName + "=";
		var cookie = document.cookie.split(';');
		for (var i=0; i<cookie.length; i++) {
			var cookieTrimmed = cookie[i].trim();
			if (cookieTrimmed.indexOf(name)==0) {
				Engine.convertString(Save.decode(cookieTrimmed.substring(name.length,cookieTrimmed.length)));
			}
		}
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
		Save.display('<span class="center bold">GAME WAS RESET!</span>');
		Save.convertString(Engine.Engine.base);
		setTimeout(function () {
			Game.start();
		}, 3000);
	},
	
	timeStamp: function() {
		var now = new Date();
		var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
		var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
		var suffix = (time[0] < 12) ? "AM" : "PM";
		time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
		time[0] = time[0] || 12;
		for (var i = 1; i < 3; i++) {
			if (time[i] < 10) {
				time[i] = "0" + time[i];
			}
		}
		return date.join("/") + " " + time.join(":") + " " + suffix;
	},
};