import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './stores/configureStore';

class GoalScorer extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        console.log(this.props.dispatch)
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrement() {
        this.props.dispatch({type: 'DECREMENT'});
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <input type='text' value={store.getState().counter} />
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

GoalScorer = connect()(GoalScorer);

ReactDOM.render(<Provider store={store}>
                    <GoalScorer />
                </Provider>, document.getElementById('root'));