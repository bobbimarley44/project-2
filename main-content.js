chrome.storage.sync.get({dfnStored: "", fnStored: "", dmiStored: "",
miStored: "", dlnStored: "", lnStored: "", dsubStored: "", subStored: "",
dobjStored: "", objStored: "", dposaStored: "", posaStored: "", dpospStored:
"", pospStored: ""}, function(result) {
  var html = document.querySelector('html');
  var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  var node;
  while (node = walker.nextNode()) {
    var re = new RegExp(result.dfnStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.fnStored);
    var re = new RegExp(result.dmiStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.miStored);
    var re = new RegExp(result.dlnStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.lnStored);
    var re = new RegExp(result.dsubStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.subStored);
    var re = new RegExp(result.dobjStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.objStored);
    var re = new RegExp(result.dposaStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.posaStored);
    var re = new RegExp(result.dpospStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.pospStored);
  }
  console.log("\n\n\n *** hello ....\n\n\n" + result.fnStored);
})
