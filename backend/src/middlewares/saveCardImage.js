import path from "path";
import multer from "multer";


const storage = multer.diskStorage({
    destination: async function (req, file, cb) {

        const fileDestination = path.resolve(__dirname,
            `./../uploads/images`);

        cb(null, fileDestination);
    },
    filename: function (req, file, cb) {

        const extension = path.extname(file.originalname);
        const newFileName = `${ Date.now() }${ extension }`;
        cb(null, newFileName);
    },
});

export const saveCardImage = multer({
    storage,
}).single('image');