/**
 * Created by peachteaboba on 03/08/19
 */

app.factory('mainFactory', function ($http) {
    let factory = {};

    factory.list_templates = function(callback) {
        $http.get('/list_templates').then(function(response) {
            callback(response);
        })
    };

    factory.get_template = function(name, callback) {
        $http.post('/get_template', {name: name}).then(function(response) {
            callback(response);
        })
    };

    factory.delete_template = function(name, callback) {
        $http.post('/delete_template', {name: name}).then(function(response) {
            callback(response);
        })
    };

    factory.create_template = function(name, callback) {
        $http.post('/create_template', {name: name}).then(function(response) {
            callback(response);
        })
    };

    factory.update_template = function(template, callback) {
        $http.post('/update_template', {Template: template}).then(function(response) {
            callback(response);
        })
    };

    return factory;
});