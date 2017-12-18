/**
 * Created by isp on 11/21/17.
 */

import React, { Component } from 'react';

import TimeIcon from 'material-ui/svg-icons/device/access-time';
import WomanIcon from 'material-ui/svg-icons/action/face';
import PeakIcon from 'material-ui/svg-icons/image/filter-hdr';
import FinisherIcon from 'material-ui/svg-icons/maps/directions-run';
import FinishIcon from 'material-ui/svg-icons/maps/add-location';

const textFormStyle = {
    display: 'flex',
    flexDirection: 'row'
};

const textStyle = {
    padding: '5px 0 0 0'
};

class LabeledText extends Component {

    getIcon(category) {
        let icon;
        
        switch(category) {
            case 'numeric':
                icon = <div className="numericIcon">{this.props.mainText}</div>;
                break;
            case 'time':
                icon = <div className="imageIcon timeIcon"><TimeIcon /></div>;
                break;
            case 'woman':
                icon = <div className="imageIcon womanIcon"><WomanIcon /></div>;
                break;
            case 'peak':
                icon = <div className="imageIcon peakIcon"><PeakIcon /></div>;
                break;
            case 'finisher':
                icon = <div className="imageIcon finisherIcon"><FinisherIcon /></div>;
                break;
            case 'finish':
                icon = <div className="imageIcon finishIcon"><FinishIcon /></div>;

        }
        
        return icon;
    }
    
    render() {
        let icon = this.getIcon(this.props.category);

        return (
            <div style={textFormStyle}>
                <div className="factIcon">{icon}</div>
                <div style={textStyle} className="factText">{this.props.text}</div>
            </div>
        );
    }
}

LabeledText.propTypes = {
    category: React.PropTypes.string,
    mainText: React.PropTypes.string,
    text: React.PropTypes.string.isRequired
};

export default LabeledText;