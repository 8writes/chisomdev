function toggleTab(tabId) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var selectedTab = document.getElementById(tabId);
  selectedTab.style.display = "block";
  
  var tabintro = document.getElementsByClassName("intro");
  if (tabId === 'tab2') {
    for (var j = 0; j < tabintro.length; j++) {
      tabintro[j].style.display = "none";
    }
  }
}
