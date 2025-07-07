function toggleTab(tabId) {
  // Hide all tab content
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // selected tab
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }

  // intro section
  var intro = document.getElementsByClassName("intro");
  for (var i = 0; i < intro.length; i++) {
    intro[i].style.display = tabId === "tab2" ? "none" : "block";
  }
}
