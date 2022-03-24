export const getStrippedText = (text, stripLength) => {
  return text.length > stripLength
    ? `${text.substring(0, stripLength)}...`
    : text;
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
