NotifyMeApp = {
	notify : function(email,app,notification) {
		const data = { 'email': email, 'app': app, 'notification': notification };
		const urlp1="http://notifymeapp.ddns.net/url.php?"
		const ret = [];
		for (let d in data)
			ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
		url = urlp1+ret.join('&');
		$.get(url)
	},
	email : function(to,body,confirmation){
		body=body.replace(/\n/g,"<br>");
		Email.send({
			SecureToken : "b4040953-8b2f-4764-a8ce-4e3750540874",
			To : to,
			From : "notifymelocalhost@gmail.com",
			Subject : "NotifyMeApp has sent you a message",
			Body : body
		}).then(
			message => {
				if(confirmation){
					if(message=="OK"){
						message="Message sent succesfully";
					}
					else{
						message="Your message has not been sent, please contact the admin";
					}
					alert(message);
				}
			}
		);
	}
}


