var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

class Email {
	
	sendSimpleEmail(to,from,subject,body,token,confirmation){
		body=body.replace(/\n/g,"<br>");
		Email.send({
			SecureToken : token,
			To : to,
			From : from,
			Subject : subject,
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



//this js function is a simplified version of https://www.smtpjs.com/
//go there to generate your token with your  credentials
