##DOM元素及操作
1.补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。
```html
<ul class="ct">
        <li data-img="1.png">鼠标放置查看图片1</li>
        <li data-img="2.png">鼠标放置查看图片2</li>
        <li data-img="3.png">鼠标放置查看图片3</li>
</ul>
<div class="img-preview"></div>
<script>
//你的代码
</script>
```
方法一：
```html
<ul class="ct">
        <li data-img="dog1.png">鼠标放置查看图片1</li>
        <li data-img="dog2.png">鼠标放置查看图片2</li>
        <li data-img="dog1.png">鼠标放置查看图片3</li>
    </ul>
    <img class="img-preview" ></img>
    <script>
        var node = document.querySelectorAll(".ct>li");
        for (let i = 0; i < node.length; i++) {
            node[i].addEventListener("mouseenter", function () {
                var img = this.getAttribute("data-img");
                document.querySelector(".img-preview").innerHTML = '<img src=' + img + ' />'
            });
        }
        document.querySelector(".ct").addEventListener("mouseleave", function () {
            document.querySelector(".img-preview").innerHTML = '';
        })
    </script>
```
2.补全代码，要求：

* 当点击按钮开头添加时在\<li>这里是\</li>元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
* 当点击每一个元素li时控制台展示该元素的文本内容。
```html
<ul class="ct">
  <li>这里是</li>
  <li>饥人谷</li>
  <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
//你的代码
</script>
```
```html
<ul class="ct">
  <li>这里是</li>
  <li>饥人谷</li>
  <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
    //DOM元素及操作问题2
    var ct2 = document.querySelector(".ct");
    var lis = document.querySelectorAll(".ct>li")
    var content = document.querySelector(".ipt-add-content");
    var btn1 = document.getElementById("btn-add-start");
    var btn2 = document.getElementById("btn-add-end");
    //当点击每一个元素li时控制台展示该元素的文本内容
    ct2.addEventListener("click",function(e){
        if(e.target.tagName.toLowerCase()==="li"){
            console.log(e.target.innerText);
        }
    })
    //当点击按钮开头添加时在<li>这里是</li>元素前添加一个新元素，内容为用户输入的非空字符串；
    btn1.addEventListener('click', function () {
        if (content.value.length !== 0) {
            var li = document.createElement('li');
            li.innerText = content.value;
            ct2.insertBefore(li,ct2.firstChild);
            }
    })
    //当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
    btn2.addEventListener('click', function () {
        if (content.value.length !== 0) {
            var li = document.createElement('li')
            li.innerText = content.value
            ct2.appendChild(li);
        }
    })
</script>
```
3.解释DOM2事件传播机制。
```
  DOM2级事件传播机制包括三个阶段:
* 事件捕获阶段:事件从顶级文档树节点一级一级向下遍历，直到到达该事件的目标节点。
* 处于目标阶段:执行目标节点的时间处理程序。
* 事件冒泡阶段:事件从目标节点一级一级向上上溯，直到顶级文档树节点。
```
4.onlick与addEventListener的区别？
```
oncllick：绑定事件监听器，也是DOM0级事件监听方法。
   优点：简单且具有跨浏览器优势。
   缺点：通常将一个方法赋值给一个元素的事件处理程序属性，也就意味着这个方法可以被新的方法覆盖，一个时间只能绑定一次。
   移除事件处理程序：只需把onclick属性赋值为null即可。
   btn.onclick = function(){}
addEventListener：是DOM2级事件处理程序。
   能够接受三个参数:
   eventType: 即事件类型（不加on）。比如："click"。
   handler: 事件处理函数。传入参数即为事件对象event。
   propagate: 是否只执行捕获和目标节点两个阶段。true的话，只执行1，2两个阶段；false的话，只指向2，3两个阶段。
   优点：能够绑定多个处理程序，会按照顺序依此执行。
   缺点：不具备跨浏览器优势。
   移除事件处理程序：只能通过removeEventListener移除，移除时参数与添加的时候相同。
```
5.如何获取 DOM 计算后的样式
使用getComputedStyle获取元素计算后的样式(只读)
语法如下：
```javascript
var style = window.getComputedStyle("元素", "伪类");
```
例如：
```javascript
var dom = document.getElementById("test"),
    style = window.getComputedStyle(dom , ":after");
```
6.写一个函数，批量操作 css。
```javascript
function css(node, styleObj){
    for (var key in styleObj) {
          node.style[key] = styleObj[key]
     }
}
css(document.body, {
  'color': 'red',
  'background-color': '#ccc'
})
```
7.列出DOM元素选取的API
```
getElementById()  //获取id
getElementsByClassName()  //获取class类名
getElementsByTagName()  //获取标签名
getElementsByName()  //获取有name属性的html元素
querySelector()  //选择器
querySelectorAll()  //选择所有选择器
```
8.创建元素
**createElement()**
createElement方法用来生成HTML元素节点。
```javascript
var newDiv = document.createElement("div");
```
createElement方法的参数为元素的标签名，即元素节点的tagName属性。如果传入大写的标签名，会被转为小写。如果参数带有尖括号（即<和>）或者是null，会报错。

**createTextNode()**
createTextNode方法用来生成文本节点，参数为所要生成的文本节点的内容。
```javascript
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
```
上面代码新建一个div节点和一个文本节点

**createDocumentFragment()**
createDocumentFragment方法生成一个DocumentFragment对象。
```javascript
var docFragment = document.createDocumentFragment();
```
DocumentFragment对象是一个存在于内存的DOM片段，但是不属于当前文档，常常用来生成较复杂的DOM结构，然后插入当前文档。这样做的好处在于，因为DocumentFragment不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的DOM有更好的性能表现。
####添加元素
**appendChild()**
在元素末尾添加元素
```javascript
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.appendChild(newContent);
```
**insertBefore()**
在某个元素之前插入元素
```javascript
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hello");
newDiv.insertBefore(newContent, newDiv.firstChild);
```
9.实现[此效果](http://js.jirengu.com/nupom)
[预览](http://js.jirengu.com/sexax/4/)
