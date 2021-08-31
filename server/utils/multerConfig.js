import multer from 'multer';

//*Multer Config*// 

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.xlsx');
    }
});

var upload = multer({ storage: storage });

export default upload;

