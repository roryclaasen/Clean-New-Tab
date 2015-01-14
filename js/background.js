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
    console.log("removed");
  //  if (localStorage["tabsRecent"] == "hide") {
      $("#most-visited").remove();
      console.log("removed");
    //}
  }
}
