import React from 'react';
import { connect } from 'react-redux';
import TvCard from './TvCard';
import * as actions from '../actions/actions';

class Tvs extends React.Component {

    componentDidMount () {
        this.props.fetchTvs();
    }
    render () {
        return (
            <div className="columns">
                <div className="column is-three-quarters" id='Tvs'>
                    <h1>
                        This is ALLLLL the Tvs page
                        {this.props.tvs.map((tv) => <TvCard
                            model={tv.tvModel}
                            key={tv.tvId}
                            wattge={tv.wattage}
                            tv_id={tv.tvId}
                        />)}
                    </h1>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchTvs: () => {
            dispatch(actions.fetchTvs());
        }
    };
}

function MapStateToProps (state) {
    return {
        tvs: state.tvs,
        loading: state.loading

    };
}
export default connect(MapStateToProps, mapDispatchToProps)(Tvs); 