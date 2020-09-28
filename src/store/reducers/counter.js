import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.INCREMENT):
            const updatedState = Object.assign({}, state)
            updatedState.counter = state.counter + 1; 
            return updatedState;
        case(actionTypes.DECREMENT):
            return {
                ...state,
                counter: state.counter - 1
            }
        case(actionTypes.ADD):
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case(actionTypes.SUBTRACT):
            return {
                ...state,
                counter: state.counter - action.payload
            }
    }
    return state;
};

export default reducer;