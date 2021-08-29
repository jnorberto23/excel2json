import express from 'express';
import cors from 'cors';
import multer from 'multer';
import excelToJson from './excelToJson.js';

const app = express();

app.use(cors());
const port = process.env.PORT || 4000;

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

//*Upload Route*//

app.post('/upload/', upload.single('file'), async (req, res) => {
    
    console.log("files received");

    if (res.status(200)) {
        excelToJson(req.file.path, (rest) => {
            const data = JSON.stringify(rest);
            res.send({
                data
            })
        })
    }
});

app.get("/api", (req, res) => {
    res.send("ola");
})

app.get("/", (req, res) => {
    res.send("funcionando");
})

app.listen(port, () => {
    console.log("app running on port 8080");
})