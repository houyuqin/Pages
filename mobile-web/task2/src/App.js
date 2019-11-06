import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './container/Home'
import Api from './container/Api'
import Start from './container/Start'
import About from './container/About'
import Side from './components/Side';
import Bottom from './components/Bottom';
import Register from './container/Register'
import Detail from './container/Home/Detail'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="main">
                        <div className="content">
                            <Route path='/' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/register' component={Register} />
                            <Route path='/detail/:id' component={Detail}></Route>
                        </div>
                        <div className="sider">
                            <Side/>
                        </div>
                    </div>
                    <Bottom/>
                </div>
            </Router>
        )
    }
}
