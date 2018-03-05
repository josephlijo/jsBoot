import { createStore } from 'redux';

var defaultState = {
    counter: 0
};

var actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

var scoreChanger = function(state = defaultState, action) {
    if(action.type == actions.INCREMENT) {
        return {
            counter: state.counter + 1
        }
    } else if (action.type == actions.DECREMENT) {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

var store = createStore(scoreChanger);
export default store;