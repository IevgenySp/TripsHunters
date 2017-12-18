/**
 * Created by isp on 12/9/17.
 */

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '300px',
    height: '200px',
    position: 'relative'
};

export class MapContainer extends Component {
    render() {
        let markers = [];
        
        if (this.props.markersData.length > 0) {
            markers = this.props.markersData.map((item, index) => {
                return  <Marker onClick={this.onMarkerClick}
                                name={item.details}
                                position={item.answer}
                                key={index}
                />
            });
        }
        
        return (
            <Map
                google={this.props.google}
                zoom={this.props.zoomLevel || 9}
                style={style}
                initialCenter={this.props.initialCenter || {
                    lat: 42.28965921575409,
                    lng: -71.29931699999997
                }}>
                {markers}
            </Map>
        );
    }
}

MapContainer.propTypes = {
    markersData: React.PropTypes.array,
    zoomLevel: React.PropTypes.number,
    initialCenter: React.PropTypes.object
};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAjORwyZh30uAuPWuQTOXxtV8eY23SqEYQ')
})(MapContainer)