import XLSX from "xlsx";

const readDataFromExcel = (data: string | ArrayBuffer | null | undefined) => {
  if (data instanceof ArrayBuffer) {
    const workbook = XLSX.read(data, { type: "array" });
    let sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData;
  }
};

export default readDataFromExcel;
