ipCheck = function(){
    let ipv6info;
    let ipv4info;
    $.getJSON('https://ip6.seeip.org/geoip', function(data){
        ipv6info=data;
    }).then(data=>{
        $.getJSON('https://ip4.seeip.org/geoip', function(data){
            ipv4info=data;
        }).then(data=>{
                console.log([ipv4info,ipv6info]);
                return [ipv4info,ipv6info];
            });
        });
}