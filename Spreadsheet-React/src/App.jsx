import React, { useState } from 'react';

import logoIcon from './assets/images/icon-spreadsheet.svg';
import functionIcon from './assets/images/function.svg';
import { Table } from './components/Table';

import './styles/App.css';

const App = () => {
    const [ tableColumns, setTableColumns ] = useState(50);
    const [ tableRows, setTableRows ] = useState(50);

    return (
        <div className="pageContainer">
            <header>
                <div className="topHeader">
                    <div id="icon">
                        <img src={logoIcon} alt="logo" width="100" height="100"/>
                    </div>

                    <div id="title">
                        <input type="text" value="Untitled Spreadsheet"/>
                    </div>
                </div>

                <div className="bottomHeader" />

                <div className="mainTop">
                    <div id="fx">
                        <img src={functionIcon} alt="function icon" width="40" height="40" />
                    </div>

                    <div id="tableInput">
                        <input id="fxInput" type="text" value=""/>
                    </div>
                </div>
            </header>

            <main>
                <Table columns={tableColumns} rows={tableRows} />
            </main>
        </div>
    );
};

export {
    App,
};
