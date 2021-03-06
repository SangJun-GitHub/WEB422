import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer.js'

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("https://immense-cliffs-93948.herokuapp.com/employees").then((res) => {
            this.setState({ employees: res.data });
        }).catch((err) => {
            console.log("Fail to read Employees data");
        });
    }

    render() {
        return (
            <MainContainer sidebar='Employees'>
                <h1 className="page-header">Employees</h1>
                <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name &nbsp;&&nbsp; Position</th>
                            <th>Address</th>
                            <th>Phone Num</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(function (employee, index) {
                            return (
                                <tr key ={index}>
                                    <td>{employee.FirstName}&nbsp;{employee.FirstName} - {employee.Position.PositionName}</td>
                                    <td>{employee.AddressStreet}, {employee.AddressCity} {employee.AddressState}, {employee.AddressZip}</td>
                                    <td>{employee.PhoneNum} ext:{employee.Extension}</td>
                                    <td>{moment(employee.HireDate).utc().format('LL')}</td>
                                    <td>$ {employee.SalaryBonus}</td>
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

export default Employees;