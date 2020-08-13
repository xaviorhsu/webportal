$(document).ready(function()  {
    var http_ip=(location.hostname=="websrv.local.tw")?"http://websrv.local.tw/":"https://xaviorhsu.github.io/";
    if (location.hostname=="websrv.local.tw"){
		$("#dj2").attr("href",http_ip+"TTBus/index.php");
		$("#dj5").attr("href",http_ip+"mydjweb/b20");
		}
	$('#a1,#a2,#a3,#a4,#a5,#a6,#a7').css('cursor','pointer').click(function(){
    var i=($(this).attr("id").substring(1));    
    var w_url = http_ip+"webportal/wp.html?sw="+i; window.open(w_url,"dj",);
    });
});