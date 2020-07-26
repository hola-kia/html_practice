import React from 'react';

const SimplifiedLayout = () => {
    return (
        <div className="pageContainer" style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
            <div className="headerPanel" style={{ height: '200px', flexShrink: 0 }} />
            <div className="contentPanel" style={{ flex: 1 }}>
                <div className="table" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="columnHeader" style={{ height: '30px' }} />
                    <div className="" style={{ flex: 1, height: 0, display: 'flex' }}>
                        <div className="rowHeader" style={{ width: '60px' }} />
                        <div className="cells" style={{ flex: 1 }}>
                            { new Array(200).fill(0).map(_ => (
                                <div>eqfwefqwe fqwef qwef qwef qwef qwef qwef</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    SimplifiedLayout,
};
