/*********************************************************************************
*  WEB422 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Sang Jun Pakr Student ID: 112293170 Date: 2018-09-28
*
*
********************************************************************************/ 

$(function(){
    let employeesModel = [];

    initializeEmployeesModel();

    $('#employee-search').on('keyup', function () {
        let search = $('#employee-search').val();
        let result = getFilteredEmployeesModel(search);
        refreshEmployeeRows(result);
    });

    $('.bootstrap-header-table').on('click', '.body-row', function () {
        let dataId = $(this).attr("data-id");
        let employeeId = getEmployeeModelById(dataId);
        let date = moment(employeeId.HireDate);
        date.utc();

        let dateFormat = date.format('LL');
        employeeId.HireDate = dateFormat;
        let dateTemp = _.template(
            '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %> <%- employee.AddressState %> <%- employee.AddressZip %><br>' +
            '<strong>Phone Number:</strong> <%-employee.PhoneNum %> ext: <%-employee.Extension %><br>' +
            '<strong>Hire Date:</strong> <%- employee.HireDate %>');

        let employeeTmp = dateTemp({ 'employee': employeeId });
        $("#genericModal").modal();
        $(".modal-title").empty();
        $(".modal-body").empty();

        showGenericModel(employeeId.FirstName + " " + employeeId.LastName, employeeTmp); 
    });

    function initializeEmployeesModel() {
        $.ajax({
            url: 'https://immense-cliffs-93948.herokuapp.com/employees',
            type: 'GET',
            contentType: 'application/json'
        }).done(function (employees) {
            employeesModel = employees;
            refreshEmployeeRows(employeesModel);
        }).fail(function (err) {
            showGenericModel('Error', 'Unable to get Employees');
        });
     };

     function showGenericModel(title, message) {
        $('.modal-title').html(title);
        $('.modal-body').html(message);
        $('#genericModal').modal({ show: 'false' });
     };

     function refreshEmployeeRows(employees) {
        let employeesTemp = _.template('<% _.forEach(employees, function(employee) { %>'
             + '<div class="row body-row" data-id="<%- employee._id %>">'
             + '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>'
             + '<div class="col-xs-4 body-column"><%- employee.LastName %></div>'
             + '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>'
             + '</div>'
             + '<% }); %>');
 
        let employeeArray = employeesTemp({ 'employees' : employees });
        let employeeTable = $("#employees-table");
        employeeTable.empty();
        employeeTable.append(employeeArray);
     };

     function getFilteredEmployeesModel(filterString) {
         var search = new RegExp(filterString.toUpperCase());
         let employeeFilter = _.filter(employeesModel, function(employees){
             var employeefName = employees.FirstName.toUpperCase();
             var employeelName = employees.LastName.toUpperCase();
             var employeePosition = employees.Position.PositionName.toUpperCase();
             
             if ((employeefName.search(search) > -1) || (employeelName.search(search) > -1) || (employeePosition.search(search) > -1)) {
                return true;
            } else {
                return false;
            }
        });
        return employeeFilter;
    };

    function getEmployeeModelById(id){
        let employeeFind = _.find(employeesModel, function(employees){
            if(employees._id == id){
                let clone = _.cloneDeep(employees);
                return clone
            } else {
                return null;
            }
        });
        return employeeFind;
    }

})