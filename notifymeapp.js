var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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
			Subject : "Notification from NotifyMeApp",
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


