import { read } from "xlsx";

const FileDownload = () => {
  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = read(data, { type: "array" });
        console.log(workbook);
      };
      reader.readAsArrayBuffer(file);
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
        accept=".xlsx"
      />
    </>
  );
};

export default FileDownload;
