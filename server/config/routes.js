/**
 * Created by peachteaboba on 03/08/19
 */

// Require resources
const template_helper = require('../helpers/template_helper');

// Define routes
module.exports = function (app, path) {

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * *  Server Routes  * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    app.get('/list_templates', function (req, res) {
        template_helper.list_templates(req, res);
    });

    app.post('/get_template', function (req, res) {
        template_helper.get_template(req, res);
    });

    app.post('/delete_template', function (req, res) {
        template_helper.delete_template(req, res);
    });

    app.post('/create_template', function (req, res) {
        template_helper.create_template(req, res);
    });

    app.post('/update_template', function (req, res) {
        template_helper.update_template(req, res);
    });


    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * *   Web Routes  * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    app.get('*', function (req, res) {
        res.set('Content-Encoding', 'gzip');
        res.sendFile(path.resolve('client/index.html'));
    });

};