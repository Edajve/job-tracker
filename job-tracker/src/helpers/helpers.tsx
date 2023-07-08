import { ExcelShape } from "../App";

const shortenVerbage = (text: string, lengthOfText: number, showEllipsis: boolean = true): string => {
    if (!text) return text;
    const stringg =  showEllipsis === true ? text.substring(0, lengthOfText) + "..." : text.substring(0, lengthOfText) 
    return stringg;
  };

  const TableColumn =
["id",
"Site",
"Date Applied To",
"Company Name",
"Position",
"Full Time/Contract",
"Salary",
"Company Website",
"Contact Info",
"Call Back Date",
"Tech Stack",
"Round 1",
"Round 2",
"Round 3",
"Final",
"Notes"];

const objectToArray = (theObject: Object | ExcelShape): string[] | undefined[] => {
  if (!theObject) return [];
  const array = [];
  for (const [value] of Object.entries(theObject)) {
    array.push(value);
  }
  return array;
}

export default { shortenVerbage , objectToArray, TableColumn }