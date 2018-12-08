/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sang Jun Park Student ID: 112293170 Date: 2018-09-13
*
*
********************************************************************************/ 

$(function(){

    $(document).ready(function(){
        console.log("jQuery working");
    })

    $("#teams-menu").click(function(event){
        event.preventDefault();
        console.log("teams-menu working");
        $.ajax({
            url: "https://immense-cliffs-93948.herokuapp.com/teams", 
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty().html("<h3>Teams</h3>").append(JSON.stringify(data));
        });        
    });

    $("#employees-menu").click(function(event){
        event.preventDefault();
        console.log("employees-menu working");
        $.ajax({
            url: "https://immense-cliffs-93948.herokuapp.com/employees", 
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty().html("<h3>Employees</h3>").append(JSON.stringify(data));
        });        
    });

    $("#projects-menu").click(function(event){
        event.preventDefault();
        console.log("projects-menu working");
        $.ajax({
            url: "https://immense-cliffs-93948.herokuapp.com/projects", 
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty().html("<h3>Projects</h3>").append(JSON.stringify(data));
        });        
    });

    $("#positions-menu").click(function(event){
        event.preventDefault();
        console.log("positions-menu working");
        $.ajax({
            url: "https://immense-cliffs-93948.herokuapp.com/positions", 
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            $("#data").empty().html("<h3>Positions</h3>").append(JSON.stringify(data));
        });        
    });


});