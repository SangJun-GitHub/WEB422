import React, {Component} from 'react';
import Inner from './Inner'

class Outer extends Component{
    constructor() {
        super()
        this.state = {
          outerName: ""
        }
      }
    
      componentDidMount(){
        // set the "outerName" to change to "Bob" after 2 seconds
        setTimeout(()=>{
          this.setState({
            outerName: "Bob"
          });
        },2000);
      }
    
      render() {
        return <Inner name={this.state.outerName} />
      }
}
export default Outer;