import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppInspiration from './AppInspiration';
import Shop from './Shop';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  render() {
    return (
        <div style={{ 
          position: 'fixed', 
          height: '100%', 
          width: '100%', 
          top: 0 }}
        >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
        <TabBar.Item
        title="首页"
        key="Life"
        icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
        />
        }
        selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
        />
        }
        selected={this.state.selectedTab === 'blueTab'}
        //badge={1} 未读消息提示图标
        onPress={() => {
            this.setState({
            selectedTab: 'blueTab',
            });
        }}
        >
        <AppHome/>
        </TabBar.Item>
        <TabBar.Item
        icon={
            <div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://m.qpic.cn/psb?/V11EkWBN09RuLQ/WwL6nBPq40m*YrHS*0XTl5mywobgwDxrrsppCbwobgI!/b/dFMBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4) center center /  21px 21px no-repeat' }}
            />
        }
        selectedIcon={
            <div style={{
            width: '22px',
            height: '22px',
            background: 'url(http://m.qpic.cn/psb?/V11EkWBN09RuLQ/B19hfovdat9JzpnzRNQPRkuDo.7fNuSM0A7sjfB6KSE!/b/dAQBAAAAAAAA&bo=yADIAAAAAAADFzI!&rf=viewer_4) center center /  21px 21px no-repeat' }}
            />
        }
        title="灵感"
        key="Friend"
        // dot
        selected={this.state.selectedTab === 'greenTab'}
        onPress={() => {
            this.setState({
            selectedTab: 'greenTab',
            });
        }}
        >
        <AppInspiration/>
        </TabBar.Item>
        <TabBar.Item
        icon={
            <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
        }
        selectedIcon={
            <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
        }
        title="商城"
        key="Koubei"
        selected={this.state.selectedTab === 'redTab'}
        onPress={() => {
            this.setState({
            selectedTab: 'redTab',
            });
        }}
        data-seed="logId1"
        >
        <Shop/>
        </TabBar.Item>
        
        <TabBar.Item
        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
        title="我的"
        key="my"
        selected={this.state.selectedTab === 'yellowTab'}
        onPress={() => {
            this.setState({
            selectedTab: 'yellowTab',
            });
        }}
        >
        我的
        </TabBar.Item>
    </TabBar>
    </div>
    );
  }
}
