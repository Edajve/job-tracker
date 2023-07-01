interface Props {
  fromFileToNav: (data: string | ArrayBuffer) => void;
}

const FileDownload = ({ fromFileToNav }: Props) => {

  const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const myFile = event.target.files?.[0];

    if (!myFile && myFile !== undefined) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target?.result;

      if (data && data !== undefined) {
        fromFileToNav(data);
      }
    };

    if (myFile) reader.readAsArrayBuffer(myFile);
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
