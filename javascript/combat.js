var Combat = {
	enemy: {
		mHealth: 0,
		mDamage: 0,
		mSilver: 0,
		chance: 0,
		out: 0,
		monster: 0,
		mWeapon: 0,
		fighting: false,
	},
	
	attack: function() {
		switch(Game.player.name) {
			case 'guard':
				Combat.guard();
				break;
			case 'soldier':
				Combat.soldier();
				break;
			case 'dragon':
				Combat.dragon();
				break;
			case 'demon':
				Combat.demon();
				break;
			case 'baby dragon':
				Combat.babyDragon();
				break;
			case 'goblin':
				Combat.goblin();
				break;
			case 'goblin suprise':
				Combat.goblinSuprise();
				break;
			case 'bear':
				Combat.bear();
				break;
			case 'ghoul':
				Combat.ghoul();
				break;
			case 'zombie':
				Combat.zombie();
				break;
			case 'troll':
				Combat.troll();
				break;
			case 'giant':
				Combat.giant();
				break;
			case 'skeleton':
				Combat.skeleton();
				break;
			case 'spider':
				Combat.spider();
				break;
			case 'fire wizard':
				Combat.fireWizard();
				break;
			case 'frost wizard':
				Combat.frostWizard();
				break;
			case 'light wizard':
				Combat.lightWizard();
				break;
			case 'psychic wizard':
				Combat.psychicWizard();
				break;
		}
	},
	
	guard: function() {
		display('The guard proceeds to ready his sword!');
		mH = 30;
		mD = 5;
		mS = 150;
		c = 5;
		o = 1;
		m = 'guard';
		mW = 'sword';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	soldier: function() {
		display('The soldier proceeds to ready his short sword!');
		mH = 20;
		mD = 3;
		mS = 100;
		c = 3;
		o = 1;
		m = 'soldier';
		mW = 'short sword';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	dragon: function() {
		display('The dragon proceeds to watch you closely!');
		mH = 100;
		mD = 10;
		mS = 1000;
		c = 6;
		o = 1;
		m = 'dragon';
		mW = 'claws';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	demon: function() {
		display('The demon stares varo your soul!');
		mH = 20;
		mD = 3;
		mS = 100;
		c = 3;
		o = 1;
		m = 'demon';
		mW = 'claws';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	babyDragon: function() {
		display('The baby dragon looks at you with curiosity!');
		mH = 30;
		mD = 4;
		mS = 100;
		c = 4;
		o = 2;
		m = 'baby dragon';
		mW = 'claws';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	goblin: function() {
		display('The goblin looks at you, holding a stick!');
		mH = 5;
		mD = 1;
		mS = 10;
		c = 2;
		o = 4;
		m = 'goblin';
		mW = 'stick';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	goblinSuprise: function() {
		var text = '';
		text += ('A goblin jumps out of no where!<br />');
		text += ('The goblin smacks you with it\'s stick!<br />');
		text += ('The goblin hits you for 1 damage!<br />');
		display(text);
		health--;
		mH = 5;
		mD = 1;
		mS = 10;
		c = 2;
		o = 4;
		m = 'goblin';
		mW = 'stick';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	bear: function() {
		display('The bear charges at you!');
		mH = 15;
		mD = 4;
		mS = 20;
		c = 5;
		o = 2;
		m = 'bear';
		mW = 'claws';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	ghoul: function() {
		display('The ghoul slowly walks toward you!');
		mH = 10;
		mD = 3;
		mS = 20;
		c = 2;
		o = 2;
		m = 'ghoul';
		mW = 'hand';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	zombie: function() {
		display('The zombie sprvars toward you!');
		mH = 12;
		mD = 4;
		mS = 20;
		c = 3;
		o = 2;
		m = 'zombie';
		mW = 'hand';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	troll: function() {
		display('The troll stands their with its club on its shoulder!');
		mH = 25;
		mD = 5;
		mS = 50;
		c = 5;
		o = 3;
		m = 'troll';
		mW = 'club';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	giant: function() {
		display('The giant is holding a tree trunk!');
		mH = 30;
		mD = 6;
		mS = 50;
		c = 7;
		o = 4;
		m = 'giant';
		mW = 'tree trunk';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	skeleton: function() {
		display('The skeleton makes its way toward you with a broken sword!');
		mH = 15;
		mD = 3;
		mS = 25;
		c = 5;
		o = 4;
		m = 'skeleton';
		mW = 'broken sword';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	spider: function() {
		display('The spider looks poisonous!');
		mH = 9;
		mD = 4;
		mS = 15;
		c = 7;
		o = 5;
		m = 'spider';
		mW = 'teeth';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	fireWizard: function() {
		display('The wizard gets ready to fight!');
		mH = 25;
		mD = 5;
		mS = 100;
		c = 7;
		o = 3;
		m = 'wizard';
		mW = 'fireball';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	frostWizard: function() {
		display('The wizard gets ready to fight!');
		mH = 25;
		mD = 5;
		mS = 100;
		c = 7;
		o = 3;
		m = 'wizard';
		mW = 'frost blast';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	lightWizard: function() {
		display('The wizard gets ready to fight!');
		mH = 25;
		mD = 5;
		mS = 100;
		c = 7;
		o = 3;
		m = 'wizard';
		mW = 'lightning bolt';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},
	
	psychicWizard: function() {
		display('The wizard gets ready to fight!');
		mH = 25;
		mD = 5;
		mS = 100;
		c = 7;
		o = 3;
		m = 'wizard';
		mW = 'psychic blast';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	monster: function(mH, mD, mS, c, o, m, mW) {
		var text = '';
		Combat.enemy.mHealth = mH;
		Combat.enemy.mDamage = mD;
		Combat.enemy.mSilver = mS;
		Combat.enemy.chance = c + o;
		Combat.enemy.out = o - 1;
		Combat.enemy.monster = m;
		Combat.enemy.mWeapon = mW;
		Combat.enemy.fighting = true;
		if (Game.player.health <= 0) {
			Game.dead();
		}
		text += ('The ' + Combat.enemy.monster + ' has ' + Combat.enemy.mHealth + ' health.<br />');
		text += ('You have ' + Game.player.health + ' health.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Swing</b> your ' + Game.player.swordname + '.<br />');
		text += ('2) <b>Eat</b> a fish. You have ' + Game.player.fish + ' fish.<br />');
		display(text);
	},
	
	monsterContinue: function() {
		var text = '';
		text += ('The ' + Combat.enemy.monster + ' has ' + Combat.enemy.mHealth + ' health.<br />');
		text += ('You have ' + Game.player.health + ' health.<br />');
		text += ('What would you like to do?<br />');
		text += ('1) <b>Swing</b> your ' + Game.player.swordname + '.<br />');
		text += ('2) <b>Eat</b> a fish. You have ' + Game.player.fish + ' fish.<br />');
		display(text);
		if (Game.player.health <= 0) {
			Game.dead();
		}
	},
	
	monster2: function() {
		var text = '';
		var damage = Game.swing();
		if (damage > 0) {
			text += ('You hit the ' + Combat.enemy.monster + ' for ' + damage + '.<br />');
			Combat.enemy.mHealth -= damage;
			Game.player.attackxp += damage;
			if (Game.player.attackxp >= Game.player.attack*21) {
				text += ('<br /><b>Congratulations, you have advanced an Attack level!</b><br />');
				Game.player.attack++;
				text += ('<b>Attack level:</b> ' + Game.player.attack) + '<br />';
				Game.player.attackxp -= Game.player.attack*21;
				if (Game.player.attackxp < 0) {
					Game.player.attackxp = 0;
				}
			}
		} else {
			text += ('Your swing misses!<br />');
		}
		display(text);
		setTimeout(function () {
			Combat.monsterSwing();
		}, 2000);
	},
	
	monsterSwing: function() {
		var text = '';
		if (Combat.enemy.mHealth > 0) {
			text += ('<br />The ' + Combat.enemy.monster + ' swings its ' + Combat.enemy.mWeapon + '.<br />');
			var b = Combat.enemy.chance;
			var r = Math.floor(Math.random() * (b-1 - 0));
			if (r > Combat.enemy.out) {
				text += ('The ' + Combat.enemy.monster + ' hits you for ' + Combat.enemy.mDamage + ' damage!<br />');
				Game.player.health -= Combat.enemy.mDamage;
				Game.player.defensexp += Combat.enemy.mDamage;
				if (Game.player.defensexp >= Game.player.defense*21) {
					text += ('<br /><b>Congratulations, you have advanced a Defense level!</b><br />');
					Game.player.defense++;
					text += ('<b>Defense level:</b> ' + Game.player.defense) + '<br />';
					Game.player.defensexp -= Game.player.defense*21;
					if (Game.player.defensexp < 0) {
						Game.player.defensexp = 0;
					}
				}
			} else {
				text += ('The ' + Combat.enemy.monster + ' misses.<br />');
			}
			display(text);
			setTimeout(function () {
				Combat.monsterContinue();
			}, 2000);
		} else {
			Combat.monster3();
		}
	},
	
	monster3: function() {
		var text = '';
		Combat.enemy.fighting = false;
		text += ('The ' + Combat.enemy.monster + ' dies.<br />');
		Game.player.kills += 1;
		text += ('You got ' + Combat.enemy.mSilver + ' silver.<br />');
		Game.player.silver += Combat.enemy.mSilver;
		text += ('You have ' + Game.player.silver + ' silver.<br />');
		if (Game.player.location == 4 && Game.player.key == 0 && Combat.enemy.monster === 'baby dragon') {
			text += ('<br />You notice the baby dragon has a key around it\'s neck.<br />');
			text += ('Maybe it fits the Magician Tower.<br />');
			Game.player.key = 1;
		}
		display(text);
		setTimeout(function () {
			Combat.comabatEnd();
		}, 3000);
	},

	BASEMONSTER: function() {
		display('WHAT DO THEY DO TO READY?<br />');
		mH = 0;
		mD = 0;
		mS = 0;
		c = 0;
		o = 0;
		m = 'BASE';
		mW = 'BASE';
		setTimeout(function () {
			Combat.monster(mH, mD, mS, c, o, m, mW);
		}, 3000);
	},

	randomWizard: function() {
		b = 4;
		r = Math.floor(Math.random() * (b-1 - 0));
		Game.player.name = '';
		if (r == 0) {
			Game.player.name = 'fire wizard';
		} else if (r == 1) {
			Game.player.name = 'light wizard';
		} else if (r == 2) {
			Game.player.name = 'frost wizard';
		} else if (r == 3) {
			Game.player.name = 'psychic wizard';
		}
		return;
	},
	
	comabatEnd: function() {
		if (Game.player.towerLocation === 1) {
			Game.player.end();
		} else if (Game.player.location === 4 && Game.player.globalLocation === 4 && Game.player.towerLocation === 0) {
			Game.magicalForestReturn();
		} else if (Game.player.location === 1 && Game.player.globalLocation === 4 && Game.player.towerLocation === 0) {
			Game.caveReturn();
		}
	},
};