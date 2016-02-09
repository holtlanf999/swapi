var GetApi = (function (window, undefined) {
	var ajax = new XMLHttpRequest(),
	url = 'http://swapi.co/api/';

	if (typeof ajax !== 'undefined' ) {
		ajax.open('GET', url, true);
		ajax.send(null);

		ajax.onreadystatechange = function () {
			if (ajax.readyState === 4 ) {
				if (ajax.status === 200) {
					// parse JSON into an object with the root URL's
					var dataObject = JSON.parse(ajax.responseText);
					Selector.createCategories(dataObject);
				} else {
					console.log('ajax request problem');
				}
			}
		};
	}
})(window);