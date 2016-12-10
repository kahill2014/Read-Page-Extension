chrome.tabs.executeScript( {
	code: "window.getSelection().toString();"
}, function(selection) {
	var msg = new SpeechSynthesisUtterance();
		msg.voiceuri = 'native';
		msg.volume = 1; // 0 to 1
		msg.rate = 1; // 0.1 to 10
		msg.pitch = 2; //0 to 2
		msg.text = selection[0];
		console.log(msg.text);
		msg.lang = 'en-us';

	speechSynthesis.speak(msg);
});

