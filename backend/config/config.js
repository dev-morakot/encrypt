module.exports = function (req, res, next) {

    res.sendApi = function (data, status = 200) {
        res.setHeader('content-type','application/json');
        res.status(status);
        res.json(data);
    };

    /**
     * ส่งค่าข้อมูลออกเป็น json พร้อม status
     * @param {Promise} promise
     */
    res.sendAsyncApi = function (promise) {
        promise
            .then(item => res.sendApi(item))
            .catch(error => res.sendApi(error, 400));
    };
    next();
};