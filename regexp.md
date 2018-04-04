#正则表达式的运用练习
1.写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）。
```javascript
function isValidUsername(str){
    return /^\w{6,20}$/.test(str);
}
var str = "he1_h  ";
console.log(isValidUsername(str));//null
```
2.写一个函数isPhoneNum(str)，判断用户输入的是不是手机号。
```javascript
function isPhoneNumber(str){
    return str.match(/^1\d{10}$/);
}
var str = "9384757";
console.log(isPhoneNumber(str));//null
```
3.写一个函数isEmail(str)，判断用户输入的是不是邮箱。
```javascript
function isEmail(str){
    return str.match(/^\w+@\w+\.\w+$/)
}
var str = "121@qq com";
console.log(isEmail(str));//null
```
4.写一个函数trim(str)，去除字符串两边的空白字符。
```javascript
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}
var str = " 121@qq com  ";
console.log(trim(str));//"121@qq com"
```
