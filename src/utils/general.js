export const getStrippedText = (text, stripLength) => {
    return text.length > stripLength
      ? `${text.substring(0, stripLength)}...`
      : text;
  };