import ExcelShape from "../types/Excel";

export interface Helpers {
  shortenVerbage: (text: string, lengthOfText: number, showEllipsis?: boolean) => string;
  objectToArray: (theObject: Object | ExcelShape, key?: boolean) => string[];
  singleApplicationDetials: string[];
  transformToDBColumnName: (dropDownValue: string) => string;
}

const shortenVerbage = (
  text: string,
  lengthOfText: number,
  showEllipsis: boolean = true
): string => {
  if (!text) return text;
  const stringg =
    showEllipsis === true
      ? text.substring(0, lengthOfText) + "..."
      : text.substring(0, lengthOfText);
  return stringg;
};

const singleApplicationDetials = [
  "Position",
  "Salary",
  "Date",
  "Date Applied To",
  "Full Time/Contract",
  "Company Website",
  "Contact Info",
  "Call Back Date",
  "Tech Stack",
  "Round 1",
  "Round 2",
  "Round 3",
  "Final",
  "Notes",
];

const objectToArray = (
  theObject: Object | ExcelShape,
  key: boolean = false
): string[] => {
  if (!theObject) return [];
  const array = [];

  if (key === true) {
    for (const [key] of Object.entries(theObject)) {
      array.push(key);
    }
  } else {
    for (const [value] of Object.entries(theObject)) {
      array.push(value);
    }
  }
  return array;
};

const transformToDBColumnName = (dropDownValue: string): string => {
  return dropDownValue
}
const helpers: Helpers = {
  shortenVerbage,
  objectToArray,
  singleApplicationDetials,
  transformToDBColumnName,
};
export default helpers;
