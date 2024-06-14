/** @format */

document.getElementById('toggleSwitch').addEventListener('change', function () {
  if (this.checked) {
    console.log('Switch is ON')
    document.body.style.backgroundColor = '#359567'
      document.body.style.color = '#FFFFFF'
      var infoLinks = document.querySelectorAll('a');
        infoLinks.forEach(function(link) {
            link.style.color = 'white'; // Change link color as needed
        });
  } else {
    console.log('Switch is OFF')
    document.body.style.backgroundColor = '#EBF2F2'
      document.body.style.color = 'darkslategrey'
      var infoLinks = document.querySelectorAll('a');
        infoLinks.forEach(function(link) {
            link.style.color = 'darkslategrey'; // Change link color as needed
        });
  }
})
