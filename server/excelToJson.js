import fs from 'fs';
import xlsx from "xlsx";

const excelToJson = (path, callback) => {

    const dataPathExcel = path;
    const wb = xlsx.readFile(dataPathExcel);
    const sheetName = wb.SheetNames[0]
    const sheetValue = wb.Sheets[sheetName];
    const excelData = xlsx.utils.sheet_to_json(sheetValue);
    
    fs.unlinkSync(path);
    return callback(excelData);
}
export default excelToJson; 