/** @format */

document.getElementById('toggleSwitch').addEventListener('change', function () {
  if (this.checked) {
    console.log('Switch is ON')
    document.body.style.backgroundColor = 'darkslategrey'
    document.body.style.color = '#FFFFFF'
    var infoLinks = document.querySelectorAll('.infolink')
    infoLinks.forEach(function (link) {
      link.style.color = 'white' // Change link color as needed
    })
    var infoLinks = document.querySelectorAll('.menuinfolink')
    infoLinks.forEach(function (link) {
      link.style.color = 'white' // Change link color as needed
    })
  } else {
    console.log('Switch is OFF')
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = 'darkslategrey'
    var infoLinks = document.querySelectorAll('.infolink')
    infoLinks.forEach(function (link) {
      link.style.color = 'darkslategrey' // Change link color as needed
    })
      var infoLinks = document.querySelectorAll('.menuinfolink')
    infoLinks.forEach(function (link) {
      link.style.color = '' // Change link color as needed
    })
  }
})
