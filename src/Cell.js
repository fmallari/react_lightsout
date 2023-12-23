import React from "react";
import "./Cell.css";

/** A single cell on the board
 * 
 * Has no state, just two props: 
 * 
 * flipCellsAroundMe: a function that lights up cell and cells around it
 * 
 * isLit: boolean, is this cell lit? 
 * 
 * Handles clicks by calling flipCellsAroundMe
 */

function Cell({ flipCellsAroundMe, isLit=false }) {
    const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
    return <td className={classes} onClick={flipCellsAroundMe} role="button" />;
}

export default Cell;