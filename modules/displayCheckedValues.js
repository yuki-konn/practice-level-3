import { output } from "../utils/output.js";

// Loop to display only checked radio buttons
export function displayCheckedValues(inputs = new HTMLFormElement()) {
  output("<br><b><u>Checked Radio Buttons</u></b><br>", "outputTag3");
  for (let radioInput of inputs) {
    const value = radioInput.value;
    const isChecked = radioInput.checked;
    if (isChecked) output(`${value}<br>`, "outputTag3");
  }
}
