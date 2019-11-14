import React, { Component } from 'react'
import {NavBar,Carousel} from 'antd-mobile'

const imgs = [
    'http://m.qpic.cn/psb?/V11EkWBN09RuLQ/YNNll0H47Y9ijT.RhAc3ioy4VyWglkgXJSmBwbquhRE!/b/dFQBAAAAAAAA&bo=7gKgAQAAAAADB28!&rf=viewer_4',
    'http://m.qpic.cn/psb?/V11EkWBN09RuLQ/Jp9H4MtHFQveSfx4zOmD.KHXc1DNYaqZ9Zytteq5kc8!/b/dL8AAAAAAAAA&bo=7gKQAQAAAAADRx8!&rf=viewer_4'
];
const img=[
    'http://a3.qpic.cn/psb?/V11EkWBN09RuLQ/zqnjBYJc6ODxNLKjvFlV.PPhpkUDDXRUvE4Hv70PKDM!/m/dFIBAAAAAAAAnull&bo=3ADcAAAAAAADByI!&rf=photolist&t=5',
    'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/44G*sezchh5N.h2F7pl3GdNRS45glqhfbqn7s6OuFVs!/m/dDcBAAAAAAAAnull&bo=3ADcAAAAAAADByI!&rf=photolist&t=5',
    'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/Ehb1H88vL5.aazdlj7caiA7qBaoEy.4CErbSDw6jJss!/m/dL8AAAAAAAAAnull&bo=3ADcAAAAAAADByI!&rf=photolist&t=5'
]
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                >住吧家居</NavBar>

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
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
                
                <div style={{display:'flex',justifyContent:'space-between',width:'400',margin:'15px 10px'}}>
                    {img.map((item)=>(
                        <a key={item}>
                            <img src={item} alt=""
                            style={{width:130,}}/>
                            </a>
                        
                    ))
                    }
                </div>
                <div style={{fontSize:18}}>
                    <img src='http://m.qpic.cn/psb?/V11EkWBN09RuLQ/RRbcFrxfUowzG7LgZqpwUGJ4g7*dubR5uqnAsRs9Ixc!/b/dL8AAAAAAAAA&bo=CAAoAAAAAAADBwI!&rf=viewer_4' 
                    alt=""
                    style={{marginRight:20}}/>
                    热门推荐
                    <img src='http://a2.qpic.cn/psb?/V11EkWBN09RuLQ/gtIJI1liSBBwZ8uki.3o2Aa7V6buyZOEDm19grJjhvc!/m/dDUBAAAAAAAAnull&bo=7gJoAQAAAAADB6c!&rf=photolist&t=5'
                    alt=''
                    style={{marginTop:20,height:220,width:'100%'}}
                    />
                </div>




            </div>
        )
    }
}

