import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-three-quarters" id='table'>
                    <h1>
                        {/* {this.props.tvs} */}
                        This is a table
                    </h1>
                </div>
            </div>
        );
    }
}

export default Table;