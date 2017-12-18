/**
 * Created by isp on 12/15/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import generateId from 'lodash/uniqueId';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import MenuSection from './MenuSection';

const style = {
    color: "rgba(0, 0, 0, 0.70)",
    overflow: 'hidden',
    backgroundColor:"rgba(255, 255, 255,0.7)",
    padding: '10px'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
           menuItems: 1
        };

        this.menuData = [];
        this.id = generateId('section_');
    }

    addMenuItem() {
        this.setState({
            menuItems: this.state.menuItems+=1
        })
    }

    handleSectionChange(sectionId, value) {
        this.menuData[sectionId] = value;
    }
    
    render() {
        let menuItems = [];

        for (let i = 0; i < this.state.menuItems; i++) {
            let props = {
                id: i,
                onChange: this.handleSectionChange.bind(this)
            };

            menuItems.push(<MenuSection key={i} {...props}/>);
        }

        return (
            <div style={{
                position: 'absolute',
                left: this.props.position[0] - 200 + 'px' || '20px',
                top: this.props.position[1] + 10 + 'px' || '20px',
                width: '400px',
                maxHeight: '400px',
                overflow: 'auto'
            }}>
                <Paper style={style} zDepth={1} rounded={false}>
                    <div className="details">
                        {menuItems}
                        <div>
                            <RaisedButton className="detailsAdd" label="ADD" primary={true}
                                      labelStyle={{fontFamily: fontStyle}}
                                      onClick={() =>{this.addMenuItem.bind(this)()}}/>
                            <RaisedButton className="detailsSave" label="SAVE" primary={true}
                                  labelStyle={{fontFamily: fontStyle}}
                                  onClick={() =>{
                                    this.props.onChange({
                                        id: this.id, 
                                        data: this.menuData,
                                        position: this.props.position
                                    });
                                    this.props.onClose();
                                    this.props.onMenuSave(this.props.position)
                                  }}/>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

Menu.propTypes = {
    position: PropTypes.array
};

export default Menu;