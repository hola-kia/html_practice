import React, { useRef, useState } from 'react';

import { columnName } from '../util/helpers';
import { Cell } from './Cell';

import '../styles/Table.css';

const Table = ({ columnCount, rowCount }) => {
    const columnHeaderRef = useRef(null);
    const rowHeaderRef = useRef(null);

    const [ selectedCell, setSelectedCell ] = useState({ column: -1, row: -1 });
    const [ selectedColumn, setSelectedColumn ] = useState(-1);
    const [ selectedRow, setSelectedRow ] = useState(-1);

    // Cell click handler
    const onCellClick = (columnIndex, rowIndex) => () => {
        setSelectedCell({ column: columnIndex, row: rowIndex });
        setSelectedColumn(-1);
        setSelectedRow(-1);
    };

    // Header click handlers
    const onColumnHeaderClick = columnIndex => () => {
        setSelectedCell({ column: -1, row: -1 });
        setSelectedColumn(columnIndex);
        setSelectedRow(-1);
    };
    const onRowHeaderClick = rowIndex => () => {
        setSelectedCell({ column: -1, row: -1 });
        setSelectedColumn(-1);
        setSelectedRow(rowIndex);
    };
    const onCornerCellClick = () => {
        setSelectedCell({ column: -1, row: -1 });
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

    let selectedLabel = '';
    if (selectedCell.column > 0 && selectedCell.row > 0) {
        selectedLabel = `${columnName(selectedCell.column)}${selectedCell.row}`;
    } else if (selectedColumn > 0) {
        selectedLabel = `Col ${columnName(selectedColumn)}`;
    } else if (selectedRow > 0) {
        selectedLabel = `Row ${selectedRow}`;
    }

    return (
        <div className="table">
            <Cell isHeader onClick={onCornerCellClick} content={selectedLabel} />
            <div className="columnHeader" ref={columnHeaderRef}>
                { new Array(columnCount).fill(0).map((_, columnIndex) => (
                    <Cell
                        isHeader
                        content={columnName(columnIndex + 1)}
                        isSelected={
                            selectedCell.column === columnIndex + 1
                            || selectedColumn === columnIndex + 1
                        }
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
                        isSelected={
                            selectedCell.row === rowIndex + 1
                            || selectedRow === rowIndex + 1
                        }
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
                                (
                                    selectedCell.column === columnIndex + 1
                                    && selectedCell.row === rowIndex + 1
                                )
                                || selectedColumn === columnIndex + 1
                                || selectedRow === rowIndex + 1
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
