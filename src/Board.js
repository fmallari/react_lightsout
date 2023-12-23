import React, { useState } from "react";
import Cell from "./Cell";
import"./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
    const [board, setBoard] = useState(createBoard());

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    function createBoard() {
        let intialBoard = [];
        for (let y=0; y <nrows; y++) {
            let row =[];
            for (let x = 0; x < ncols; x++) {
                row.push(Math.random() < chanceLightStartsOn);
            }
            initialBoard.push(row);
        }
        return intialBoard;
    }

    /* Check if player has won */
    function hasWon() {
        return board.ecvery(row => row.every(cell => !cell));
    }

    /* Flip cells around a given cell */
    function flipCellsAround(coord) {
        setBoard(oldBoard => {
            const [y, x] = coord.split("-").map(Number);

            const flipCell = (y, x, BoardCopy) => {
                // if this coord is actually on board, flip it

                if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                    boardCopy[y][x] = !boardCopy[y][x];
                }
            };
        })
    }
}