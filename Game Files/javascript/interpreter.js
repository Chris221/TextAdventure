function interpret(input) {
	var command = input.trim().split(' ');
	var holder = command.slice(1).join(' ');
	command[1] = holder;
	return command;
};

function execute(cmd) {
	var action = cmd[0];
	var object = cmd[1];
	var method = player[action];
	if(method) {
		method(object);
	} else {
		alert('Invalid action');
	}
};

//modify
function returner() {
	var cmd;
	var input = document.querySelector('input');
	while (typeof cmd === 'undefined') {
		input.addEventListener("keyup", function(event) {
			if(event.keycode == 13) {
				cmd = interpret(this.value);
				execute(cmd);
			}
		})
	}
	return cmd;
};

function display(text) {
	var output = document.getElementById('output')
	output.innerHTML = '';
	output.innerHTML = text;
};


