import React,{Component} from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';


export default class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }

        var arr=[1,2,{a:100}];
        var b = JSON.parse(JSON.stringify(arr));
        console.log(a === b);//false

        //对象的拷贝
        /*var a = {a:100};                         //var b = {b:200};
        var o = Object.assign({},a);          //console.log(o === a);//false
        console.log(o);*/

        //遍历对象
        //Object.keys返回由属性名组成的一个数组
        var a = {a:100,b:200};
        Object.keys(a).forEach((item) => {
            console.log(item);
            console.log(a[item]);
        })
        for(var item in a){
            console.log(a);
        }
    }

    //子组件--->父组件传递数据，通过调用子组件时往子组件传递一个函数
    addItem = (msg)=>{
        //this.state.todo.push(msg);
        //console.log(msg);
        this.setState({
            todo:[...this.state.todo,msg]
        })
        console.log(msg);
    }

    delItem =(a)=>{
        //this.state.todo.splice(a,1);//删除一项
        //深拷贝和浅拷贝
        //状态state
        //1.不要直接改变、处理状态
        var todo = [...this.state.todo];
        todo.splice(a,1);
        //2.setState是异步的
        //this.setState((state,props)=>({todo:state.todo+1}));
        this.setState(
            {todo}//剩余的  todo：todo
        );
        console.log(a);
    }
    render(){
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} delTodo={this.delItem}/>
            </div>
        )
    }
}