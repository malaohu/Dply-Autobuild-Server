 /*
.___  ___.      ___       __          ___       ______    __    __   __    __
|   \/   |     /   \     |  |        /   \     /  __  \  |  |  |  | |  |  |  |
|  \  /  |    /  ^  \    |  |       /  ^  \   |  |  |  | |  |__|  | |  |  |  |
|  |\/|  |   /  /_\  \   |  |      /  /_\  \  |  |  |  | |   __   | |  |  |  |
|  |  |  |  /  _____  \  |  `----./  _____  \ |  `--'  | |  |  |  | |  `--'  |
|__|  |__| /__/     \__\ |_______/__/     \__\ \______/  |__|  |__|  \______/
Github  	:   https://github.com/malaohu
Email   	:   laohu_ma#163.com
Blog    	:   http://51.RUYO.net
Create Time	: 	2017-9-18
*/


var $$$scrip,$$$sshkey,$$$os,$$$region;
chrome.runtime.sendMessage({method: "getLocalStorage", key: "scrip"}, function(response) {
   $$$scrip = response.data;
});
chrome.runtime.sendMessage({method: "getLocalStorage", key: "sshkey"}, function(response) {
   $$$sshkey = response.data;
});
chrome.runtime.sendMessage({method: "getLocalStorage", key: "os"}, function(response) {
   $$$os = response.data;
});
chrome.runtime.sendMessage({method: "getLocalStorage", key: "region"}, function(response) {
   $$$region = response.data;
});
function start(){
	if(!$$$os||!$$$region){
		alert('请先设置相关参数');
	}else{
		$("#servername").val("RUYO365");
		$("#os").val($$$os);
		$("#region").val($$$region);
		$("#plan").val("0");
		$("#key").val($$$sshkey);
		$("#init").val($$$scrip);
		$("button[type=submit]")[0].click();
		setTimeout(function(){alert("可能出现人机验证了，手动处理一下吧！");},60000);
	}
}

function domy(){
	//创建免费服务器
	if(window.location.href == "https://dply.co/create"){
		if($("#plan option[disabled]").length > 1)
		{
			printlog('还不能创建免费服务器~');
			window.location.href = "https://dply.co/d";
		}else{
			start();
			setTimeout(domy,60000)
		}
	}
	if(window.location.href == "https://dply.co/d"){
		console.log('检查免费服务器是否到期？');
		if($(".darken-2").html() == 'No Servers Yet'){
			printlog('已到期,5秒后去重新申请');
			setTimeout(function(){window.location.href = "https://dply.co/create";},5000);
		}else
		{
			printlog('未到期,1分钟后重新检查');
			setTimeout(domy,60000)
		}
	}
}

function printlog(msg){
	document.title = new Date().toLocaleTimeString().replace("上午","").replace("下午","").replace(/:\d+$/,"") + "[" + msg + "]";
}

setTimeout(domy,3000);