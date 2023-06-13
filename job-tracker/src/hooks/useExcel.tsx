import { read, utils, WorkSheet, WorkBook } from "xlsx";

export interface JobApplication {
  "Site:": string;
  "Date:": string;
  "Date applied to: ": string;
  "Company name:": string;
  "Position: ": string;
  "Fulltime/Contract": string;
  "Salary:": string;
  "Confirmation Site": string;
  "Contact info: ": string;
  "Call back date": string;
  "Tech Stack:": string;
  "Round 1:": string;
  "Round 2:": string;
  "Round 3:": string;
  "Final:": string;
  "Notes:": string;
}

export interface ExcelResponse {
  length: number;
  applications: {application:JobApplication}[]
}

const useExcel = (event: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
  return new Promise((resolve, reject) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook: WorkBook = read(data, { type: "array" });
        const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: JobApplication[] = utils.sheet_to_json(worksheet, {header: 1});
        console.log("returning data from useExcel():", jsonData)
        console.log("indexing into responsefromuseExcel():", jsonData[0]) //can index here
        resolve(jsonData);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    } else {
      reject([]);
    }
  });
};

export default useExcel;
