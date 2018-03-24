var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('employees');

var service = {};

//service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.employees.find().toArray(function (err, employees) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return employees (without hashed passwords)
        employees = _.map(employees, function (employee) {
            return _.omit(employee, 'hash');
        });

        deferred.resolve(employees);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.employees.findById(_id, function (err, employee) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (employee) {
            // return employee (without hashed password)
            deferred.resolve(_.omit(employee, 'hash'));
        } else {
            // employee not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(employeeParam) {
    var deferred =
        Q.defer();

    // validation
    db.employees.findOne(
        { name: employeeParam.name },
        function (err, employee) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (employee) {
                // employeename already exists
                deferred.reject('EmployeeName "' + employeeParam.name + '" is already taken');
            } else {
                createEmployee();
            }
        });

    function createEmployee() {
        // set employee object to employeeParam without the cleartext password
        //var employee = _.omit(employeeParam, 'password');
         var employee=employeeParam;
        // add hashed password to employee object
        //employee.hash = bcrypt.hashSync(employeeParam.password, 10);

        db.employees.insert(
            employee,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, employeeParam) {
    var deferred = Q.defer();

    // validation
    db.employees.findById(_id, function (err, employee) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (employee.name !== employeeParam.name) {
            // employeename has changed so check if the new employeename is already taken
            db.employees.findOne(
                { name: employeeParam.name },
                function (err, employee) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (employee) {
                        // employeename already exists
                        deferred.reject('EmployeeName "' + req.body.name + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            "name":employeeParam.name,
            "address":employeeParam.address,
            "designation":employeeParam.designation,
            "dob":employeeParam.dob,
            "status":employeeParam.status,
            "doj":employeeParam.doj,
            "payscale":employeeParam.payscale,
            "branch":employeeParam.branch,
            "phone":employeeParam.phone
        };

        db.employees.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.employees.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}