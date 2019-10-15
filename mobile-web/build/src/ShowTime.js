import React,{Component,Fragment} from 'react';//解构 引入react属性Component,Fragment


//类定义组件（有生命周期）
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state ={
            time:new Date().toLocaleString()
        };
        setTimeout(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
            
        },1000);
        this.handleClick = this.handleClick.bind(this);
        console.log("constructor",this.props.word);
    }
    componentDidMount(){
            console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        return true;//默认能更新
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshot");
    }
    componentDidUpdate(){
        console.log("didupdate");
    }
    
    handleClick = (num,e)=>{
        console.log(e);
        console.log('点击成功');
    }

    divClick(num,e){
       console.log(num,e); 
    }

    render(){
        console.log('render');
        return(
            //return返回的必须是一个标签

            // <div>
            //     <div>{this.state.str}</div>
            //     <div>hello,{this.props.word}</div>
            // </div>

            <Fragment>
                <div onClick={(ev)=>{this.handleClick(1,ev)}}>{this.state.time}</div>
                {/* <div onClick={this.divClick.bind(this,1)}>hello,{this.props.word}</div> */}
                <div onClick={this.divClick.bind(this,333)}>hello,{this.props.word}</div>
            </Fragment>
        );
    }
}

//默认导出，只能导出一次,导入名可以与导出名不一致
//export default ShowTime;

//命名导出，可以导出多次，导入名与导出名必须一致
export {ShowTime};