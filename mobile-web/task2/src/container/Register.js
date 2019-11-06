import React from 'react'

export default function Register(props){
    function rgt(){
        props.history.push('/all');
    }

        return (
            <div>
            <div className='lgi'>
                用户名：<input type="text" className="txt"></input>
                <br/>
                密码：<input type="password" className="pwd"></input>
                <br/>
                <button onClick={rgt}>登录</button>
            </div>
            </div>
        )

}
