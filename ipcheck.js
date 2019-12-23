IpCheck = {
    ipv6 : function(){
        $.ajax({
            url: 'https://ip6.seeip.org/geoip', 
            dataType: 'json',
            async: false,
            success: function(json){
                result = JSON.stringify(json);
            },
            error: function () {
                result = "No ipv6 found";
            }
        });
        return result;
    },
    ipv4 : function(){
        $.ajax({
            url: 'https://ip4.seeip.org/geoip', 
            dataType: 'json',
            async: false,
            success: function(json){
                result = JSON.stringify(json);
            },
            error: function () {
                result = "No ipv4 found";
            }
        });
        return result;
    }
}