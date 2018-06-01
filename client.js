var video_out = document.getElementById("vid-box");

function login() {
    var username = $('#username').val();
	var phone = window.phone = PHONE({
		number        : username || "Anonymous", // listen on username line else Anonymous
		oneway: true,
	    publish_key   : 'pub-c-cb1f1183-8885-4291-9a74-60a784b746ac',
        subscribe_key : 'sub-c-f4c4555c-658b-11e8-967c-82814fd59ac3',
        ssl: true,
	});	
	// phone.ready(function(){ form.username.style.background="#55ff5b"; });
	phone.receive(function(session){
        var video_out = document.getElementById("vid-box");
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML=''; });
	});
	return false; 	// So the form does not submit.
}

function makeCall(){
    var destination = $('#destination').val();
	if (!window.phone) alert("Login First!");
	else phone.dial(destination);
	return false;
}