import React, { Component } from 'react';

class MyName extends Component{
    static defaultProps = {
        name : 'Jun'
    }
    render(){
        return (
        <div>
            Hi, My name is <b>{ this.props.name }</b>
        </div>
        );
    }
}
MyName.defaultProps = {
    name: 'Jun'
}

export default MyName;