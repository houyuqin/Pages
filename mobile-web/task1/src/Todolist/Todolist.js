import React,{Component} from 'react';
import Todoselect from './Todoselect';
import Todoinput from './Todoinput';


export default class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            todo:JSON.parse(localStorage.getItem('todo')) || [],
            todo0:JSON.parse(localStorage.getItem('todo0')) || []
        }
        //console.log(this.state.todo)
    }

    addItem = (msg)=>{
        var todo=[...this.state.todo,msg];
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
        });
    }

    mvItem1 = (a)=>{
        var todo0 = this.state.todo0;
        todo0.push(this.state.todo[a]);
        this.state.todo.splice(a,1);
        this.setState({
            todo:[...this.state.todo],
            todo0:todo0
        },()=>{
            localStorage.setItem('todo0',JSON.stringify(todo0));
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
        
    }

    mvItem2 = (a)=>{
        var todo = this.state.todo;
        todo.push(this.state.todo0[a]);
         this.state.todo0.splice(a,1);
        this.setState({
            todo0:[...this.state.todo0],
            todo:todo
        },()=>{
            localStorage.setItem('todo0',JSON.stringify(this.state.todo0));
            localStorage.setItem('todo',JSON.stringify(todo))
        })
       
    }

    delItem =(a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo,
            todo0:[...this.state.todo0]
        },()=>{
            localStorage.setItem('todo0',JSON.stringify(this.state.todo0));
            localStorage.setItem('todo',JSON.stringify(todo))
        });
    }
    delItem0 =(a)=>{
        var todo0 = [...this.state.todo0];
        todo0.splice(a,1);
        this.setState({
            todo0:todo0,
            todo:[...this.state.todo]
        },()=>{
            localStorage.setItem('todo0',JSON.stringify(todo0));
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        });
    }
    render(){
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoselect todo={this.state.todo} todo0={this.state.todo0} 
                delTodo={this.delItem} delTodo0={this.delItem0} 
                mvTodo1={this.mvItem1} mvTodo2={this.mvItem2}/>
            </div>
        )
    }
}