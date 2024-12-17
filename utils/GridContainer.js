import { Row } from "./Row.js";

// basically grid system
export class GridContainer {
  openingTag = "<div class='container'>";
  closingTag = "</div>";
  innerHTML = "";

  addRow(row = new Row()) {
    this.innerHTML += row;
  }

  toString() {
    return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
  }
}
