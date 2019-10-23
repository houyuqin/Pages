import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

export default class Todoselect extends Component{

    render(){
        return (
            <div style={{width:600,float:'left',marginLeft:450}}>
                <h1 style={{marginLeft:40}}>正在进行
                    <span style={{marginLeft:360}}>{this.props.todo.length}</span>
                </h1>        
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.todo.map(
                            (item,idx) => <li key={item,idx} style={{width:500,height:40,backgroundColor:'white',textAlign:'center',marginBottom:3,paddingTop:7}}>
                                <Checkbox onClick={(e)=>{this.props.mvTodo1(idx)}} style={{float:'left',marginLeft:10}}></Checkbox>
                                   <p style={{float:'left',marginLeft:10}}>{item}</p> 
                                <button onClick={(e)=>{this.props.delTodo(idx)}}  style={{float:'right',marginRight:10}}>删除</button>
                            </li>  
                        )
                    }
                </ul>
                <h1 style={{marginLeft:40}}>已经完成
                    <span style={{marginLeft:360}}>{this.props.todo0.length}</span> 
                </h1>
                <ul style={{listStyle:'none'}}>
                    {
                        this.props.todo0.map(
                            (item,idx) => <li key={item,idx} style={{width:500,height:40,backgroundColor:'white',textAlign:'center',marginBottom:3,paddingTop:7}}>
                                <Checkbox checked onClick={(e)=>{this.props.mvTodo2(idx)}} style={{float:'left',marginLeft:10}}></Checkbox>
                                   <p style={{float:'left',marginLeft:10}}>{item}</p> 
                                <button onClick={(e)=>{this.props.delTodo0(idx)}}  style={{float:'right',marginRight:10}}>删除</button>
                            </li> 
                        )
                    }
                </ul>
            </div>
        )
    }
}
Todoselect.propTypes = {
    todo:PropTypes.array
}