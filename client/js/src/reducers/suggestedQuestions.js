/**
 * Created by isp on 11/27/17.
 */

/*const initialState = [
    {
        id: 1,
        question: 'How many runners are in the Chicago Marathon?'
    },
    {
        id: 2,
        question: 'What is the prize money for the Chicago Marathon?'
    },
    {
        id: 3,
        question: 'Where is the start of the Chicago Marathon?'
    },
    {
        id: 4,
        question: 'How long is the Chicago Marathon?'
    }
];*/

const initialState = [];

export default function suggestedQuestions(state = initialState, action){
    if (action.type === 'ADD_QUESTION') {
        let questions = action.payload.map((question, index) => {
            return {
                id: index + 1,
                question: question
            }
        });

        return questions;
    }
    return state;
}
