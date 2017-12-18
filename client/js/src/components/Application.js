import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Application extends Component {

    render() {

        return (
            <MuiThemeProvider>
                <ReactCSSTransitionGroup
                    transitionName="answerSteps"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="application">{this.props.children}</div>
                </ReactCSSTransitionGroup>
            </MuiThemeProvider>
        );
    }
}

export default Application
