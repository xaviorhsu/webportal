    var HTTP_IP=(location.hostname=="websrv.local.tw")?"http://websrv.local.tw/":"https://"+location.hostname+"/";

    var website =["","forevers","cu4103","hsusF","webapp","SR2FB","All4u","ue1rent"];
    var pagename=['','安久號烏魚子專門店','台南市開山儲蓄互助社-Welcome首頁','徐氏歷代子孫在台族譜','物聯網Webapp_Project','物聯網SendRecv_Firebase case','All4u-080共生小棧','招租㊣紅瓦厝'];
    var idx=(location.hostname=="websrv.local.tw")?"0":"1";
	var paValue=getUrlVars("sw");
    idx=(paValue)?paValue:0;
    var pv=document.getElementById('pn1');
    pv.innerHTML=(pagename[idx]==''||pagename[idx]==undefined)?"The URL not found ! (Error 404)":pagename[idx];    
    if(website[idx]!=""&&website[idx]!=undefined) {
      switch(idx)  {
          case "0" : { alert("<== Pause 0st ==>"); } break;
          case "1" : { if(location.hostname=="websrv.local.tw")
							setTimeout("top.location='https://www.forevers.com.tw';",3000);
					   else setTimeout("top.location='"+HTTP_IP+website[idx]+"/';",3000); } break;
          case "2" : { setTimeout("top.location='"+HTTP_IP+website[idx]+"/';",3000); } break;
          case "3" : { setTimeout("top.location='"+HTTP_IP+website[idx]+"/hsus_Family.html';",3000); } break;
          case "4" : { setTimeout("top.location='"+HTTP_IP+website[idx]+"/00webappproject1.html';",3000); } break;
          case "5" : { setTimeout("top.location='"+HTTP_IP+website[idx]+"/Send_Recv.html';",3000); } break;
          case "6" : { if (location.hostname=="websrv.local.tw") { setTimeout("top.location='"+HTTP_IP+website[idx]+"/';",3000); }
                       else  { setTimeout("top.location='https://www.all4u.me';",3000); } } break;
          case "7" : { setTimeout("top.location='"+HTTP_IP+website[idx]+"/';",3000); } break;
          case "8" : { alert("<== Pause 7st ==>"); } break;
                   }
      /*setTimeout("top.location='"+HTTP_IP+website[idx]+"/';",3000);*/
         }
      else { alert ('The URL was not found on the server.\nError 404 網址有誤請查明。');
           var curno=Math.floor(Math.random()*2);
           if (curno) top.location='https://www.google.com.tw/'; else top.location='https://tw.yahoo.com/';
         }
// -----------------------------------------------------------------------------------------------------//           
function getUrlVars(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);       
}
// -----------------------------------------------------------------------------------------------------//