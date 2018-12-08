import React, {Component} from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state ={date : new Date()}
    }

    render(){
        return(
            <di>
                <h1>Hello, World!</h1>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </di>
        )
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState(
            {date: new Date()}
        )
    }
}

export default Clock;