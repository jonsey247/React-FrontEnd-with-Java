import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class NewTv extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render () {
        return (
            <div className="box">
                <h3>Add a new TV:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input id="tvModel-input" className="input" type="text" placeholder="tvModel" />
                    <input id="wattage-input" className="input" type="number" placeholder="wattage" />
                    <button className="button is-primary button is-small">
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit (event) {
        event.preventDefault();
        let tvModelValue = event.target[0].value;
        let wattageValue = event.target[1].value;

        let tvToSave = {
            tvModel: tvModelValue,
            wattage: wattageValue
        };
        this.props.postnewTv(tvToSave);
    }
}

function mapDispatchToProps (dispatch) {
    return {
        postnewTv: function (newTv) {
            dispatch(actions.addTv(newTv));
        }
    };
}

function mapStateToProps (state) {
    return {
        tvModel: state.tvModel,
        wattage: state.wattage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTv);