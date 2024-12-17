import { displayCategories } from "../modules/displayCategories.js";
import { displayCheckedDataType } from "../modules/displayCheckedDataType.js";
import { displayCheckedStatus } from "../modules/displayCheckedStatus.js";
import { displayCheckedValues } from "../modules/displayCheckedValues.js";
import { displayValues } from "../modules/displayValues.js";

window.handleSubmit = handleSubmit;

function handleSubmit(event = new Event()) {
  event.preventDefault();

  debugger;
  const inputs = event.target;
  displayCheckedStatus(inputs);
  displayCategories(inputs);
  displayValues(inputs);
  displayCheckedValues(inputs);
  displayCheckedDataType(inputs);
}
