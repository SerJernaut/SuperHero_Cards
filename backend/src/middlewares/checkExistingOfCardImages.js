import {ApplicationError} from "../utils/errors";

const checkExistingOfCardImages = (req, res, next) => {
    if (Array.isArray(req.files) && req.files.length > 0) {
        req.body.cardImages = req.files.map(file=> file.fileName);
        return next();
    }
    next(new ApplicationError('Need card images to create card'))
}

export default checkExistingOfCardImages;