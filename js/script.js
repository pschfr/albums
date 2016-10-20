Mousetrap.bind('shift+h', function(e) {
	window.location.assign("index.htm");
	return false;
});
Mousetrap.bind('shift+e', function(e) {
	window.location.assign("electronic.htm");
	return false;
});
Mousetrap.bind('shift+i', function(e) {
	window.location.assign("indie.htm");
	return false;
});
Mousetrap.bind('shift+m', function(e) {
	window.location.assign("misc.htm");
	return false;
});
Mousetrap.bind('shift+r', function(e) {
	window.location.assign("rock.htm");
	return false;
});
Mousetrap.bind('space', function(e) {
	listens();
	return false;
});
function listens() {
	var method    = 'user.getrecenttracks';
	var username  = 'paul_r_schaefer';
	var API_key   = '0f680404e39c821cac34008cc4d803db';
	var number    = '1'; // Increase this to increase number of tracks
	var lastFMurl = 'https://ws.audioscrobbler.com/2.0/?method=' + method + '&user=' + username + '&api_key=' + API_key + '&limit=' + number + '&format=json';
	var element   = document.getElementById('lastFM');
	var xmlhttp   = new XMLHttpRequest();

	xmlhttp.open('GET', lastFMurl, true);

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4) {
	        if(xmlhttp.status == 200) {
	            var obj = JSON.parse(xmlhttp.responseText);
				var artistName = obj.recenttracks.track[0].artist['\#text'];
				var albumName  = obj.recenttracks.track[0].album['\#text'];
				var songName   = obj.recenttracks.track[0].name;
				var songURL    = obj.recenttracks.track[0].url;

				element.innerHTML = '<a href="' + songURL + '" title="' + albumName + '">' + artistName + ' &mdash; ' + songName + '</a> ';
	         }
	    }
	};
	xmlhttp.send(null);
}
listens();
