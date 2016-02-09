var Description = (function (window, undefined) {
	descriptionValue = document.querySelector('.char-description');

	// Makes a request with a new URL... Then executes displayDescription...
	function optSelected(url) {
		var getSelectedOpt = document.querySelector('.char-option'),
		opt = url + getSelectedOpt.value,
		ajax = new XMLHttpRequest();

		if (typeof ajax !== 'undefined' ) {
			ajax.open('GET', opt, true);
			ajax.send(null);
			ajax.onreadystatechange = function () {
				if (ajax.readyState === 4 ) {
					if (ajax.status === 200) {
						var description = JSON.parse(ajax.responseText);
						displayDescription(description);
					} else {
						console.log('ajax request problem');
						// Displays an error if the option don't exist...
						descriptionValue.innerHTML = '<h1>Description not Available<h1>';
					}
				}
			};
		}
	};

	// Display the description for the option selected...
	function displayDescription(description){
		// Resets options for the new categories selected...
		descriptionValue.innerHTML = '';

		ul = document.createElement('ul');
		ul.setAttribute('class', 'description-list');

		for(key in description) {
			var values = description[key],
			li = document.createElement('li');
			// format the option names and values...
			li.innerHTML = '<span class="opt-name">' + key.split('_').join(' ') + ': ' + 
			'</span>' + '<span class="opt-value">' + values.toString().split(',').join(' ') + '<span>';

			ul.appendChild(li);
		}	
			descriptionValue.appendChild(ul);
	};

	return {
		optSelected : optSelected
	};
})(window);
