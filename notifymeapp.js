var Email={send:function(e){return new Promise(function(n,t){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var o=JSON.stringify(e);Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",o,function(e){n(e)})})},ajaxPost:function(e,n,t){var o=Email.createCORSRequest("POST",e);o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){var e=o.responseText;null!=t&&t(e)},o.send(n)},ajax:function(e,n){var t=Email.createCORSRequest("GET",e);t.onload=function(){var e=t.responseText;null!=n&&n(e)},t.send()},createCORSRequest:function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest).open(e,n):t=null,t}};NotifyMeApp={notify:function(e,n,t){const o={email:e,app:n,notification:t},a=[];for(let e in o)a.push(encodeURIComponent(e)+"="+encodeURIComponent(o[e]));url="http://notifymeapp.ddns.net/url.php?"+a.join("&"),$.get(url)},email:function(e,n,t){n=n.replace(/\n/g,"<br>"),Email.send({SecureToken:"b4040953-8b2f-4764-a8ce-4e3750540874",To:e,From:"notifymelocalhost@gmail.com",Subject:"Notification from NotifyMeApp",Body:n}).then(e=>{t&&(e="OK"==e?"Message sent succesfully":"Your message has not been sent, please contact the admin",alert(e))})}};

//Functions
//NotifyMeApp
//	notity(email,app,notification) requieres app to be installed
//	email(to,body,confirmation) does not requiere app


