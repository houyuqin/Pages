import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import All from './Home/All'
import Good from './Home/Good'
import Share from './Home/Share'
import Job from './Home/Job'
import Ask from './Home/Ask'

export default class Home extends Component {

    render() {
        //let url = this.props.match.url;
        return (
            <div>
                <div className='hometop'>
                    {/* 路径也可以这样写：path={`${url}/all`}    Link to={url+'/job'} */}
                    <Link className="headlink" to='/all'>全部</Link>
                    <Link className="headlink" to='/good'>精华</Link>
                    <Link className="headlink" to='/share'>分享</Link>
                    <Link className="headlink" to='/ask'>问答</Link>
                    <Link className="headlink" to='/job'>招聘</Link>
                </div>
                <div>
                <Route path='/all' component={All}/>
                <Route path='/good' component={Good}/>
                <Route path='/share' component={Share}/>
                <Route path='/ask' component={Ask}/>
                <Route path='/job' component={Job}/>
                </div> 
            </div>
        )
    }
}
