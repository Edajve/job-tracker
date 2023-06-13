import useExcel from "../hooks/useExcel";

const FileDownload = () => {
  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    useExcel(event)
    .then((jsonData: any) => {
      console.log(jsonData);
    })
    .catch((error: Error) => {
      console.error("Error reading file:", error);
    });
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
