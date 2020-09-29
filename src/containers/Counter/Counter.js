import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as types from '../../store/actions';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounterByFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounterByFive}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return (<li
                                    onClick={() => this.props.onDeleteResult(result.id)}
                                    key={result.id}
                                >
                                    {result.value}
                                </li>);
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: types.INCREMENT}),
        onDecrementCounter: () => dispatch({type: types.DECREMENT}),
        onAddCounterByFive: () => dispatch({type: types.ADD_FIVE, value: 5}),
        onSubtractCounterByFive: () => dispatch({type: types.SUBTRACT_FIVE, value: 5}),
        onStoreResult: () => dispatch({type: types.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: types.DELETE_RESULT, resultId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);