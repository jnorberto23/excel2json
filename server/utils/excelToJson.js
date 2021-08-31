import fs from 'fs';
import xlsx from "xlsx";

const excelToJson = (path) => {

    return new Promise((resolve, reject) => {

        const dataPathExcel = path;
        const wb = xlsx.readFile(dataPathExcel);
        const sheetName = wb.SheetNames[0]
        const sheetValue = wb.Sheets[sheetName];
        const excelData = xlsx.utils.sheet_to_json(sheetValue);
        fs.unlinkSync(path);

        if (!Object.keys(excelData).length == 0 ){
            resolve(excelData);
        }
           
        else{
            reject(`Aconteceu um erro inesperado ao converter o arquivo.`);
        }
    })

}
export default excelToJson;