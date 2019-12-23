IpCheck = {
    ipv6 : function(){
        $.ajax({ 
            url: 'https://ip6.seeip.org/geoip', 
            dataType: 'json',
            success: function(json){
                return JSON.stringify(json);
            },
            error: function () {
                return "No ipv6 found";
            }
        });
    },
    ipv4 : function(){
        $.ajax({ 
            url: 'https://ip4.seeip.org/geoip', 
            dataType: 'json',
            success: function(json){
                return JSON.stringify(json);
            },
            error: function () {
                return "No ipv4 found";
            }
        });
    }
}