/**
 * Created by isp on 12/15/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

const underlineStyle = {
    borderBottom: '2px solid #1098AD'
};

const colorStyle = {
    color: '#1098AD'
};

class MenuSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activityValue: 1
        };
        
        this.sectionData = {
            id: this.props.id,
            activity: 'Hiking',
            description: ''
        }
    }

    handleActivityChange(event, index, value) {
        this.setState({activityValue: value});
    }

    updateActivityValue(evt) {
        this.sectionData.activity = evt.target.textContent;

        this.props.onChange(this.props.id, this.sectionData);
    }

    updateDescriptionValue(evt) {
        this.sectionData.description = evt.target.value;

        this.props.onChange(this.props.id, this.sectionData);
    }

    componentDidMount() {
        this.props.onChange(this.props.id, this.sectionData);
    }

    render() {
        return (
                <div className="detailsSectionItem">
                    <SelectField
                        floatingLabelText="Activity type"
                        floatingLabelStyle={{fontFamily: fontStyle}}
                        floatingLabelFocusStyle={colorStyle}
                        underlineFocusStyle={underlineStyle}
                        menuItemStyle={{fontFamily: fontStyle}}
                        style={{width: '100%'}}
                        value={this.state.activityValue}
                        onChange={(event, index, value) => {
                              this.handleActivityChange.bind(this, event, index, value)();
                              this.updateActivityValue.bind(this, event, index, value)();
                        }}>
                        <MenuItem value={1} primaryText="Hiking" />
                        <MenuItem value={2} primaryText="Sea" />
                        <MenuItem value={3} primaryText="Sightseeing" />
                    </SelectField>
                    <TextField
                        hintText="Your Message"
                        floatingLabelText="Sumbols left: 120"
                        multiLine={true}
                        rows={1}
                        style={{width: '100%'}}
                        onChange={this.updateDescriptionValue.bind(this)} 
                    />
                </div>
        );
    }
}

MenuSection.propTypes = {
    propsContainer: PropTypes.array
};

export default MenuSection;