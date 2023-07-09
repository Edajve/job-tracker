import ExcelShape from "../types/Excel";

export interface Helpers {
  shortenVerbage: (
    text: string,
    lengthOfText: number,
    showEllipsis?: boolean
  ) => string;
  objectToArray: (theObject: Object | ExcelShape, key?: boolean) => string[];
  singleApplicationDetials: string[];
  matchToDbName: (dropDownValue: string) => string;
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
  returnKeyPropertyOfObject: boolean = false
): string[] => {
  if (!theObject) return [];
  const array: string[] = [];

  returnKeyPropertyOfObject === true
    ? Object.entries(theObject).forEach(([key]) => array.push(key))
    : Object.entries(theObject).forEach(([value]) => array.push(value));

  return array;
};

const matchToDbName = (dropDownValue: string): string => {
  const returningString = [];
  if (dropDownValue === "Full-Time" || dropDownValue === "Part-Time")
    return "fulltime_contract";
  for (let index = 0; index < dropDownValue.length; index++) {
    const currentChar = dropDownValue.charAt(index);
    currentChar === " " || currentChar === "-"
      ? returningString.push("_")
      : returningString.push(currentChar);
  }
  return returningString.join("");
};

const helpers: Helpers = {
  shortenVerbage,
  objectToArray,
  singleApplicationDetials,
  matchToDbName,
};
export default helpers;
