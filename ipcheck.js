IpCheck = {
    ipv6 : function(){
        $.ajax({ 
            url: 'https://ip6.seeip.org/geoip', 
            dataType: 'json', 
            data: data, 
            async: false, 
            success: function(json){
                return ipv6;
            }
        });
    },
    ipv4 : function(){
        $.ajax({ 
            url: 'https://ip4.seeip.org/geoip', 
            dataType: 'json', 
            data: data, 
            async: false, 
            success: function(json){
                return ipv6;
            }
        });
    }
}