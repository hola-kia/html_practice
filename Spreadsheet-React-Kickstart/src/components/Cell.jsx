import classNames from 'classnames';
import React from 'react';

import '../styles/Cell.css';

const DEFAULT_FORMAT = {};

const Cell = ({ content, onClick, isHeader = false, isSelected = false, format = DEFAULT_FORMAT }) => {
    const cellClass = classNames(
        'cell',
        isHeader && 'header',
        isSelected && 'selected',
    );

    const cellWidth = format.dimensions && format.dimensions.width;
    const cellHeight = format.dimensions && format.dimensions.height;

    return (
        <div
            className={cellClass}
            onClick={onClick}
            style={{
                width: cellWidth ? `${cellWidth}px` : '100%',
                height: cellHeight ? `${cellHeight}px` : '100%',
            }}
        >
            {content}
        </div>
    );
};

export {
    Cell,
};
