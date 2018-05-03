var selectedId = -1;
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (tab.url.indexOf("http") > -1 && 
      changeInfo.url === undefined){
    chrome.tabs.executeScript(tabId, {file: "inject.js"} );
  }
});

// chrome.tabs.onSelectionChanged.addListener(function (tabId, props) {
//     selectedId = tabId;
//     scrappy();
// });

// function scrappy() {
//     chrome.windows.getCurrent(function (currentWindow) {
//         chrome.tabs.query({active: true, windowId: currentWindow.id},
//             function (activeTabs) {
//                 chrome.tabs.executeScript(
//                     activeTabs[0].id, {file: 'inject.js', allFrames: true});
//                 //all injected
//             });

//     });
// }