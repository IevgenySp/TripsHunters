import React, { Component }   from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { connect } from 'react-redux';
import Link from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import LoginPage from './LoginPage';

const loginStyle = {
    position: 'absolute',
    top: 0,
    right: 0
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

const askStyle = {
    fontSize: '25px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #5073B8,#1098AD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    //fontFamily: fontStyle
};

const underlineStyle = {
    borderBottom: '2px solid #1098AD'
};

const colorStyle = {
    color: '#1098AD'
};

class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginShown: false,
            domainValue: 1,
            jobValue: null
        };

        this.listData = {
            domain: 'Running'
        };
    }

    updateDomainValue(evt) {
        this.listData.domain = evt.target.textContent;
    }

    updateInputNameValue(evt) {
        this.listData.name = evt.target.value;
    }
    updateJobValue(evt) {
        this.listData.job = evt.target.textContent;
    }
    updateInputIndustryValue(evt) {
        this.listData.industry = evt.target.value;
    }
    updateInputHobbieValue(evt) {
        this.listData.hobbie = evt.target.value;
    }

    updateQuestionValue(question){
        this.listData.question = question;
    }

    saveData() {
        this.props.onSaveQuestionnarie(this.listData);
    }

    showLoginPage() {
        this.setState({loginShown: !this.state.loginShown});
    }

    handleDomainChange(event, index, value) {
        this.setState({domainValue: value});
    }

    handleJobChange(event, index, value) {
        this.setState({jobValue: value});
    }

    render() {
        let loginFormStyle = this.state.loginShown ?
            'loginFormActive' : 'loginFormInactive';

        return (
            <div className="questionnaire">
                <FlatButton
                    className="login"
                    label="Login"
                    primary={true}
                    style={loginStyle}
                    labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                    onClick={this.showLoginPage.bind(this)}
                />
                <div className={loginFormStyle}>
                    <LoginPage />
                </div>
                <div className="questionnarieAskBackground">Ask</div>
                <div className='page-title'>Start asking
                    for free</div>
                <AutoComplete style={{width:'80%', fontSize: '100px', marginTop: '45px'}} className="question"
                                  hintText="Ask ..." dataSource={[]}
                                  hintStyle={askStyle}
                                  inputStyle={{fontFamily: fontStyle, fontSize: '20px'}}
                                  underlineFocusStyle={underlineStyle}
                                  onUpdateInput={this.updateQuestionValue.bind(this)}/>
                    <div style={{fontSize: '12px', color: '#ccc'}}>ex. Boston marathon best time</div>
                    <List className="list">
                        <ListItem primaryText="What is this data?"
                                  innerDivStyle={{fontFamily: fontStyle}}
                                  primaryTogglesNestedList={false}
                                  disabled={true}
                                  nestedItems={[
                                   <ListItem className="list-item" key={0} primaryText="" disabled={true}>
                                  <SelectField
                                  floatingLabelText="Domain"
                                  floatingLabelStyle={{fontFamily: fontStyle}}
                                  floatingLabelFocusStyle={colorStyle}
                                  underlineFocusStyle={underlineStyle}
                                  menuItemStyle={{fontFamily: fontStyle}}
                                  value={this.state.domainValue}
                                  onChange={(event, index, value) => {
                                    this.handleDomainChange.bind(this, event, index, value)();
                                    this.updateDomainValue.bind(this, event, index, value)();
                                  }}>
                                    <MenuItem value={1} primaryText="Running" />
                                    <MenuItem value={2} primaryText="Swimming" />
                                  </SelectField>
                                  </ListItem>,
                                  <ListItem className="list-item" key={1} primaryText="" disabled={true}
                                    onChange={this.updateInputNameValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Name"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={colorStyle}
                                     underlineFocusStyle={underlineStyle}
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                   <ListItem className="list-item" key={2} primaryText="" disabled={true}>
                                  <SelectField
                                     floatingLabelText="What do you do?"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={colorStyle}
                                     underlineFocusStyle={underlineStyle}
                                     menuItemStyle={{fontFamily: fontStyle}}
                                     value={this.state.jobValue}
                                     onChange={(event, index, value) => {
                                        this.handleJobChange.bind(this, event, index, value)();
                                        this.updateJobValue.bind(this, event, index, value)();
                                     }}>
                                        <MenuItem value={1} primaryText="Accounting" />
                                        <MenuItem value={2} primaryText="Python developer" />
                                   </SelectField>
                                  </ListItem>,
                                    <ListItem className="list-item" key={3} primaryText="" disabled={true}
                                     onChange={this.updateInputIndustryValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Industry"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={colorStyle}
                                     underlineFocusStyle={underlineStyle}
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={4} primaryText="" disabled={true}
                                     onChange={this.updateInputHobbieValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your hobbies"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={colorStyle}
                                     underlineFocusStyle={underlineStyle}
                                     dataSource={[]}
                                   />
                                  </ListItem>
                            ]}
                        />

                    </List>
                <FlatButton 
                    labelStyle={{fontFamily: fontStyle, color: '#1098AD'}} 
                    className="next" label="NEXT" primary={true} onClick={() => {
                        this.saveData.bind(this)();
                        this.props.ownProps.router.push('/file-upload')                 
                    }} />
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps
    }),
    dispatch => ({
        onSaveQuestionnarie: (data) => {
            dispatch({ type: 'SAVE_QUESTIONS', payload: data });
        }
    })
)(Questionnaire);