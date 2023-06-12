import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";

const FileDownload = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="excel">Choose Excel Sheet:</label>
      <input
        {...register("excel")}
        type="file"
        id="excel"
        name="excel"
        accept=".xlsx"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FileDownload;
