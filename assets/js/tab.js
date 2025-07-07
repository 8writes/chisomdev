function toggleTab(tabId) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "hidden";
  }

  var selectedTab = document.getElementById(tabId);
  selectedTab.style.display = "block";
  
  var nav = document.getElementsByClassName("nav");
  if (tabId === 'tab2') {
      nav.style.display = "hidden";
  }
}
