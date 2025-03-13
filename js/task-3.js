const getElementWidth = function(content, padding, border) {
    const contentNum = parseFloat(content);
    const paddingNum = parseFloat(padding);
    const borderNum = parseFloat(border);

    
    const borderBox = borderNum * 2;
    const borderSize = paddingNum * 2;
    const wordSize = contentNum + borderBox + borderSize;
     return wordSize;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
