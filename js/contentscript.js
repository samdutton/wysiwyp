window.allMaps = [];
window.oldMapConstructor = google.maps.Map;
google.maps.Map = function(div, opts) {
	var map = new oldMapConstructor(div, opts);
	window.allMaps.push(map);
	console.log(map);
	return map;
};


// in case an element is added dynamically
// $(document).bind('DOMNodeInserted', function(event) {
//    if (event.target.nodeName === "VIDEO") {
//    }
// });

$(document).ready( function() {
    // this is used when a user clicks on a framegrab in the popup
    // for a video on a page that is not in the current tab, i.e. has to be opened in a new tab
	// response is handled by listener below, with type displayFramegrabFromBackground
	//	chrome.extension.sendRequest({"type": "sendFramegrabToDisplay"}, function(response){});    
//	alert("Hello from the contentscript!");
});



// chrome.extension.onRequest.addListener(
	// function(request, sender, sendResponse) {
		// var response = {};
		// if (request.type === "consoleLog") {
			// console.log(request.value);
		// }
		// else if (request.type === "displayFramegrabFromPopup") {
		// } else if (request.type === "displayFramegrabFromBackground") {
		// } else if (request.type === "getCurrentFramegrab") {
		// } else if (request.type === "sendNumVideos") {
		// }
		// else {
			// console.log("Unknown request type: " + request.type);
		// }
		// sendResponse(response); // otherwise request remains open 
	// }
// );


// convenience methods added to JavaScript classe
Array.prototype.numericSort = function() {
	return this.sort(function(a, b) {
	    return a - b;
	});
};

String.prototype.truncate = function(maxLength) {
    if (this.length > maxLength) {
     return this.substring(0, maxLength) + "...";
    } else {
        return this;
    }
};