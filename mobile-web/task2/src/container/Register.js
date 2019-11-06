import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className='lgi'>
                用户名：<input type="text" className="txt"></input>
                <br/>
                密码：<input type="password" className="pwd"></input>
                <br/>
                <a href='/all'>登录</a>
            </div>
        )
    }
}
