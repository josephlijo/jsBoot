import React  from 'react';
import ReactDOM from 'react-dom';

class GoalScorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState((prevState, props) => {
            return { counter: prevState.counter + 1 }
        })
    }

    decrement() {
        this.setState((prevState, props) => {
            return { counter: prevState.counter - 1 };
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <input type='text' value={this.state.counter} />
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

ReactDOM.render(<GoalScorer />, document.getElementById('root'));