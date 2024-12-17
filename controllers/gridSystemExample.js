import { Column } from "../utils/Column.js";
import { GridContainer } from "../utils/GridContainer.js";
import { output } from "../utils/output.js";
import { Row } from "../utils/Row.js";

window.gridSystemExample = gridSystem;
window.gridSystemLoopExample = gridSystemLoop;

export function gridSystem() {
  debugger;

  // Manual Grid System
  const column = new Column("COLUMN 1");
  const column2 = new Column("COLUMN 2");
  const column3 = new Column("COLUMN 3");

  const row = new Row();
  row.addColumn(column);
  row.addColumn(column2);
  row.addColumn(column3);

  const container = new GridContainer();
  container.addRow(row);
  output(container);
}

export function gridSystemLoop() {
  debugger;

  // LOOP TO MAKE 3 ROWS WITH 3 COLUMNS EACH
  const container = new GridContainer();
  for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
    const row = new Row();
    for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
      const column = new Column(`COLUMN ${columnNumber}`);
      row.addColumn(column);
    }

    container.addRow(row);
  }

  output(container, "outputTag1");
}
