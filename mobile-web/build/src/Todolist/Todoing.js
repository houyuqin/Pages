import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component{

    render(){
        return (
            <div>
                <h1>正在进行</h1>
                <ul>
                    {
                        this.props.todo.map(
                            (item,idx) => <li key={item,idx}>
                            {item}------
                            <button onClick={(e)=>{this.props.delTodo(idx)}}>删除</button>
                            </li>  
                        )
                    }
                </ul>
            </div>
        )
    }
}
Todoing.propTypes = {
    todo:PropTypes.array
}
Todoing.defaultProp = {
    todo:[1,2,3],
    a:100
}