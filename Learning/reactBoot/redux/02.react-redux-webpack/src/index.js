import React  from 'react';
import ReactDOM from 'react-dom';
import store from './stores/configureStore'

class GoalScorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log('state changed');
            this.setState({}); // This is not correct though it will rerender.
        });
    }

    increment() {
        store.dispatch({type: 'INCREMENT'});
    }

    decrement() {
        store.dispatch({type: 'DECREMENT'});
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

ReactDOM.render(<GoalScorer />, document.getElementById('root'));