var Selector = (function (window, undefined) {

	var createCategories = function (dataObject) {
		var cont = 0,
		dataLength = Object.keys(dataObject).length,
		charSelect = document.querySelector('.char-select'),
		categoryNames = [],
		categoryUrls = [];

		for (; cont < dataLength; cont ++) {
			var optionItem = document.createElement('option');
			charSelect.appendChild(optionItem);
		}

		for (key in dataObject) {
			var values = dataObject[key];
			arrPush(key, values);
		}

		function arrPush(key, values) {
			categoryNames.push(key);
			categoryUrls.push(values);

			var category = charSelect,
			i = 0;

			for (; i < dataLength; i++) {
				category[i].innerHTML = categoryNames[i];
				category[i].setAttribute('class', 'char-name');
				category.children[i].setAttribute('data', categoryUrls[i]);
			}
		};
	};

	var createOptions = function (url) {
		var ajax = new XMLHttpRequest();

		if (typeof ajax !== 'undefined' ) {
			ajax.open('GET', url, true);
			ajax.send(null);

			ajax.onreadystatechange = function () {
				var selectOptions = document.querySelector('.char-option');
				
				if (ajax.readyState === 4 ) {
					if (ajax.status === 200) {
						var options = JSON.parse(ajax.responseText);
						for (key in options) {
							var values = options[key];
						}
						for (var i = 1; i < options.count; i++) {							
							opt = document.createElement('option');
							opt.innerHTML = i;
							selectOptions.appendChild(opt);
						}
					} else {
						console.log('ajax request problem');
					}
				}
			};
		}
	};

	return {
		createCategories : createCategories,
		createOptions : createOptions
	}
})(window);

