import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads');
    },
    filename: (req, res, cb) => {
        cb(null, new Date().toDateString() + file.originalname);
    }
})

export const upload = multer({
    storage: storage,
})