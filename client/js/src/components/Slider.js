/**
 * Created by isp on 11/13/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';

const slider = {
    width: '100%',
    overflow: 'hidden'
};

let sliderContainer = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '0px',
    transition: 'all 0.5s ease-in-out'
};

let leftButton = {
    marginTop: '-105px',
    float: 'left',
    marginLeft: '10px'
};

let rightButton = {
    marginTop: '-105px',
    float: 'right',
    marginRight: '10px'
};

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marginLeft: 0,
            showLeftButton: false,
            showRightButton: false
        };
    }

    shiftLeft() {
        let margin = (this.props.slides + 1) * this.props.margin;
        let slidesWidth = this.props.slideWidth * this.props.slides + margin;
        let width = this.sliderEl.offsetWidth;
        let shiftedMargin;
        let diff = slidesWidth - width - Math.abs(this.state.marginLeft);

        if (slidesWidth <= width || width + Math.abs(this.state.marginLeft) >= slidesWidth) {
            return;
        }

        if (diff < this.props.slideWidth) {
            shiftedMargin = this.state.marginLeft - diff - margin;
            sliderContainer = Object.assign({}, sliderContainer);
            sliderContainer.marginLeft = shiftedMargin + 'px';
            this.setState({marginLeft: shiftedMargin});
        } else {
            shiftedMargin = this.state.marginLeft - this.props.slideWidth - this.props.margin;
            sliderContainer = Object.assign({}, sliderContainer);
            sliderContainer.marginLeft = shiftedMargin + 'px';
            this.setState({marginLeft: shiftedMargin});
        }
    }

    shiftRight() {
        let shiftedMargin;

        if (this.state.marginLeft >= 0) {
            return;
        }

        if (Math.abs(this.state.marginLeft) < this.props.slideWidth) {
            sliderContainer = Object.assign({}, sliderContainer);
            sliderContainer.marginLeft = 0 + 'px';
            this.setState({marginLeft: 0});
        } else {
            shiftedMargin = this.state.marginLeft + this.props.slideWidth;
            sliderContainer = Object.assign({}, sliderContainer);
            sliderContainer.marginLeft = shiftedMargin + 'px';
            this.setState({marginLeft: shiftedMargin});
        }
    }

    componentWillUnmount() {
        sliderContainer = Object.assign({}, sliderContainer);
        sliderContainer.marginLeft = 0 + 'px';
        this.setState({marginLeft: 0});
    }

    render() {

        return (
            <div className="slider" style={slider} ref={element => {this.sliderEl = element}}>
                <div className="sliderContainer" style={sliderContainer}>
                    {this.props.children}
                </div>
                <FloatingActionButton
                    className="leftSliderButton"
                    mini={true}
                    style={leftButton}
                    onClick={this.shiftRight.bind(this)}>
                    <NavigateBefore/>
                </FloatingActionButton>
                <FloatingActionButton 
                    className="rightSliderButton"
                    mini={true} 
                    style={rightButton} 
                    onClick={this.shiftLeft.bind(this)}>
                    <NavigateNext/>
                </FloatingActionButton>
            </div>
        );
    }
}

Slider.propTypes = {
    width: PropTypes.number,
    slideWidth: PropTypes.number,
    slides: PropTypes.number,
    margin: PropTypes.number
};

Slider.defaultProps = {
    width: 300,
    slideWidth: 100,
    slides: 3,
    margin: 0
};

export default Slider;
