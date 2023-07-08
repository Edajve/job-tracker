const shortenVerbage = (text: string, lengthOfText: number, showEllipsis: boolean = true): string => {
    if (!text) return text;
    const stringg =  showEllipsis === true ? text.substring(0, lengthOfText) + "..." : text.substring(0, lengthOfText) 
    return stringg;
  };

export default shortenVerbage 