import React, { Component } from 'react'
import {NavBar,Carousel, SearchBar} from 'antd-mobile'

const imgs = [
    'http://m.qpic.cn/psb?/V11EkWBN09RuLQ/YNNll0H47Y9ijT.RhAc3ioy4VyWglkgXJSmBwbquhRE!/b/dFQBAAAAAAAA&bo=7gKgAQAAAAADB28!&rf=viewer_4',
    'http://m.qpic.cn/psb?/V11EkWBN09RuLQ/Jp9H4MtHFQveSfx4zOmD.KHXc1DNYaqZ9Zytteq5kc8!/b/dL8AAAAAAAAA&bo=7gKQAQAAAAADRx8!&rf=viewer_4'
];
const img = [
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'桌子'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'床'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'椅子'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'几'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'柜'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'书架'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'沙发'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'家居饰品'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'户外家具'},
    {im:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Omn.k1WE2T4fuuwtQgQ7jEKt7vnFT356a9p5rv2S7C4!/m/dL8AAAAAAAAAnull&bo=VgBWAAAAAAADByI!&rf=photolist&t=5',
    describ:'全部分类'}
];
const price=[
    {
        im:'http://a3.qpic.cn/psb?/V11EkWBN09RuLQ/lon4Ydysm9qIJ5h8HjsD03E0bdvHgKflb6o*Wpg5xfA!/m/dDYBAAAAAAAAnull&bo=UAHqAAAAAAADB5k!&rf=photolist&t=5',
        describe:'To Art Studio 欧式风格精...',
        price:'￥39.95'
    },
    {
        im:'http://a3.qpic.cn/psb?/V11EkWBN09RuLQ/lon4Ydysm9qIJ5h8HjsD03E0bdvHgKflb6o*Wpg5xfA!/m/dDYBAAAAAAAAnull&bo=UAHqAAAAAAADB5k!&rf=photolist&t=5',
        describe:'顺顺工艺欧式风格塑料外框...',
        price:'￥83.99'
    }
]
export default class Shop extends Component {
    state = {
        value: '输入关键字搜索',
      };
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <img src='http://a3.qpic.cn/psb?/V11EkWBN09RuLQ/0hByoK7VUBeSRTJ0EAN8dle.fm3yOtx6*W5bhFxv1Zk!/m/dD4BAAAAAAAAnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5' 
                        alt=''
                        style={{width:30,height:30}}/>
                    ]}
                >商城</NavBar>
                <div 
                style={{position:'absolute',top:45,left:0,zIndex:3,backgroundColor:'#888',opacity:0.4,width:'100%',height:40}}>
                </div> 
                <SearchBar type='text'
                        value={this.state.value}
                        style={{width:'80%',height:40,marginLeft:'10%',paddingLeft:20,position:'absolute',top:45,left:0,zIndex:4}}
                    />
                <Carousel
                    autoplay={true}
                    infinite
                    
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {imgs.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: 200 }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top'}}
                            />
                        </a>
                    ))}
                </Carousel>
                <div style={{backgroundColor:'#fff',width:'100%'}}>
                    {
                        img.map((item)=>(
                            <div key={item} 
                            style={{width:'100%',}}>
                            <div style={{width:60,height:60,margin:'10px 11px',float:'left',textAlign:'center'}}>
                                <img src={item.im} alt=""
                                style={{width:60,height:60}}/>
                                <p>{item.describ}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                {
                    price.map((item)=>(
                        <div key={item} 
                        style={{width:'100%',marginTop:100}}>
                        <div style={{width:190,height:250,margin:'10px 5px',float:'left',textAlign:'center'}}>
                            <img src={item.im} alt=""
                            style={{width:190,height:200}}/>
                            <p>{item.describe}</p>
                            <p>{item.price}</p>
                        </div>
                        </div>
                    ))
                }
                </div>
                <img src='http://m.qpic.cn/psb?/V11EkWBN09RuLQ/Jp9H4MtHFQveSfx4zOmD.KHXc1DNYaqZ9Zytteq5kc8!/b/dL8AAAAAAAAA&bo=7gKQAQAAAAADRx8!&rf=viewer_4'
                alt=""
                style={{width:'100%'}}/>
            </div>
        )}
}
