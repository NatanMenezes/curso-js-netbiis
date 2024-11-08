import AppError from "../errors/AppError.js";

const ErrorHandler = (err, req, res, next) => {
    if(err instanceof AppError) {
        res.status(err.statusCode).send({message: err.message});
    } else {
        console.error(err);
        res.status(500).send({message: 'Internal server error'});
    }
};

export default ErrorHandler;