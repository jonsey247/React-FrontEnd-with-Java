import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchTvs();
    }

    render() {
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

function mapDispatchToProps(dispatch) {
    return {
        fetchTvs: () => {
            dispatch(actions.fetchTvs());
        }
    };
}

function MapStateToProps(state) {
    return {
        tvs: state.tvs,
        loading: state.loading

    }
}
export default connect(MapStateToProps, mapDispatchToProps)(Home); 