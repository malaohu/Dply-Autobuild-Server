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

$(function(){
		var scrip = localStorage.getItem("scrip");
		var sshkey = localStorage.getItem("sshkey");
		var os = localStorage.getItem("os");
		var region = localStorage.getItem("region");
		if(scrip && scrip.length > 1){
			$("#scrip").val(scrip);
		}
		if(sshkey && sshkey.length > 1){
			$("#sshkey").val(sshkey);
		}
		if(os && os.length > 1){
			$("#os").val(os);
		}
		if(region && region.length > 1){
			$("#region").val(region);
		}
		$("a").click(function(){
			var href = $(this).attr("href");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				var tab = tabs[0];
				chrome.tabs.update(tab.id, {url: href});
			 });
		});
});

function doit(){
	localStorage.setItem("scrip",$("#scrip").val());
	localStorage.setItem("sshkey",$("#sshkey").val());
	localStorage.setItem("os",$("#os").val());
	localStorage.setItem("region",$("#region").val());
	alert('保存成功~');
}
$("#doit").click(function(){
	doit();
});