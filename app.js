const AWS = require('aws-sdk');
const kms = new AWS.KMS({region: "us-east-1"});


kms.config.update({
    region: 'us-east-1'
});
kms.config.apiVersion = {
    kms: "2012-10-17"
};

kms.listKeys((err,data) => {
    if (err) console.log(err); // an error occurred
    else     console.log("data",data);           // successful response
});