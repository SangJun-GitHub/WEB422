import React, {Component} from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number : 0}
    }

    increase = () => {
        this.setState(
            ({number}) => ({number: number +1})
        )
    }

    decrease = () =>{
        this.setState(
            ({number}) => ({number : number -1})
        )
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <div>Value: {this.state.number}</div>
                <button onClick = {this.increase}>+</button>
                <button onClick = {this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;