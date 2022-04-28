import "./styles.css";

let convertBtn = document.querySelector("#convert-btn");
let outputTxt = document.querySelector("#output-text");
let copyTxtBtn = document.querySelector("#copy-txt");

// convert text
convertBtn.addEventListener("click", function () {
  let inputTxt = document.querySelector("#input-text").value.toLowerCase();
  let textOptions = document.getElementById("text-options").selectedIndex;
  let textOptionsValue = document.getElementsByTagName("option")[textOptions]
    .value;

  if (textOptionsValue === "upper") {
    outputTxt.classList.remove(...outputTxt.classList);
    outputTxt.classList.add("upper-text");
    outputTxt.value = inputTxt;
  } else if (textOptionsValue === "lower") {
    outputTxt.classList.remove(...outputTxt.classList);
    outputTxt.classList.add("lower-text");
    outputTxt.value = inputTxt;
  } else if (textOptionsValue === "sentence") {
    outputTxt.classList.remove(...outputTxt.classList);
    outputTxt.classList.add("sentence-text");
    outputTxt.value = inputTxt;
  }
});

// copy to clipboard
copyTxtBtn.addEventListener("click", function () {
  outputTxt.select();
  outputTxt.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert(`copied: ${outputTxt.value}`);
});
