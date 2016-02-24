function listenPage(tabId, changeInfo, tab) {
	if (changeInfo.status !== 'complete') {
		return;
	}
	if (tab.status !== 'complete') {
		return;
	}

	chrome.tabs.executeScript(tabId, {
		file: "change.js"
	}, function(result) {
		if (chrome.runtime.lastError) {
			return;
		}
		chrome.pageAction.show(tabId);
	})
}

chrome.tabs.onUpdated.addListener(listenPage);
