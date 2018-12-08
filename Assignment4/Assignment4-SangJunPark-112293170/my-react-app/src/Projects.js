import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer.js'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("https://immense-cliffs-93948.herokuapp.com/projects").then((res) => {
            this.setState({ projects: res.data });
        }).catch((err) => {
            console.log("Fail to read Projects data");
        });
    }

    render() {
        return (
                <MainContainer sidebar="Projects">
                    <h1 className="page-header">Projects</h1>

                    <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projects.map((project, index) => {
                                return (
                                    <tr key ={index}>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                                        <td>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).utc().format('LL'))}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    </div>
                </ MainContainer>
        );
    }
}

export default Projects;