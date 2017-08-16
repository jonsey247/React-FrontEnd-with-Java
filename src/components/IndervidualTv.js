import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import TvTitleBar from './TvTitleBar';
import TvText from './TvText';

class IndervidualTv extends React.Component {

    componentDidMount() {
        this.props.fetchTvsByID(this.props.match.params.tv_id);
    }

    render() {
        return (
            <div className="columns">
                <div className="column is-three-quarters" id='IndervidualTv'>
                    <TvTitleBar
                        model={this.props.selectedTvs.tvModel}
                    />
                    <TvText 
                    wattage={this.props.selectedTvs.wattage}
                    />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTvsByID: (id) => {
            dispatch(actions.fetchTvsByID(id));
        }
    };
}

function MapStateToProps(state) {
    return {
        selectedTvs: state.selectedTvs,
        loading: state.loading
    };
}

IndervidualTv.proptypes = {
    selectedTvs: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired

};

export default connect(MapStateToProps, mapDispatchToProps)(IndervidualTv); 
