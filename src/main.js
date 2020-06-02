let html = document.querySelector("#html");
let style = document.querySelector("#style")
let n = 0;
let string = `/* 你好，我叫Pray
 * 接下来我要演示一下我的前端功底
 * 首先我要准备一个div
*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/* 接下来我把div变成八卦图
 * 注意看好了
 * 首先把div编程一个圆圈
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦由阴阳组成
 * 一黑一白
 */
#div1{
    
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 添加两个中间的小球
 */
#div1::before{
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`;


let string2 = '';

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 20);
};

step();