document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function() {

	chrome.tabs.query({active: true}, function(tab){
		submitted();
		});
  }, false);
}, false);