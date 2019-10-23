import React,{Component} from 'react';

export default class Todoinput extends Component{
    constructor(){
        super();
        this.state={
            n1:0,
            n2:0
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <div style={{width:'100%',height:60,backgroundColor:'black',marginBottom:20}}>
            <div style={{width:600,float:'left',marginLeft:450}}>
                <label style={{color:this.state.n1+this.state.n2>0?'red':'white',fontSize:30,marginLeft:40}} htmlFor="inp">ToDoList</label>  
                <input placeholder="添加ToDoList" id="inp" name="n1" onChange={(e)=>this.handleChange(e)} 
                style={{width:200,height:30,float:'right',marginTop:15,marginRight:50}} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
            </div>
        )
    }
}