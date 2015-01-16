var newTab = "chrome://newtab/";

chrome.tabs.onUpdated.addListener(showIcon);
function showIcon(tabId, changeInfo, tab) {
  console.log("Trying To Show Icon on tab:" + tab.url);
  if (tab.url.indexOf(newTab) > -1) {
    // Show icon for page action in the current tab.
    console.log("Showing Icon on tabId:" + tabId);
    chrome.pageAction.show(tabId);
  }
};
