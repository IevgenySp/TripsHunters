import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import reducer from './src/reducers';
import {createStore, combineReducers, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Map from './src/components/main/Map.js';
import Questionnarie from './src/components/Questionnaire.js';
import File from './src/components/File.js';
import Facts from './src/components/Facts.js';
import Answer from './src/components/Answer';
import AnswerSteps from './src/components/AnswerSteps';
import Application from './src/components/Application';
import LoginPage from './src/components/LoginPage';
import PdfExport from './src/components/PdfExport';
import SuggestedQuestions from './src/components/SuggestedQuestions';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Application>
            <Router history={history}>

                <Route exact path="/" component={Map}/>
                <Route path="/questionnaire" component={Questionnarie}/>
                <Route path="/file-upload" component={File}/>
                <Route path="/facts" component={Facts}/>
                <Route path="/answer" component={Answer}/>
                <Route path="/answer-steps" component={AnswerSteps}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/pdf-export" component={PdfExport}/>
                <Route path="/suggested-questions" component={SuggestedQuestions}/>

            </Router>
        </Application>
    </Provider>
    ,
    document.getElementById('root')
);

//console.log(store.getState());
