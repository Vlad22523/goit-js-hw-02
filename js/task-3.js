let getElementWidth = (content, padding, border) => {
  return parseFloat(content) + 2 * parseFloat(padding) + 2 * parseFloat(border);
};
console.log(getElementWidth('60px', '12px', '8.5px'));
