
export default function getBaseUrl(){
	return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://fierce-forest-10468.herokuapp.com/';
}

function getQueryStringParameterByName(name, url){
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
	if (!results) return null;
	if (!results) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ""));
}
