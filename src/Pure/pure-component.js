import React, {Component, PureComponent} from 'react';


class Test extends PureComponent{
    state = {
        counter:0
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({counter:this.state.counter+1})
        },1000)
    }
    shouldComponentUpdate(){
      return false;
    }
    render(){
        console.log('render calling')
        return(
            <h1>{this.state.counter}</h1>
        )
    }
}

export default Test;