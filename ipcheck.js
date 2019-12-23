IpCheck = {
    ipv6 : function(){
        $.ajax({ 
            url: 'https://ip6.seeip.org/geoip', 
            dataType: 'json',
            async: false, 
            success: function(json){
                console.log(json)
                return json;
            }
        });
    },
    ipv4 : function(){
        $.ajax({ 
            url: 'https://ip4.seeip.org/geoip', 
            dataType: 'json',
            async: false, 
            success: function(json){
                console.log(json)
                return json;
            }
        });
    }
}