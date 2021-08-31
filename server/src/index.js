import express from 'express';
import cors from 'cors';
import excelToJson from './utils/excelToJson.js';
import upload from './utils/multerConfig.js';

const app = express();

app.use(cors());
const port = process.env.PORT || 3000;

//*Upload Route*//

app.post('/upload/', upload.single('file'), async (req, res) => {
    if (res.status(200)) {
        excelToJson(req.file.path).then((data) =>{
            res.send({
                data
            });
        }).catch((error) => {
            res.send({
                error
            });
        })
    }
    else{
        res.send({
            error: "Ocorreu um erro ao realizar o upload do arquivo, tente novamente"
        });
    }
});

app.get('/', (req, res) => {
console.log("listening");
});

app.listen(port, () => {
    console.log(`app running on ${port}`);
})