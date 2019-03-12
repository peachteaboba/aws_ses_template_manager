/**
 * Created by peachteaboba on 03/08/19
 */

app.controller('mainController', ["$scope", "$window", "mainFactory", "$rootScope", function ($scope, $window, mainFactory) {

    $scope.templates = [];
    $scope.last_updated = "-";
    $scope.flash_timestamp = false;
    $scope.error_message = "";
    $scope.currentTemplate = {};
    $scope.cta_btn_txt = "-";

    // List templates
    $scope.reload_list = function() {
        mainFactory.list_templates(function(response) {
            if (response.status === 200 && response.data) {
                // Display error ........................................
                // ......................................................
                if (response.data.statusCode === 403) {
                    $scope.error_message = response.data.message;
                    return;
                }
                // ......................................................
                // ......................................................
                $scope.templates = response.data.TemplatesMetadata;
                $scope.templates.forEach(function(template) {
                    template.timestamp = moment(template.CreatedTimestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");
                    template.timestamp_ago = moment(template.CreatedTimestamp).fromNow();
                });
                // Update timestamp
                const now = new Date();
                $scope.last_updated = moment(now).format("dddd, MMMM Do YYYY, h:mm:ss a");
                $scope.flash_timestamp = true;
                setTimeout(function() {
                    $scope.flash_timestamp = false;
                }, 1000);
            }
        });
    };
    $scope.reload_list();

    $scope.create = function() {
        let name = prompt("Enter Name (name cannot be changed once created): ", "");
        if (name && name.length > 0) {
            mainFactory.create_template(name, function(response) {
                if (response.status === 200 && response.data) {
                    $scope.reload_list();
                }
            });
        }
    };

    $scope.delete = function(name) {
        let conf = prompt("Type 'delete' to confirm: ", "");
        if (conf && conf === 'delete') {
            mainFactory.delete_template(name, function(response) {
                if (response.status === 200 && response.data) {
                    $scope.reload_list();
                }
            });
        }
    };

    $scope.edit = function() {
        mainFactory.update_template($scope.currentTemplate, function(response) {
            if (response.status === 200 && response.data) {
                $scope.cta_btn_txt = "Success";
                setTimeout(function() {
                    $scope.cta_btn_txt = "Update";
                    $scope.$apply();
                }, 2000);
            }
        });
    };

    $scope.get = function(name) {
        mainFactory.get_template(name, function(response) {
            if (response.status === 200 && response.data && response.data.Template) {
                $scope.currentTemplate = response.data.Template;
                $scope.cta_btn_txt = "Update";
            } else {
                alert("Failed to get template -> " + name);
            }
        });
    };

    $scope.update_text = function() {
        let clean = $scope.currentTemplate.HtmlPart;

        // Remove contents between style tag .............................
        // ...............................................................
        let cleanArr = [];
        let arr = $scope.currentTemplate.HtmlPart.split('<style ');
        if (arr.length > 1) {
            cleanArr.push(arr[0]);
            let tail = arr[1].split('</style>');
            if (tail.length > 1) {
                cleanArr.push(tail[1]);
            }
            clean = cleanArr[0] + cleanArr[1];
        }
        // ...............................................................
        // ...............................................................

        clean = clean.replace(/(<([^>]+)>)/ig,""); // Remove tags
        clean = clean.replace(/ +(?= )/g,''); // Remove extra whitesapce
        clean = clean.replace(/(\r\n|\n|\r)/gm, ""); // Remove line breaks
        clean = clean.trim(); // Trim whitespace

        $scope.currentTemplate.TextPart = clean;
        console.log($scope.currentTemplate);
    };


}]);













// end