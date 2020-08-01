import React from 'react';

const Cell = ({ content, isSelected, onClick }) => {
    let cellClass = 'cell';
    if (isSelected) {
        cellClass += ' selectedCell';
    }

    return (
        <div className={cellClass} onClick={onClick}>
            {content}
        </div>
    );
};

export {
    Cell,
};
