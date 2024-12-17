import { output } from "../utils/output.js";

// Loop to display only checked data types
export function displayCheckedDataType(inputs = new HTMLFormElement()) {
  output("<br><b><u>Checked Data Type</u></b><br>", "outputTag4");
  for (let radioInput of inputs) {
    const value = radioInput.value;
    const name = radioInput.name;

    const isChecked = radioInput.checked;
    const isDataType = name === "dataType";

    if (isChecked && isDataType) output(`${value}<br>`, "outputTag4");
  }
}
