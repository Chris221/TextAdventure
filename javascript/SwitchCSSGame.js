/**
*
*  CSS Switcher for the Game Tower Quest
*  http://ChrisSiena.com/
*
**/
var cName = "_style";
var exdays = 30;
var checkCssFile = 'CSS/Style.css';

function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	var newlink = document.createElement("link")
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", cssFile);
		newlink.setAttribute("media", "only screen and (min-width:769px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
};

function changeCSSall(cssFile, cssLinkIndex, cssFile2, cssLinkIndex2, cssFile3, cssLinkIndex3, cssFile4, cssLinkIndex4) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	var newlink = document.createElement("link")
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", cssFile);
		newlink.setAttribute("media", "only screen and (min-width:769px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	
	var oldlink2 = document.getElementsByTagName("link").item(cssLinkIndex2);
	var newlink2 = document.createElement("link")
		newlink2.setAttribute("rel", "stylesheet");
		newlink2.setAttribute("type", "text/css");
		newlink2.setAttribute("href", cssFile2);
		newlink2.setAttribute("media", "only screen and (max-width:480px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink2, oldlink2);

	var oldlink3 = document.getElementsByTagName("link").item(cssLinkIndex3);
	var newlink3 = document.createElement("link")
		newlink3.setAttribute("rel", "stylesheet");
		newlink3.setAttribute("type", "text/css");
		newlink3.setAttribute("href", cssFile3);
		newlink3.setAttribute("media", "only screen and (min-width:481px) and (max-width:768px)");

	document.getElementsByTagName("head").item(0).replaceChild(newlink3, oldlink3);
	
	var oldlink4 = document.getElementsByTagName("link").item(cssLinkIndex4);
	var newlink4 = document.createElement("link")
		newlink4.setAttribute("rel", "stylesheet");
		newlink4.setAttribute("type", "text/css");
		newlink4.setAttribute("href", cssFile4);

	document.getElementsByTagName("head").item(0).replaceChild(newlink4, oldlink4);
	setCookie(cssFile);
};

function setCookie(cssF) {
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cName + "=" + cssF + "; " + expires + "; domain=chrissiena.com; path=/";
};

function getCookie(cn) {
	var name = cn + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0)
		return c.substring(name.length,c.length);
	}
	return "";
};

function startUp() {
	var c=getCookie(cName);
	if (c!="") {
		if (checkCssFile == c) {
<<<<<<< HEAD:javascript/SwitchCSSGame.js
			changeCSSall('CSS/Style.css', 1, 'CSS/Phone.css', 3, 'CSS/Tablet.css', 4, 'CSS/Game.css', 5);
		} else {
			changeCSSall('CSS/DarkStyle.css', 1, 'CSS/DarkPhone.css', 3, 'CSS/DarkTablet.css', 4, 'CSS/DarkGame.css', 5);
=======
			changeCSSall('../CSS/Style.css', 1, '../CSS/Phone.css', 3, '../CSS/Tablet.css', 4, '../CSS/Game.css', 5);
		} else {
			changeCSSall('../CSS/DarkStyle.css', 1, '../CSS/DarkPhone.css', 3, '../CSS/DarkTablet.css', 4, '../CSS/DarkGame.css', 5);
>>>>>>> FETCH_HEAD:javascript/SwitchCSSGame.js
		}
	} 
};