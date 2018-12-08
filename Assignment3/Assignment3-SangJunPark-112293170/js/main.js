/*********************************************************************************
* WEB422 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Sang Jun Park Student ID: 112293170 Date: 2018-10-12
*
********************************************************************************/
var viewModel = {
    teams: ko.observableArray([]),
    employees: ko.observableArray([]),
    projects: ko.observableArray([])
};

function showGenericModal(title, message){
    $('.modal-title').html(title);
    $('.modal-body').html(message);
    $('#genericModal').modal({ show: 'false' });
 };

function initializeTeams(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: 'https://immense-cliffs-93948.herokuapp.com/teams-raw',
            type: 'GET',
            contentType: 'application/json'
        }).done(function (data) {  
            viewModel["teams"]= ko.mapping.fromJS(data);
            resolve("Success, load the team data"); 
        }).fail(function (err) {
           reject("Error loading the team data");
        });
    });
};

function initializeEmployees(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: 'https://immense-cliffs-93948.herokuapp.com/employees',
            type: 'GET',
            contentType: 'application/json'
        }).done(function (data) {
            viewModel["employees"]=ko.mapping.fromJS(data);
            resolve("Success, load the employee data"); 
        }).fail(function (err) {
           reject("Error loading the employee data");
        });
    });
};

function initializeProjects(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: 'https://immense-cliffs-93948.herokuapp.com/projects',
            type: 'GET',
            contentType: 'application/json'
        }).done(function (data) {
            viewModel["projects"]=ko.mapping.fromJS(data);
            resolve("Success, load the project data"); 
        }).fail(function (err) {
           reject("Error loading the project data");

        });
    });
};

$(document).ready(function(){
    initializeTeams()
    .then(initializeEmployees)
    .then(initializeProjects)
    .then(function() {
        ko.applyBindings(viewModel);
        $('select.multiple').multipleSelect({ filter: true });
        $('select.single').multipleSelect({ single: true, filter: true });
    }).catch(function (err) {
        showGenericModal("Error", err);
    });
});

function saveTeam(){
    var currentTeam = ko.mapping.toJS(this);
    $.ajax({
        url: 'https://immense-cliffs-93948.herokuapp.com/team/' + currentTeam._id,
        type: 'PUT',
        data: JSON.stringify({
            "Projects": currentTeam.Projects,
            "Employees": currentTeam.Employees,
            "TeamLead": currentTeam.TeamLead }),
        contentType: 'application/json'
    }).done(function (data) {   
        showGenericModal("Success", currentTeam.TeamName + " Updated Successfully");
    }).fail(function (err) {
        showGenericModal("Error", err + " Error updating the team information");
    });
};