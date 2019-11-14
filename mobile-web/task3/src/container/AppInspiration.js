import React, { Component } from 'react'
import {Tabs,NavBar,Icon} from 'antd-mobile'
import Inspiration from './Inspiration';

const tabs2 = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
];

export default class AppInspiration extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#fff',marginRight: '18px' }} />,
                    ]}
                >住吧家居</NavBar>

                <Tabs tabs={tabs2}
                    initialPage={0}
                    tabBarActiveTextColor='#3fcccb'
                    tabBarUnderlineStyle={{border:'1px solid #3fcccb'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{backgroundColor: '#eee'}}>
                        <Inspiration/>
                    </div>
                </Tabs>
            </div>
        )
    }
}
