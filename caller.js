var video_out = document.getElementById("vid-box");

var login = function login(form) {
	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-cb1f1183-8885-4291-9a74-60a784b746ac',
        subscribe_key : 'sub-c-f4c4555c-658b-11e8-967c-82814fd59ac3',
        ssl: true,
	});	
	phone.ready(function(){ form.username.style.background="#55ff5b"; });
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML=''; });
	});
	return false; 	// So the form does not submit.
}

var makeCall = function makeCall(form){
	if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}