import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div className='lgi'>
                用户名：<input type="text" className="txt"></input>
                <br/>
                密码：<input type="password" className="pwd"></input>
                <br/>
                <Link to='/all'>登录</Link>
            </div>
        )
    }
}
