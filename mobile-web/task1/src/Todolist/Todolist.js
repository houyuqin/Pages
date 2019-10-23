import React,{Component} from 'react';
import Todoselect from './Todoselect';
import Todoinput from './Todoinput';


export default class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            todo:[],
            todo0:[]
        }
    }

    componentDidMount(){
        let todo = localStorage.getItem('todo').split(',');
        let todo0 = localStorage.getItem('todo0').split(',');
        if(todo[0]==="" && todo0[0]===""){
            todo.splice(0,1);
            todo0.splice(0,1);
            this.delItem0();
            this.delItem();
        }else if(todo[0] === "" && todo0[0] !== ""){
            todo.splice(0,1);
            this.delItem();
        }else if(todo0[0] === "" && todo[0] !== ""){
            todo0.splice(0,1);
            this.delItem0();
        }
        this.setState({
            todo:todo,
            todo0:todo0
        })
    }

    addItem = (msg)=>{
        var todo=[...this.state.todo,msg];
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',todo);
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
            localStorage.setItem('todo0',todo0);
            localStorage.setItem('todo',this.state.todo)
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
            localStorage.setItem('todo0',this.state.todo0);
            localStorage.setItem('todo',todo)
        })
       
    }

    delItem =(a)=>{
        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:todo,
            todo0:[...this.state.todo0]
        },()=>{
            localStorage.setItem('todo0',this.state.todo0);
            localStorage.setItem('todo',todo)
        });
    }
    delItem0 =(a)=>{
        var todo0 = [...this.state.todo0];
        todo0.splice(a,1);
        this.setState({
            todo0:todo0,
            todo:[...this.state.todo]
        },()=>{
            localStorage.setItem('todo0',todo0);
            localStorage.setItem('todo',this.state.todo)
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