var defaultState = "hide";

function loadOptions() {
  chrome.storage.local.get('tabsRecent', function (result) {
    var  tabs = result.tabsRecent;
    if (tabs == undefined || (tabs != "hide" && tabs != "show")) {
      tabs = defaultState;
    }
    var select = document.getElementById("tabs");
    for (var i = 0; i < select.children.length; i++) {
      var child = select.children[i];
      if (child.value == tabs) {
        child.selected = "true";
        break;
      }
    }
    console.log("Loaded Options tabs as :" + tabs);
  });
  chrome.storage.local.get('themeLogo', function (result) {
    var  theme = result.tabsRecent;
    if (theme == undefined || (theme != "hide" && theme != "show")) {
      theme = defaultState;
    }
    var select = document.getElementById("theme");
    for (var i = 0; i < select.children.length; i++) {
      var child = select.children[i];
      if (child.value == theme) {
        child.selected = "true";
        break;
      }
    }
    console.log("Loaded Theme logo as :" + theme);
  });
  chrome.storage.local.get('gplusBar', function (result) {
    var gplus = result.gplusBar;
    if (gplus == undefined || (gplus != "hide" && gplus != "show")) {
      gplus = defaultState;
    }
    var select = document.getElementById("gplus");
    for (var i = 0; i < select.children.length; i++) {
      var child = select.children[i];
      if (child.value == gplus) {
        child.selected = "true";
        break;
      }
    }
    console.log("Loaded Google+ bar as :" + gplus);
  });
}

function saveOptions() {
  var tabs = document.getElementById("tabs");
  var tabsOption = tabs.children[tabs.selectedIndex].value;
  chrome.storage.local.set({'tabsRecent': tabsOption});
  console.log("Saved Options tabs as :" + tabsOption);

  var theme = document.getElementById("theme");
  var themeOption = theme.children[theme.selectedIndex].value;
  chrome.storage.local.set({'themeLogo': themeOption});
  console.log("Saved Theme logo as :" + themeOption);

  var gplus = document.getElementById("gplus");
  var gplusOption = gplus.children[gplus.selectedIndex].value;
  chrome.storage.local.set({'gplusBar': gplusOption});
  console.log("Saved Googe Plus Bar as :" + gplusOption);
}

function init() {
  loadOptions();
  document.getElementById("options").addEventListener("change", saveOptions);
}

window.addEventListener("load", init);
