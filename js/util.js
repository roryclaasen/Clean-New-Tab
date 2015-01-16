String.prototype.startsWith = function(prefix) {
  return this.indexOf(prefix) === 0;
}

String.prototype.endsWith = function(suffix) {
  return this.match(suffix+"$") == suffix;
};
function save(tabs, theme, gplus) {
  chrome.storage.local.set({'tabsRecent': tabs});
  console.log("Saved Options tabs as :" + tabs);
  chrome.storage.local.set({'themeLogo': theme});
  console.log("Saved Theme logo as :" + theme);
  chrome.storage.local.set({'gplusBar': gplus});
  console.log("Saved Googe Plus Bar as :" + gplus);
}
