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
/* --------------- Navidat --------------*/
var yymmddcc=show_today();
      date='<b> 民國'+(yymmddcc[0]-1911)+'年'+yymmddcc[2]+'月'+yymmddcc[3]+'日 星期'+yymmddcc[4]+'</b>';
      $('#Dd0').html(date);
//            產生民國xxx年xx月xx日星期X xx時xx分xx秒的資料
function show_today(){
    var today=new Date(); var weekday=["日","一","二","三","四","五","六"]; 
    var result_today = new Array();    
    result_today[0]=today.getFullYear();                                                    //西元年
    result_today[1]=today.getFullYear()-1911;                                               //民國年
    var Mon=today.getMonth()+1;
    result_today[2]=(Mon<10)?('0'+Mon):Mon;                                                 //月
    result_today[3]=(today.getDate()<10)?('0'+today.getDate()):today.getDate();             //日
    result_today[4]=weekday[today.getDay()];                                                //星期    
    result_today[5]=(today.getHours()<10)?('0'+today.getHours()):today.getHours();          //小時
    result_today[6]=(today.getMinutes()<10)?('0'+today.getMinutes()):today.getMinutes();    //分
    result_today[7]=(today.getSeconds()<10)?('0'+today.getSeconds()):today.getSeconds();    //秒
    return result_today;
  }
//--------------------------------------	
});
