/**
 * Created by isp on 12/15/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import generateId from 'lodash/uniqueId';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import Menu from './../menu/Menu';
import Shape from '../../utils/drawShape';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addRoute: false,
            renderMenu: false,
            menuPosition: [],
            prevMenuPosition: []
        };
    }
    
    getMapCoords(event) {
        if (!this.state.addRoute) return;

        const coords = {
            x: event.pageX,
            y: event.pageY
        };

        this.setState({
            prevMenuPosition: [
                this.state.menuPosition[0],
                this.state.menuPosition[1]
            ],
            menuPosition: [coords.x, coords.y],
            renderMenu: true
        });
    }

    setRoute() {
        if (this.state.addRoute === false) {
            this.routeData = [];
            this.id = generateId('route_');
        } else {
            //console.log(this.routeData);
            this.saveData();
        }

        this.setState({
            addRoute: !this.state.addRoute,
            renderMenu: this.state.renderMenu ?
                false : this.state.renderMenu
        })
    }

    handleMenuChange(value) {
        this.routeData.push(value);
    }
    
    closeMenu() {
        this.setState({
            renderMenu: false
        })
    }

    saveData() {
        this.props.onSaveRoute({
            id: this.id,
            data: this.routeData
        });
    }

    saveMenu(position) {
        //this.shape.drawCircle(position[0], position[1], 10);
        //console.log(this.routeData);

        if (this.state.menuPosition.length > 0) {
            this.shape.drawCircle(
                this.state.menuPosition[0],
                this.state.menuPosition[1],
                10
            );
            this.shape.drawLine(
                this.state.prevMenuPosition[0],
                this.state.prevMenuPosition[1],
                this.state.menuPosition[0],
                this.state.menuPosition[1]
            );
        }

    }

    componentDidMount() {
        this.shape = new Shape(this.canvas);
    }

    render() {
        let addRouteClass = this.state.addRoute ? 
            'finishRouteButton' : 'addRouteButton';
        let sign = this.state.addRoute ? <ContentRemove /> : <ContentAdd />;
        let props = {
            onChange: this.handleMenuChange.bind(this),
            onClose: this.closeMenu.bind(this),
            onMenuSave: this.saveMenu.bind(this)
        };
        let menu = this.state.addRoute && this.state.renderMenu ?
            <Menu position={this.state.menuPosition} {...props}/> : null;

        return (
            <div>
                <FloatingActionButton onClick={() => {
                    this.setRoute.bind(this)();
                }} className={addRouteClass}>
                    {sign}
                </FloatingActionButton>
                <div className="map" onClick={this.getMapCoords.bind(this)}>
                    <img style={{width: '100%'}} src="../../../../img/mapWorld.png" alt="Map" />
                    <canvas style={
                        {width: '100%',
                        position: 'absolute'}} ref={(element) => { this.canvas = element }} />
                </div>
                {menu}
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps
    }),
    dispatch => ({
        onSaveRoute: (data) => {
            dispatch({ type: 'ADD_ROUTE', payload: data });
        }
    })
)(Map);