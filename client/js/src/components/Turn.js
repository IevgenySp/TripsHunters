/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChartRenderer from './ChartRenderer';
import Paper from 'material-ui/Paper';

import LabeledText from './LabeledText';
import LayoutManager from './LayoutManager';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const circleStyle = {
    background: 'rgb(211, 211, 211)',
    height: 30,
    width: 30,
    margin: '0 10px 0 0',
    textAlign: 'center',
    display: 'inline-block',
    lineHeight: '30px',
    color: '#fff',
    //fontFamily:"PT Sans Narrow"
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"'
};

class Turn extends Component {
    render() {
        let text;
        let layoutManager;
        let layout = this.props.layout || [2, 2];
        
        text = this.props.turn.facts.map(fact => {
            return (<div key={fact.id}><LabeledText
                category={fact.category}
                mainText={fact.mainText || null}
                text={fact.text} /></div>);
        });
        
        layoutManager =
                <LayoutManager layout={layout} orientation="rows" items={text} />;

        return (
            <div className='turn' style={style} key={this.props.turn.id}>
                    <Paper style={circleStyle} zDepth={0} circle={true}>
                        <div id='number'>{this.props.turn.id}</div>
                    </Paper>
                    <div style={{flex:1, width:'calc(100% - 300px)'}}
                         id='text'>{layoutManager}</div>
                    <ChartRenderer chart={this.props.turn.data}/>
            </div>
        );
    }
}

ChartRenderer.propTypes = {
    turn: PropTypes.object,
    layout: PropTypes.array
};

ChartRenderer.defaultProps = {
    turn: {},
    layout: [2, 2]
};

export default Turn;