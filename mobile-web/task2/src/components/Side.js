import React, { Component } from 'react'

export default class Side extends Component {
    render() {
        return (
            <div>
                <div className="git">
                    <h4>CNode:Nodejs专业中文社区</h4> 
                    您可以<a href="#">登录</a>或<a href="#">注册</a>，也可以
                    <button>通过github登录</button>
                </div>
                <div className="im">
                    <a href="https://www.aliyun.com/product/nodejs?ref=cnode">
                        <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                    </a>
                    <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs">
                        <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                    </a>
                    <a href="https://www.qiniu.com/events/cdn-package?code=cnode">
                        <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                    </a>
                </div>
                <div className="a">
                    <div className="topic">
                        <div className="tit">无人回复的话题</div>
                        <a href="https://cnodejs.org/topic/5db113f5865a9844a301d711">求助:server端无响应问题</a>
                        <a href="https://cnodejs.org/topic/5db10d5cece3813ad9ba3dc6">webpack4 使用模块异步加载的问题,import('xxx'), 的代码没能分割</a>
                        <a href="https://cnodejs.org/topic/5db05e09ece3813ad9ba3cc2">JavaScript PNG 图片编码和解码</a>
                        <a href="https://cnodejs.org/topic/5db007de865a9844a301d433">只因有了它，我找到了优秀的候选人：推荐一款候选人现场编程的神器 ShowMeBug</a>
                        <a className="fif" href="https://cnodejs.org/topic/5db00477865a9844a301d40f">海外华人如何翻墙回国看中国电视视频?</a>
                    </div>
                    <div className="cred">
                        <div className="tit">积分榜  TOP100 >></div>
                        <a href="">21730 i5ting</a>
                        <a href="">15565 alsotang</a>
                        <a href="">9350 leapon</a>
                        <a href="">9035 atian25</a>
                        <a href="">8780 jiyinyiyong</a>
                        <a href="">7315 yakczh</a>
                        <a href="">6815 im-here</a>
                        <a href="">6095 DevinXian</a>
                        <a href="">5815 chapgaga</a>
                        <a href="">5350 magicdawn</a>
                    </div>
                </div>
                <div className="friend">
                    <div className="tit">友情社区</div>
                    <a href="https://ruby-china.org/">
                        <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                    </a>
                    <a href="https://golangtc.com/">
                        <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                    </a>
                    <a href="http://phphub.org/">
                        <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                    </a>
                    <a href="https://testerhome.com/">
                        <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                    </a>
                </div>
                <div className="ma">
                    <div className="tit">客户端二维码</div>
                    <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                    <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
                </div>
            </div>
        )
    }
}
