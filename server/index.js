import express from 'express';
import cors from 'cors';
import formidable from 'formidable';
import xlsx from "xlsx";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const transform = (file) => {

    return new Promise((resolve, reject) => {
        const dataPathExcel = file.path;

        var workbook = xlsx.readFile(dataPathExcel);
        const sheetName = workbook.SheetNames[0]
        const sheetValue = workbook.Sheets[sheetName];
        
        const excelData = xlsx.utils.sheet_to_json(sheetValue);

        if (!Object.keys(excelData).length == 0 ) {
            resolve([excelData, sheetName]);
        }
        else {
            reject("Ocorreu um pequenino erro ali, ja volto");
        }
    });
}

app.post('/upload/', (req, res) => {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
           files = files[Object.keys(files)[0]];
           transform(files).then(([data, sheet]) => {
               res.send({ [sheet] : data });
           }).catch((err) => {
               res.send(err);
           });
       })   
});

app.listen(port, () => {
    console.log(`app running on ${port}`);
})