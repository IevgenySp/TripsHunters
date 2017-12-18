import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import facts from './facts';
import file from './file';
import questionnaire from './questionnaire';
import turnsList from './turnsList';
import socket from './socket';
import suggestedQuestions from './suggestedQuestions';
import routes from './routes';

export default combineReducers({
    routing: routerReducer,
    socket,
    facts,
    file,
    questionnaire,
    turnsList,
    suggestedQuestions,
    routes
});
