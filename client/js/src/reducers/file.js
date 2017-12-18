const initialState = [];

export default function file(state = initialState, action){
    if (action.type === 'FILE_UPLOAD') {
        return action.payload;
    }
    return state;
}