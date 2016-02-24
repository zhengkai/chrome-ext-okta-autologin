function save_setting() {
	var sUser = document.getElementById('form_user').value;
	var sPassword = document.getElementById('form_password').value;
	var bAutoSubmit = document.getElementById('form_auto_submit').checked;
	chrome.storage.sync.set({
		user: sUser,
		password: sPassword,
		is_auto_submit: bAutoSubmit
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'Settings saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

function load_setting() {
	chrome.storage.sync.get([
		'user',
		'password',
		'is_auto_submit'
	], function (aStore) {
		document.getElementById("form_user").value = aStore.user || '';
		document.getElementById("form_password").value = aStore.password || '';
		document.getElementById("form_auto_submit").checked = aStore.is_auto_submit || false;
	});
}

function init() {
	document.getElementById("form_save").addEventListener("click", save_setting);
	load_setting();
}

window.addEventListener("load", init);
