import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.name + '-' + Date.now());
    }
});

export const saveCardImages = multer({
    storage,
}).array('images', 5);