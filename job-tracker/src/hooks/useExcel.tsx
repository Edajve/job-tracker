import { read, utils, WorkSheet, WorkBook } from "xlsx";

const useExcel = (event: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
  return new Promise((resolve, reject) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook: WorkBook = read(data, { type: "array" });
        const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet);
        resolve(jsonData);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    } else {
      reject(new Error("No file selected."));
    }
  });
};

export default useExcel;
