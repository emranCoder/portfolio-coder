const createHttpError = require("http-errors");



//404 not found

const notFound = (req, res, next) => {
    next(createHttpError(404, "Ops! Server Is down....."));

}


const errorHandler = (err, req, res, next) => {
    res.locals.error = process.env.NODE_ENV == "DEVELOPMENT" ? err.message : { message: err.message };

    res.status(err.status || 500).json(res.locals.error);
}

module.exports = { notFound, errorHandler };