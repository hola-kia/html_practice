import React, { useRef, useState } from 'react';

import { columnName } from '../util/helpers';
import { Cell } from './Cell';

import '../styles/Table.css';

const Table = ({ columnCount, rowCount }) => {
    const columnHeaderRef = useRef(null);
    const rowHeaderRef = useRef(null);

    const [ selectedCell, setSelectedCell ] = useState(null);
    const [ selectedColumn, setSelectedColumn ] = useState(null);
    const [ selectedRow, setSelectedRow ] = useState(null);

    // Cell click handler
    const onCellClick = (columnIndex, rowIndex) => () => {
        setSelectedCell({ row: rowIndex, column: columnIndex });
        setSelectedColumn(null);
        setSelectedRow(null);
    };

    // Header click handlers
    const onColumnHeaderClick = columnIndex => () => {
        // TODO: Fill code here
    };
    const onRowHeaderClick = rowIndex => () => {
        // TODO: Fill code here
    };
    const onCornerCellClick = () => {
        // TODO: Fill code here
    };

    // Scroll handlers
    const onBodyScroll = event => {
        if (columnHeaderRef.current) {
            columnHeaderRef.current.scrollLeft = event.currentTarget.scrollLeft;
        }
        if (rowHeaderRef.current) {
            rowHeaderRef.current.scrollTop = event.currentTarget.scrollTop;
        }
    };

    return (
        <div className="table">
            <Cell isHeader onClick={onCornerCellClick} />
            <div className="columnHeader" ref={columnHeaderRef}>
                { new Array(columnCount).fill(0).map((_, columnIndex) => (
                    <Cell
                        isHeader
                        content={columnName(columnIndex + 1)}
                        // TODO: Fill code here
                        onClick={onColumnHeaderClick(columnIndex + 1)}
                        format={{ dimensions: { width: 100 } }}
                        key={columnIndex + 1}
                    />
                ))}
            </div>
            <div className="rowHeader" ref={rowHeaderRef}>
                { new Array(rowCount).fill(0).map((_, rowIndex) => (
                    <Cell
                        isHeader
                        content={rowIndex + 1}
                        // TODO: Fill code here
                        onClick={onRowHeaderClick(rowIndex + 1)}
                        format={{ dimensions: { height: 30 } }}
                        key={rowIndex + 1}
                    />
                ))}
            </div>
            <div
                className="tableBody"
                onScroll={onBodyScroll}
                style={{
                    gridTemplateColumns: `repeat(${columnCount}, auto)`,
                    gridTemplateRows: `repeat(${rowCount}, auto)`,
                }}
            >
                { new Array(rowCount).fill(0).map((_, rowIndex) => (
                    new Array(columnCount).fill(0).map((_, columnIndex) => (
                        <Cell
                            isSelected={
                                selectedCell
                                && selectedCell.column === columnIndex + 1
                                && selectedCell.row === rowIndex + 1
                                // TODO: Fill code here
                            }
                            onClick={onCellClick(columnIndex + 1, rowIndex + 1)}
                            format={{ dimensions: { width: 100, height: 30 } }}
                            key={`cell_${columnName(columnIndex + 1)}${rowIndex + 1}`}
                        />
                    ))
                ))}
            </div>
        </div>
    );
};

export {
    Table,
};
