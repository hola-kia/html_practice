import React from 'react';

import logo from './assets/images/icon-spreadsheet.svg';
import functionIcon from './assets/images/function.svg';
import { Table } from './components/Table';

import './styles/App.css';

const App = () => {
    // TODO: Fill code here (for editable title)

    return (
        <div id="pageContainer">
            <div id="headerPanel">
                <img id="logo" src={logo} alt="logo" />
                <input id="titleInput" type="text" value="Untitled Spreadsheet" />
            </div>
            <div id="controlPanel">
                <div id="cellControls" />
                <div id="fxControls">
                    <img id="fxIcon" src={functionIcon} alt="function icon" />
                    <input id="fxInput" type="text" value="" />
                </div>
            </div>
            <div id="contentPanel">
                <Table columnCount={50} rowCount={50} />
            </div>
        </div>
    );
};

export {
    App,
};
