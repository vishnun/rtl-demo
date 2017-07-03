console.log("server started.");

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

$(function() {
	var dir = getUrlParameter('dir');
	if(dir) {
		$('html').attr('dir', dir);
	}
});