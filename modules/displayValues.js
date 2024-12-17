import { output } from "../utils/output.js";

// Loop to display value property
export function displayValues(inputs = new HTMLFormElement()) {
  output(
    "<br><b><u>All radio button Value properties</u></b><br>",
    "outputTag2"
  );

  for (let radioInput of inputs) {
    const value = radioInput.value;
    output(`${value}<br>`, "outputTag2");
  }
}
