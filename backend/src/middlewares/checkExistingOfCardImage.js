import {ApplicationError} from "../utils/errors";

export const checkExistingOfCardImage = (req, res, next) => {
    if (req.file) {
        req.body.image = req.file.filename;
        return next();
    }
    next(new ApplicationError('Need cardImage to create card'))
}