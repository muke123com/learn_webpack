;(function () {
    function test2(){
        var div = document.createElement("div");
        div.innerHTML = "测试数据2";
        document.body.appendChild(div);
    }
    window.onload = function () {
        test2();
    };
})()

