var xhr = new XMLHttpRequest();
xhr.open('GET','/getWeather?city=hangzhou',true);
xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status <300 || xhr.status == 304){
        console.log(JSON.parse(xhr.responseText));
    }else{
        console.log('服务器异常');
    }
}
xhr.send();