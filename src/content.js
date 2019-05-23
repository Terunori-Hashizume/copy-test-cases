chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes("https://atcoder.jp/contests/")) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(() => {
    chrome.tabs.executeScript({ file: "copy.js" });
});