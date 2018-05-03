
// if(window.location.href.indexOf("dummy") == -1){
// var url = window.location.href; 
// var count = url.indexOf('affid=');
// var value = url.substr(count).split('&')[0].split('=')[1];
// var string_url =window.location.toString();
// window.location = string_url.replace(value, 'dummy');
// }
var lenght = document.getElementsByTagName('a').length;

for(var counter =0; counter<lenght; counter++){
	if (document.getElementsByTagName('a')[counter].href.match('flipkart')) {
		var x = document.getElementsByTagName('a')[counter].href;
		 var m = x.indexOf('affid=');
		var value= x.substr(m).split('&')[0].split('=')[1];
		var res = x.replace(value, "dummy");
		 document.getElementsByTagName('a')[counter].href= res;
	};

		if (document.getElementsByTagName('a')[counter].href.match('amazon')) {
		var x = document.getElementsByTagName('a')[counter].href;
		 var m = x.indexOf('tag=');
		var value= x.substr(m).split('&')[0].split('=')[1];
		var res = x.replace(value, "dummy");
		 document.getElementsByTagName('a')[counter].href= res;
	};

	

}




