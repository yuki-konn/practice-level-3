import { output } from "../utils/output.js";

// Manual Color checks using property chaining
export function displayCheckedStatus(inputs = new HTMLFormElement()) {
  output("<hr>");
  output("<b><u>Manual Color Checks</u></b><br>");
  output(`redChecked: ${inputs[0].checked}<br>`);
  output(`greenChecked: ${inputs[1].checked}<br>`);
  output(`blueChecked: ${inputs[2].checked}<br>`);
  output(`whiteChecked: ${inputs[3].checked}<br>`);
}
