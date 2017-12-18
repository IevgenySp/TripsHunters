/**
 * Created by isp on 11/13/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';

import ChartRenderer from './ChartRenderer';
import Slider from './Slider';
import LabeledText from './LabeledText';
import LayoutManager from './LayoutManager';

/*const pageTitleStyle = {
    fontFamily:"PT Sans Narrow"
};*/

const chart = {
    paddingBottom: '30px',
    paddingTop: '15px',
    width: '100%'
};

const chartStyle = {
    margin: '10px'
};

const chartSelectedStyle = {
    margin: '10px',
    border: '2px solid rgba(76,175, 80, 0.5)'
};

const sliderStyle = {
    borderTop: "1px solid rgb(224, 224, 224)"
};

const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    borderTop: "1px solid rgb(224, 224, 224)"
};

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 10px 10px 10px'
};

const pageTitleStyle = {
    fontSize: '25px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #EF4E7B,#A166AB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class AnswerSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSlideId: 1
        };
    }

    onSlideClick(e) {
        let id = e.currentTarget.id.split('_')[1];

        this.setState({selectedSlideId: Number(id)});
    }

    render() {
        const chartSliderWidth = 200;
        const chartSliderHeight = 150;
        const slidesMargin = 10;
        const chartWidth = 400;
        const chartHeight = 300;
        const charts = this.props.charts.map(chart =>
            <div key={chart.id}
                 id={'slide_' + chart.id}
                 style={chart.id === this.state.selectedSlideId ?
                    chartSelectedStyle : chartStyle}
                 className="answerSlide"
                 onClick={this.onSlideClick.bind(this)}>
                <ChartRenderer
                chart={chart.data}
                width={chartSliderWidth}
                height={chartSliderHeight}/>
            </div>);
        const slides = this.props.charts.length;
        const facts =
            this.props.charts[this.state.selectedSlideId - 1].facts.map(fact => {
            return (<div key={fact.id}><LabeledText
                category={fact.category}
                mainText={fact.mainText || null}
                text={fact.text} /></div>);
        });
        const layoutManager =
            <LayoutManager layout={[2,2]} orientation="rows" items={facts} />;

        return (
            <div style = {chart}>
                <div style={headerStyle}>
                    <div style={{flex: 1}}>
                        <div className='title' style={pageTitleStyle}>The answer:</div>
                        <div>{layoutManager}</div>
                    </div>
                    <div style={{flex: 1}}>
                        <ChartRenderer
                            chart={this.props.charts[this.state.selectedSlideId - 1].data}
                            width={chartWidth}
                            height={chartHeight}/>
                    </div>
                </div>
                <div style={sliderStyle}><Slider
                    width={782} 
                    slideWidth={chartSliderWidth}
                    slides={slides}
                    margin={slidesMargin}>{charts}
                </Slider></div>
                <div>
                    <div style={footerStyle}>
                        <div className='title'
                             style={pageTitleStyle}>Get your turn by turn recommendations</div>
                        <FlatButton label="HERE" primary={true} style={{marginTop: '11px'}}
                                    labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                                    onClick={() =>
                        this.props.ownProps.router.push('/answer-steps')}/>
                    </div>
                    <FlatButton className="next" label="NEXT" primary={true}
                                labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                                onClick={() =>
                        this.props.ownProps.router.push('/answer-steps')}/>
                    <FlatButton className="prev" label="PREVIOUS" primary={true}
                                labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                                onClick={() =>
                        this.props.ownProps.router.push('/facts')}/>
                </div>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
    charts: state.turnsList,
    ownProps
}))(AnswerSteps);
