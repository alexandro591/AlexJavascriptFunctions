IpCheck = {
    ipv6 : function(){
        $.ajax({
            url: 'https://ip6.seeip.org/geoip', 
            dataType: 'json',
            async: false,
            success: function(json){
                result = json;
            },
            error: function () {
                result = JSON.parse('{ "address":"not found"}');
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
                result = json;
            },
            error: function () {
                result = JSON.parse('{ "address":"not found"}');
            }
        });
        return result;
    }
}