const columnName = (columnIndex) => {
    if (columnIndex <= 26) {
        return String.fromCharCode(columnIndex + 64);
    } else {
        const remainder = (columnIndex - 1) % 26 + 1;
        return columnName((columnIndex - remainder) / 26) + columnName(remainder);
    }
};

export {
    columnName,
};
