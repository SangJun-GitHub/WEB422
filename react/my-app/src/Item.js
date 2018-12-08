import React, {Component} from 'react';

const first_item = {
    "name": "DJI Pthantom 4 Pro",
    "imageUrl": "./images/dij-png",
    "price": "1999"
}

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state =
           { details: first_item }
        
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.increasePrice(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    increasePrice(){
        this.setState(
            (previous) => ({details : parseInt(previous.price) + 1
          }));
        }

        render(){
            return (
            <span>{this.state.details.price}</span>
    
            )
        }

}
export default Item;