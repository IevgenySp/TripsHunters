/**
 * Created by isp on 12/17/17.
 */

const initialState = [];

export default function routes(state = initialState, action) {
    if (action.type === 'ADD_ROUTE') {
        return [...state, action.payload]
    }
    return state
}
