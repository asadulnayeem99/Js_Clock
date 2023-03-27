const selectFontSize = document.getElementById("SelectFontSize");
const SelectBgColor = document.getElementById("SelectBgColor");
const resetBtn = document.getElementById("reset");
const mainElement = document.querySelector("main");
// change font Size
const changeFontSize = (event) => {
  mainElement.style.fontSize = event.target.value;
};
const changeBgColor = (event) => {
  mainElement.style.backgroundColor = event.target.value;
};

// add event listner
selectFontSize.addEventListener("change", changeFontSize);
SelectBgColor.addEventListener("change", changeBgColor);
