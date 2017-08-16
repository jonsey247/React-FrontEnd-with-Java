import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div className="columns">
                <div className="column is-three-quarters" id='Home'>
                    <h1>
                        {/* {this.props.tvs} */}
                        This is the home page
                    </h1>
                </div>
            </div>
        );
    }
}

export default Home; 