import { output } from "../utils/output.js";

// Loop to display name property
export function displayCategories(inputs = new HTMLFormElement()) {
  output(
    "<br><b><u>All radio button Name properties</u></b><br>",
    "outputTag1"
  );

  for (let radioInput of inputs) output(`${radioInput.name}<br>`, "outputTag1");
}
