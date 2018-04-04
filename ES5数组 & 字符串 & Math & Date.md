ES5数组 & 字符串 & Math & Date
1.对于字符串
```javascript
var str = 'hello jirengu.com'
```
写出以下操作的代码范例

* 获取 str 下标为3的字符
* 获取 str 下标为4的字符的 Ascii 码
* 截取字符g到末尾的字符串
* 从字符o开始，截取长为4个字符的字符串
* 获取第一个 l的下标
```javascript
console.log(str[3]);
console.log(str.charCodeAt(4));
console.log(str.substr(str.indexOf(g),str.length - 1))
console.log(str.substring(str.search('g'),str.length));
cosnole.log(str.substr(str.search('g'),4));
console.log(str.search('l'));
```
2.写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255。
```javascript
function getRandIP(){
  var ip = [];
  for(var i = 0;i < 4;i++){
    ip.push(Math.floor(Math.random()*256));
  }
  return ip.join('.');
    
}
var ip = getRandIP();
console.log(ip) // 10.234.121.45
```
3.写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff。
```javascript
function getRandColor(){
  var str = '#';
  var dict = '0123456789abcdefg';
  for(var i=0;i < 6;i++){
    var index = Math.floor(Math.random()*dict.length);
    str +=dict[index];
  }
  return str;
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```
4.写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
```javascript
function getRandStr(len){
  var str = '';
  var dict = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  for(var i = 0;i<len;i++){
    var index = Math.floor(Math.random()*dict.length);
    str += dict[index];
  }
  return str;
}
var str = getRandStr(10); // 0a3iJiRZap
```
5.写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串：

* 刚刚（ t 距当前时间不到1分钟时间间隔）
* 分钟前 (t距当前时间大于等于1分钟，小于1小时)
* 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
* 3天前 (t 距离当前时间大于等于24小时，小于30天)
* 2个月前 (t 距离当前时间大于等于30天小于12个月)
* 8年前 (t 距离当前时间大于等于12个月)
```javascript
function friendlyDate(time){
    var pastTime = new Date().getTime() - time;
    if( pastTime <  (60 * 1000) ){
        console.log('刚刚');
    }else if(pastTime < (60 * 60 * 1000) ){
        console.log( Math.floor( pastTime / (60 * 1000) )  + '分钟前');
    }else if( pastTime < (24 * 60 * 60 * 1000) ){
        console.log(Math.floor( pastTime / (60 * 60 * 1000) )  +'小时前');
    }else if( pastTime < (30 * 24 * 60 * 60 * 1000) ){
        console.log(Math.floor( pastTime / (24 * 60 * 60 * 1000) )  +'天前');
    }else if( pastTime < (12 * 30 * 24 * 60 * 60 * 1000) ){

        console.log(Math.floor( pastTime / (30 * 24 * 60 * 60 * 1000) )  +'个月前');
    }else{
        console.log(Math.floor( pastTime / (12 * 30 * 24 * 60 * 60 * 1000) ) +'年前');
    }
}
var str = friendlyDate( '1484286699422' ) //  1分钟前
var str2 = friendlyDate('1483941245793') //4天前
```
6.实现一个reduce函数，作用和原生的reduce类似下面的例子。
Ex：
```javascript
 var sum = reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0); => 6
```
```javascript
function reduce (arr,initValue){
    function fn(v1,v2){
      return v1+v2;
    }
    var arr2 = (initValue !== undefined ? [initValue]:[]).concat(arr);
    while(arr2.length >1){
        arr2.splice(0,2,fn(arr2[0],arr2[1]));
    }
    return arr2[0];
}
打分

```
7.实现一个flatten函数，将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组，数组中元素仅基本类型的元素或数组，不存在循环引用的情况。
Ex:
```javascript
flatten([1, [2], [3, [[4]]]]) => [1, 2, 3, 4];
```
```javascript
var arr = [3, [2, -4, [5, 7]], -3, ['aa', [['bb']]]]
var arr2 = flatten2(arr)
console.log(arr2)

/*方法1*/
function flatten(arr) {
    var newArr = []

    function _flat(arr) {
        arr.forEach(val => {
            if (Array.isArray(val)) {
                _flat(val)
            } else {
                newArr.push(val)
            }
        })
    }
    _flat(arr)
    return newArr
}

/*方法2*/

function flatten2(arr) {
    return arr.reduce(function (initArr, currentArr) {
        return initArr.concat(Array.isArray(currentArr) ? flatten2(currentArr) : currentArr)
    }, [])
}
```