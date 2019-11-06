import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Job extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            pages:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    componentDidMount(){
         let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
                });
        }
        
    }
    update(key){
        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+key)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
    }
    render() {
        return (
             <div>
                    <div className='botbox'>
                        {
                            this.state.pages.map((item,idx)=>(
                                <li key={item} onClick={()=>this.update(item)}>
                                    {item}
                                </li>    
                                
                            ))
                        } 
                    </div>
               <div>           
                {
                    this.state.data.map((item,idx)=>(
                            <ul>
                                <li key="item">
                                <img src={item.author.avatar_url} alt="" style={{float:'left',width:35,height:35,marginTop:5}}/>
                                <div dangerouslySetInnerHTML={{__html:item.reply_count+'/'}} style={{width:30,height:'40px',paddingTop:10,float:'left',fontSize:16,textAlign:'center'}}></div>
                                <div dangerouslySetInnerHTML={{__html:item.visit_count}} style={{width:45,height:'40px',paddingTop:10,float:'left'}}></div>
                                <div dangerouslySetInnerHTML={{__html:item.tab}} style={{width:40,height:'40px',paddingTop:10,float:'left'}}></div>
                                <Link to={`/detail/`+item.id}>
                                    <div dangerouslySetInnerHTML={{__html:item.title}} style={{width:635,height:'40px',paddingTop:'13px',float:'left',overflow:'hidden',fontWeight:'bold',fontSize:16}}></div>
                                </Link>
                                <img src="https://avatars2.githubusercontent.com/u/1763067?v=4&s=120" alt="" style={{float:'left',width:20,height:20,marginTop:5}}/>
                                <div dangerouslySetInnerHTML={{__html:'三天前'}} style={{width:65,float:'left',height:40}}></div>
                                </li>
                            </ul>           
                    ))
                }
                </div>

            </div>
        )
    }
}
