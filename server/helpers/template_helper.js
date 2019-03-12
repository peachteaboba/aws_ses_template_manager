/**
 * Created by peachteaboba on 03/08/19
 */

// Require resources
const AWS = require('../config/aws');
const SES = new AWS.SES({apiVersion: '2010-12-01'});

// Define public methods
module.exports = (function () {
    const th = {};

    th.list_templates = function (req, res) {
        const templatePromise = SES.listTemplates({MaxItems: 100}).promise();
        templatePromise.then(
            function (data) {
                res.json(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
                res.json(err);
            });
    };

    th.get_template = function (req, res) {
        const templatePromise = SES.getTemplate({TemplateName: req.body.name}).promise();
        templatePromise.then(
            function (data) {
                res.json(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
                res.json(err);
            });
    };

    th.delete_template = function (req, res) {
        const templatePromise = SES.deleteTemplate({TemplateName: req.body.name}).promise();
        templatePromise.then(
            function (data) {
                res.json(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
                res.json(err);
            });
    };

    th.create_template = function (req, res) {
        const params = {
            Template: {
                TemplateName: req.body.name,
                HtmlPart: '<p>Hello World</p>',
                SubjectPart: 'Hello World',
                TextPart: 'Hello World'
            }
        };
        const templatePromise = SES.createTemplate(params).promise();
        templatePromise.then(
            function (data) {
                res.json(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
                res.json(err);
            });
    };

    th.update_template = function (req, res) {
        const templatePromise = SES.updateTemplate(req.body).promise();
        templatePromise.then(
            function (data) {
                res.json(data);
            }).catch(
            function (err) {
                console.error(err, err.stack);
                res.json(err);
            });
    };







    return th;
})();