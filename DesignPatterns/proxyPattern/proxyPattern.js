//虚拟代理实现图片懒加载
//两个立即执行函数,两个闭包,myImg中的imgNode,proxyImg中的img外部均不可访问
//myImg只包含设置图片真正src的逻辑
const myImg = (function(){
    const imgNode = document.createElement("img")
    document.body.appendChild(imgNode)
    return {
        setSrc:(src)=>{
            imgNode.src = src
        }
    }
})()

// proxyImg只含给myImg设置假loading图的逻辑
const proxyImg = (function(){
    const img = new Image
    img.onload = function(){
        //这一层this指向img
        console.log("===============this",this.src)
        setTimeout(()=>{
            //箭头函数绑定了this的指向,所以这里可以使用this.src访问到img的src.若换成function则会访问不到
            myImg.setSrc(this.src)
        },2000)
    }
    return{
        setSrc:(src)=>{
            myImg.setSrc("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0196fa582abab6a84a0d304f899eaf.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654711081&t=01eeca244030e848f2b3b6f4a834a854")
            img.src = src
        }
    }
})()

//proxyImg代理和myImg有相同的setSrc接口方法,后续不需要代理时,仅需要将代理替换即可
console.log("============proxyImg",proxyImg)
const imgUrl = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.puchedu.cn%2Fuploads%2F3%2F26%2F2150982952%2F4024880908.jpg&refer=http%3A%2F%2Fimg.puchedu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654711173&t=4f39a90888770a95d154111919751a3e"
// proxyImg.setSrc(imgUrl)
myImg.setSrc(imgUrl)

//什么是单一职责原则?就一个类而言,单一职责就是只能有一个引起它变化的原因

//这样设计的好处:
//1.符合单一职责原则,myImg,proxyImg都是单一职责.
//2.代理和本体借口的一致性,这样做的两个好处:
//1>本体myImg和代理proxyImg都提供了setSrc接口,用户可以放心请求,他只需要关心是否是想要的结果即可.
//2>在任何使用本体的地方都可以替换成使用代理,反之也可将代理替换为本体

//拔高一下自己吧:
//封装一个这样的懒加载组件,实现:
//1.可以将图片塞入指定的节点内
//2.有一定的安全检测,毕竟不是所有的dom节点都可以作为img的父组件
//3.现在插入的是真实的节点,如果用虚拟dom要怎么实现

//使用缓存代理模式实现缓存ajax异步请求数据


