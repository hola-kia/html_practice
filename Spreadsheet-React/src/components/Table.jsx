import React, { useState } from 'react';

import { columnName } from '../util/helpers';
import { Cell } from './Cell';

const Table = ({ columns, rows }) => {
    const [ selectedCell, setSelectedCell ] = useState(null);

    const cellClickHandler = (cellColumn, cellRow) => {
        if (cellColumn !== 0 && cellRow !== 0) {
            setSelectedCell({
                row: cellRow,
                column: cellColumn,
            });
        }
    };

    return (
        <div className="table">
            {
                new Array(columns).fill(0).map((_, columnIndex) => (
                    <div className="column" id={columnIndex === 0 ? 'numbers' : columnName(columnIndex)} key={columnIndex}>
                        {
                            new Array(rows).fill(0).map((_, rowIndex) => {
                                let cellContent;
                                if (columnIndex === 0 && rowIndex !== 0) {
                                    cellContent = rowIndex;
                                } else if (columnIndex !== 0 && rowIndex === 0) {
                                    cellContent = columnName(columnIndex);
                                }

                                return (
                                    <Cell
                                        content={cellContent}
                                        isSelected={selectedCell && selectedCell.column === columnIndex && selectedCell.row === rowIndex}
                                        onClick={() => cellClickHandler(columnIndex, rowIndex)}
                                    />
                                );
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
};

export {
    Table,
};
