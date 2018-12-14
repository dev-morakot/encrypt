const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const AWS = require('aws-sdk');
const kms = new AWS.KMS();
const app = express();



// amazon web service with key management service
kms.config.update({
    region: 'us-east-2'
});
kms.config.apiVersion = {
    kms: "2012-10-17"
};
let params = {
    KeyId: "20b5b430-d2fb-4e48-89cc-0bf88840145f", // The identifier of the CMK to use for encryption. You can use the key ID or Amazon Resource Name (ARN) of the CMK, or the name or ARN of an alias that refers to the CMK.
    Plaintext: "morakot" // The data to encrypt.
};
kms.listKeys((err,data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log("data",data);           // successful response
});


// settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
};

// routes
app.use('/api', require('./backend/routes/aes_256.routes'));

//error hadler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

// starting the server
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})