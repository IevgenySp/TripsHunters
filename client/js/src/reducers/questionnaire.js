const initialState = [];

export default function questionnaire(state = initialState, action) {
    if (action.type === 'SAVE_QUESTIONS') {
        return action.payload;
    }
    
    return state;
}