/**
 * Created by peachteaboba on 03/08/19
 */

let aws = require('aws-sdk');
aws.config.update({
    "accessKeyId": process.env.ACCESS_KEY_ID,
    "secretAccessKey": process.env.SECRET_ACCESS_KEY,
    "region": process.env.REGION
});

module.exports = (function () {
    return aws;
})();