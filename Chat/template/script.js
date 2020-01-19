function validieren() {
	if(isValid()) {
		document.getElementbyId('login').disabled = false;
	} else {
		document.getElementbyId('login').disabled = true;
	}
}

function isValid() {
	var user = document.getElementbyId('name').value;
	var length = user.length;
	if(length < 3) {
		return false;
	} else {
		return true;
	}
}

function login() {
	if(isValid()) {
		window.location.href = 'list.html';
	}
}