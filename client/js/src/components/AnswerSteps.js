/**
 * Created by isp on 11/10/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';

import Turn from './Turn';

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class AnswerSteps extends Component {
    render() {
        const layouts = [[1,4], [1,4], [1,3], [2,2]]; //Items layouts for layout amager
        const turns = this.props.turns.map((turn, index) =>
            <div key={turn.id}><Turn turn={turn} layout={layouts[index]}/></div>);

        return (
            <div className="charts">
                <div className='page-title'>The answer turn by turn:</div>
                {turns}
                <FlatButton className="export-pdf" label="Export to PDF"
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/pdf-export')}/>
                <FlatButton className="next" label="NEXT" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() => 
                            this.props.ownProps.router.push('/suggested-questions')}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer')}/>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
    turns: state.turnsList,
    ownProps
}))(AnswerSteps);