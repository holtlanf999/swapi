document.addEventListener("DOMContentLoaded", function (event) {
	var categoryValue = document.querySelector('.char-select');
	var charOption = document.querySelector('.char-option');
	// This event triggers Selector.createOptions...
	categoryValue.addEventListener('change', function(){

		var getSelectedUrl = document.querySelector('[data*=' + categoryValue.value),
		url = getSelectedUrl.getAttribute('data');
		
		Selector.createOptions(url);

		// Refresh Options on click...
		var charOption = document.querySelector('.char-option');
		charOption.innerHTML = '';
	}, false);

	// This event triggers Description.optSelected...
	charOption.addEventListener('change', function(){

		var getSelectedUrl = document.querySelector('[data*=' + categoryValue.value),
		url = getSelectedUrl.getAttribute('data');
		Description.optSelected(url);
	}, false);
}); 
