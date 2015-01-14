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
    console.log("Loaded Options tabs as :" + tabs)
  });
}

function saveOptions() {
  var select = document.getElementById("tabs");
  var option = select.children[select.selectedIndex].value;
  chrome.storage.local.set({'tabsRecent': option});
  console.log("Saved Options tabs as :" + option);
}

function eraseOptions() {
  localStorage.removeItem("tabsRecent");
  location.reload();
}
function init() {
  loadOptions();
  document.getElementById("tabs").addEventListener("change", saveOptions);
}

window.addEventListener("load", init);
