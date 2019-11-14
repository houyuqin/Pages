import React, { Component } from 'react'

var arr=[{
    himg:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/IraQKsTakgwPHSucyx75fRNjY5x7VVB1G87ZhF6Iu2c!/m/dL8AAAAAAAAAnull&bo=tgG3AQAAAAADByM!&rf=photolist&t=5',
    name:'橙色律动',
    img:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/d0Zh0Y0.zKwofB6eBG7bh.aDLcHmIZYglQqr*Xg47iQ!/m/dFMBAAAAAAAAnull&bo=UAFQAQAAAAADByI!&rf=photolist&t=5'
    },
    {
        himg:'http://a4.qpic.cn/psb?/V11EkWBN09RuLQ/IraQKsTakgwPHSucyx75fRNjY5x7VVB1G87ZhF6Iu2c!/m/dL8AAAAAAAAAnull&bo=tgG3AQAAAAADByM!&rf=photolist&t=5',
        name:'橙色律动',
        img:'http://a3.qpic.cn/psb?/V11EkWBN09RuLQ/zfudgI6gJum5tDNI4.c5GyPq5vR5ECFw3xpz0gd9PLs!/m/dLYAAAAAAAAAnull&bo=UAFPAQAAAAADBz0!&rf=photolist&t=5'
    }
];

for(var i=0;i<10;i++){
    arr[i+2]=arr[i];
}
export default class Inspiration extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-between',flexWrap: 'wrap'}}>
                {                   
                    arr.map((item)=>(
                        <div style={{borderRadius:10,backgroundColor:'#fff',float:'left',margin:'10px 8px 5px 8px',position:'relative',height:230}}>
                        <img src={item.img} 
                            alt=""
                            style={{width:190,height:190,float:'left'}}
                        />
                        <img src={item.himg} alt="" 
                            style={{width:40,height:40,borderRadius:'50% 50%',position:'absolute',top:180,left:5}}
                        />
                        <div style={{fontSize:18,marginRight:20,marginTop:5,marginLeft:50}}>{item.name}</div>
                        <div style={{fontSize:18,position:'absolute',top:195,left:150}}>❤</div>
                        </div>
                    ))
                    
                }
        
            </div>
        )
    }
}

