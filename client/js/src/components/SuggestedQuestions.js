/**
 * Created by isp on 11/27/17.
 */

import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';

import ChartRenderer from './ChartRenderer';
import LayoutManager from './LayoutManager';
import ReactGoogleMaps from './ReactGoogleMaps';

import SuggestionsData from './../utils/suggestionsData';

const sData = new SuggestionsData();

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

const questionsStyle = {
    paddingBottom: '40px',
    paddingTop: '60px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
};

const blockStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 10px 10px',
    alignItems: 'center',
    textAlign: 'center',
    background: '#f7f5f5',
    overflow: 'hidden'
};

const separationLine = {
    width: '2px',
    //height: '490px',
    height: '83%',
    background: 'linear-gradient(270deg, #5073B8,#1098AD)',
    position: 'absolute',
    opacity: 0.2,
    margin: '10px 0 0 0'
};

const timeStyle = {
    fontSize: '50px',
    color: '#696969'
};

const timeSubStyle = {
    fontSize: '12px',
    color: '#696969'
};

const mapStyle = {
    width: '300px', 
    height: '200px', 
    overflow: 'hidden'
};

class SuggestedQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
    }

    getQuestions(query) {
        sData.suggestedData(query)
            .then(() => {
                this.props.onAddQuestion(sData.data);
        });
    }
    
    componentDidMount() {
        // Boston marathon best time
        // Boston marathon route
        // Boston marathone
        //this.props.questionnaire.question
        this.getQuestions(this.props.questionnaire.question);
    }
    
    render() {
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        
        const questions = this.props.questions.map((obj, id) => {
            let match = sData.findMatch(obj.question);
            let answer = <div></div>;

            if (match.length > 0) {
                switch (match[0].answerType) {
                    case 'time':
                        answer = <div>
                            <div style={timeStyle}>{match[0].answer}</div>
                            <div style={timeSubStyle}>{match[0].details}</div>
                        </div>;
                        break;
                    case 'map':
                        let markers = match[0].answer.map((item, index) => {
                            return {
                                answer: item,
                                details: match[0].details[index]
                            }
                        });

                        answer = <div className="mapStyle" style={mapStyle}>
                            <ReactGoogleMaps
                                markersData={markers}
                                zoomLevel={match[0].mapConfig.zoomLevel}
                                initialCenter={match[0].mapConfig.initialCenter}
                            />
                        </div>
                }
            }

            return (
                <div key={obj.id} style={blockStyle}>
                    <div style={{fontFamily: fontStyle, padding: '0 0 10px 0'}}>{
                        capitalizeFirstLetter(obj.question)}</div>
                    {answer}
                </div>
            );
        });
        
        const layoutManager =
            <LayoutManager layout={[2,questions.length]} orientation="rows" items={questions} />;

        return (
            <div className="suggestedQuestions" style={questionsStyle}>
                <div className="page-title">Questions you might want to ask</div>
                {layoutManager}
                <div style={separationLine}></div>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer-steps')}/>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
        questions: state.suggestedQuestions,
        questionnaire: state.questionnaire,
        charts: state.turnsList,
        ownProps
    }),
    dispatch => ({
        onAddQuestion: (data) => {
            dispatch({type: 'ADD_QUESTION', payload: data});
        }
    }))(SuggestedQuestions);