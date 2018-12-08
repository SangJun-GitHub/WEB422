import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component{
    render(){
        return(
            <div className="col-sm-3 col-md-2  sidebar">
              <ul className="nav nav-sidebar">
              <li className={(this.props.highligt === "Overview"? 'active': '')}><Link to='/'>Overview</Link></li>
              <li className={(this.props.highligt === "Projects"? 'active': '')}><Link to='/projects'>Projects</Link></li>
              <li className={(this.props.highligt === "Teams"? 'active': '')}><Link to='/teams'>Teams</Link></li>
              <li className={(this.props.highligt === "Employees"? 'active': '')}><Link to='/employees'>Employees</Link></li>
              </ul>
            </div>
        )
    }
}

export default SideBar;