import React from 'react';


class TvText extends React.Component {
    render() {
        return (
            <div className="articleTitle">
            <p>Wattage: {this.props.wattage}</p>
            </div>
        );
    }
}

export default TvText;
