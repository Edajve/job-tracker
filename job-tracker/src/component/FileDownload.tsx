interface Props {
  fromFileToNav: (data: string | ArrayBuffer) => void;
}

const FileDownload = ({ fromFileToNav }: Props) => {

  const onFileSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    if (!myFile && myFile !== undefined) return;

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const data = e.target?.result;
      if (data && data !== undefined) fromFileToNav(data)
    };

    if (myFile) fileReader.readAsArrayBuffer(myFile);
  };

  return (
    <>
      <label htmlFor="excel">Choose Excel Sheet:</label>
      <input
        onChange={(event) => onFileSubmit(event)}
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
