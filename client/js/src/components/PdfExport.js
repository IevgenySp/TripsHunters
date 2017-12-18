/**
 * Created by isp on 11/27/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const orStyle = {
    fontSize: '25px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #5073B8,#1098AD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class PdfExport extends Component {
    
    render() {
        
        return (
            <div className="pdfExport">
                <div className="page-title">To Export to PDF please</div>
                <div style={{margin: "30px 0 0 0"}}><LoginPage /></div>
                <div style={orStyle}>OR</div>
                <div style={{margin: "10px 0 0 0"}}><SignUpPage /></div>
                <FlatButton className="export-pdf" label="BACK" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer-steps')}/>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps
    })
)(PdfExport);