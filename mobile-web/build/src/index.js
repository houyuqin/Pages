import React from 'react';//解构 引入react属性Component,Fragment
import ReactDOM from 'react-dom';
import './index.css';
import {ShowTime} from './ShowTime';
import Todolist from './Todolist/Todolist';
import Request from './Request';

//组件交互
//父组件--->子组件：调用时在子组件上添加属性
//在子组件中通过props获取数据
//ReactDOM.render(<ShowTime word='react'/>,document.getElementById('root'));


ReactDOM.render(<Request />,document.getElementById('root'));


// 函数定义组件（无生命周期函数）
// 当只是渲染时
//ReactDOM.render(<Todolist/>,document.getElementById('root'));

//jsx表达式会被react转成一个对象
/*var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(//与hello同级的一个标签
        'h1',
        {'id':'h'},
        'react',
    )
);
console.log(ele);*/
//ReactDOM.render(ele,document.getElementById('root'));

/*var obj = {
    type:'div',
    props:{
        id:'box',
        children:['hello',{
            type:'h1',
            props:{
                id:'h',
                class:'h',
                children:['react',{
                    type:'h2',
                    props:{
                        id:'h2',
                        children:['world']
                    }
                }]
            }
        }]
    } 
}*/



//   慎用：node.offsetLeft：某个元素距离浏览器左侧的距离。
//   node.offsetWidth（）：某个元素的宽高。
//   每隔100ms+1：
  var root = document.getElementById('root');
  var width = root.offsetWidth;
//   setInterval(function(){
//       width += 1;
//     root.style.width = width+'px';
//   },1000);
root.style.width = 1000+'px';
root.style.height = 1000+'px';

/*function render(obj,container){
    var {type,props} = obj;//解构赋值

    //文档碎片frangment,不是dom节点，相当于一个容器,在内存中进行一系列的处理
    var fr = document.createDocumentFragment();

    var ele = document.createElement(obj.type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] ==='object'){
                    render(props[item][i],ele)
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(fr);
}
render(obj,document.getElementById('root'));*/

// function tick(){

// }









// 函数定义组件（无生命周期函数）
// 当只是渲染时
//var props = <h1>he</h1>;
// function Todo(props){
//     return (
//         <div>
//             {/*条件渲染 */}
//             {props.list.length >= 6?<h1>todo</h1>:''}
//             {props.list.length >= 5 && <h1>todo</h1>}
//             <ul>
//                 <li>中午睡觉</li>
//                 {/* <li>{props.list}</li> */}
//                 {/* 环境渲染 */}
//                 {
//                     props.list.map(
//                         (item,index) => index %2 === 0 && <li key={item}>{item}</li>  
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = 'hello';
// var item0 = [<li>1</li>,<li>2</li>,3,4,5];
 //ReactDOM.render(<Todolist list={item0}/>,document.getElementById('root'));

 // function tick1(){
//     var e = <div>
//         <p>当前时间</p>
//         <p>当前时间</p>
//         <h1>{new Date().toLocaleString()}</h1>
//         </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// setInterval(tick1,100);

//页面回流（重排）  ：内容改变、大小改变、结构改变
//页面重绘（改变样式）：把字体颜色，背景颜色等样式改变

// var str = '<h1>hello</h1>'+'';
// ul.innerHTML = str;//渲染一次，不循环渲染

    /*
   声明一个css类后再进行改变，渲染一次，提高效率
   .change={
        width：；
        height：；
   }
   document.body.className=“change”；
   */