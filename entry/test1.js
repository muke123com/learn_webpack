;(function () {
    function test1(){
        var div = document.createElement("div");
        div.innerHTML = "测试数据1";
        document.body.appendChild(div);
    }
    window.onload = function () {
        test1();
    };
})()
var testVar = 123;
export default testVar;