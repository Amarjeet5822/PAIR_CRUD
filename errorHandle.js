const errorHandle = (err, req, res, next) => {

    const status = err.status || 500;
    const message = "BACKEND ERROR" || err.message;
    const success = false;

    res.status(500).json({ status, message, success });

}

module.exports = errorHandle;