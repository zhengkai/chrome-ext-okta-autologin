function $(sId) {
	return document.getElementById(sId);
}

console.log('change.js loaded');

if (location.href.toLowerCase().indexOf('login') > -1) {
//	console.log('change.js run');
	chrome.storage.sync.get([
		'user',
		'password',
		'is_auto_submit',
		'abc'
	], function (aStore) {
		if (!$('user-signin')) {
			console.log('exit');
			return;
		}

		if (aStore.user && !$('user-signin').value) {
			$('user-signin').value = aStore.user;
		}
		if (aStore.password && !$('pass-signin').value) {
			$('pass-signin').value = aStore.password;
		}

		bAuto = aStore.is_auto_submit;
		if (!bAuto) {
			return;
		}
		aFeedback = $('signin-feedback');
		if (aFeedback && aFeedback.innerHTML.indexOf('error') > -1) {
			return;
		}

		if (!$('user-signin').value) {
			return;
		}
		if (!$('pass-signin').value) {
			return;
		}

		$('signin-button').click();
	});
} else {
//	console.log('change.js no login page');
}
