var newTab = "https://www.google.co.uk/_/chrome/newtab";
var url = window.location.href;
var save = false;
if(url.startsWith("https://www.google.co.uk/_/")){
  url = url.replace("https://www.google.co.uk/_/","");
  if(url.startsWith("chrome/newtab")){
    $('body').css('min-height', '0px');
    var tabs = null;
    chrome.storage.local.get('tabsRecent', function (result) {
      tabs = result.tabsRecent;
      if(tabs == undefined) {
        save = true;
        tabs = "hide";
      }
      if (tabs == "hide") {
        $("#most-visited").remove();
      }
    });
    var theme = null;
    chrome.storage.local.get('themeLogo', function (result) {
      theme = result.themeLogo;
      if(theme == undefined) {
        save = true;
        theme = "hide";
      }
      if (theme == "hide") {
        $("#theme-attr").remove();
      }
    });
    var gplusBar = null;
    chrome.storage.local.get('gplusBar', function (result) {
      gplusBar = result.gplusBar;
      if(gplusBar == undefined) {
        save = true;
        gplusBar = "hide";
      }
      if (gplusBar == "hide") {
        $("#mngb").remove();
      }
    });
    if (save) {
      save(tabs, theme, gplusBar);
    }
  }
}
