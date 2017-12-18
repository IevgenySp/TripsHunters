const initialState = [];

export default function facts(state = initialState, action) {
    if (action.type === 'ADD_FACT') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE_FACT') {

    } else if (action.type === 'RESET_FACTS') {
        return [];
    } else if (action.type === 'GET_FACTS') {
        return state;
    }
    return state
}