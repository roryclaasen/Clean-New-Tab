var defaultState = "hide";

function loadOptions() {
  chrome.storage.local.get('tabsRecent', function (result) {
    var  tabs = result.tabsRecent;
    if (tabs == undefined || (tabs != "hide" && tabs != "show")) {
      tabs = defaultState;
    }
    var tabsCheck = document.getElementById("tabs");
    if (tabs == defaultState) {
      tabsCheck.checked = true;
    }
    console.log("Loaded Options tabs as :" + tabs);
  });
  chrome.storage.local.get('themeLogo', function (result) {
    var  theme = result.themeLogo;
    if (theme == undefined || (theme != "hide" && theme != "show")) {
      theme = defaultState;
    }
    var themeCheck = document.getElementById("theme");
    if (theme == defaultState) {
      themeCheck.checked = true;
    }
    console.log("Loaded Theme logo as :" + theme);
  });
  chrome.storage.local.get('gplusBar', function (result) {
    var gplus = result.gplusBar;
    if (gplus == undefined || (gplus != "hide" && gplus != "show")) {
      gplus = defaultState;
    }
    var gplusCheck = document.getElementById("gplus");
    if (gplus == defaultState) {
      gplusCheck.checked = true;
    }
    console.log("Loaded Google+ bar as :" + gplus);
  });
}

function saveOptions() {
  $("#refresh").removeClass("hidden");
  var tabs = document.getElementById("tabs").checked;
  var tabsOption = defaultState;
  if (!tabs) {
    tabsOption = "show";
  }
  var theme = document.getElementById("theme").checked;
  var themeOption = defaultState;
  if (!theme) {
    themeOption = "show";
  }
  var gplus = document.getElementById("gplus").checked;
  var gplusOption = defaultState;
  if (!gplus) {
    gplusOption = "show";
  }
  save(tabsOption, themeOption, gplusOption);
}

function init() {
  loadOptions();
  document.getElementById("options").addEventListener("change", saveOptions);
}

window.addEventListener("load", init);
