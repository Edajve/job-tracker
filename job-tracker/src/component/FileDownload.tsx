import { useEffect, useState } from "react";
import useExcel, { ExcelResponse } from "../hooks/useExcel";

interface Props {
  passUpExcel: (data: ExcelResponse) => void;
}

const FileDownload = ({ passUpExcel }: Props) => {
  const [excel, setExcel] = useState<ExcelResponse | null>(null);

  useEffect(() => {
    if (excel !== null){
      console.log("passing up state from <FileDownload />: ", excel)
      passUpExcel(excel)
    }
  }, [excel])

  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    useExcel(event)
      .then((jsonData: ExcelResponse) => {
        setExcel(jsonData);
        excel ? setExcel(excel) : null
      })
      .catch((error: Error) => console.error("Error reading file:", error));
  };

  return (
    <>
      <label htmlFor="excel">Choose Excel Sheet:</label>
      <input
        onChange={(event) => onSubmit(event)}
        type="file"
        id="excel"
        name="excel"
        accept=".xlsx"
      />
    </>
  );
};

export default FileDownload;
