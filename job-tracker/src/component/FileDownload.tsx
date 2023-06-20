import { useEffect, useState } from "react";
import XLSX from "xlsx";

interface Props {
  fromFileToNav: (data: any) => void;
}

const FileDownload = ({ fromFileToNav }: Props) => {
  const [sheetData, setSheetData] = useState<null | unknown>(null);

  useEffect(() => {
    if (sheetData !== null) {
      fromFileToNav(sheetData);
      //grab the data from excel, store that json in a var and stringify it
      const jsonString = JSON.stringify(sheetData);
      localStorage.setItem("excelDataInLocal", jsonString);
    }
  }, [sheetData]);

  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const readDataFromExcel = (
      data: string | ArrayBuffer | null | undefined
    ) => {
      if (data instanceof ArrayBuffer) {
        const workbook = XLSX.read(data, { type: "array" });
        let sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setSheetData(jsonData);
      }
    };

    const myFile = event.target.files?.[0];

    if (!myFile && myFile !== undefined) {
      return;
    } else {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = e.target?.result;
        readDataFromExcel(data);
      };
      if (myFile) {
        reader.readAsArrayBuffer(myFile);
      }
    }
  };
  return (
    <>
      <label htmlFor="excel">Choose Excel Sheet:</label>
      <input
        onChange={(event) => onSubmit(event)}
        type="file"
        id="excel"
        name="excel"
        accept=".xlsx, .xls"
        multiple={false}
      />
    </>
  );
};

export default FileDownload;
