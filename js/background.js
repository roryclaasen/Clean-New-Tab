String.prototype.startsWith = function(prefix) {
  return this.indexOf(prefix) === 0;
}

String.prototype.endsWith = function(suffix) {
  return this.match(suffix+"$") == suffix;
};

//new tab = https://www.google.co.uk/_/chrome/newtab
var url = window.location.href;
if(url.startsWith("https://www.google.co.uk/_/")){
  url = url.replace("https://www.google.co.uk/_/","");
  if(url.startsWith("chrome/newtab")){
    $('body').css('min-height', '0px');
    chrome.storage.local.get('tabsRecent', function (result) {
      var tabs = result.tabsRecent;
      if (tabs == "hide") {
        $("#most-visited").remove();
      }
    });
    chrome.storage.local.get('themeLogo', function (result) {
      var theme = result.themeLogo;
      if (theme == "hide") {
        $("#theme-attr").remove();
      }
    });
    chrome.storage.local.get('gplusBar', function (result) {
      var gplusBar = result.gplusBar;
      if (gplusBar == "hide") {
        $("#mngb").remove();
      }
    });
  }
}
