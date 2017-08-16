import React from 'react';
import PropTypes from 'prop-types';

class TvTitleBar extends React.Component {
    render() {
        return (
            <div className="articleTitle">
                <h2 className="title is-3">
                    {this.props.model}
                </h2>
            </div>
        );
    }
}

export default TvTitleBar;

TvTitleBar.proptypes = {
    title: PropTypes.string.isRequired
}; 