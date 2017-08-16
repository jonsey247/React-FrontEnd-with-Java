import React from 'react';

class Lamp extends React.Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-three-quarters" id='Lamp'>
                    <h1>
                        {/* {this.props.tvs} */}
                        I love Lamp
                    </h1>
                </div>
            </div>
        );
    }
}

export default Lamp;