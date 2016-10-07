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
function listens() {
	$.getJSON('//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=paul_r_schaefer&api_key=0f680404e39c821cac34008cc4d803db&format=json', function(data) {
		var song = $(".song"), artistVal = data.recenttracks.track[0].artist["#text"], trackVal = data.recenttracks.track[0].name;
		song.html(artistVal + " \u2014 " + trackVal);
	});
}
listens();
setInterval(listens, 2000);
