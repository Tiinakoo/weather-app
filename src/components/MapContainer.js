import React, {Component} from 'react';
import ReactDOM from "react-dom";

export class MapContainer extends React.Component {

    componentDidUpdate() {
        this.loadMap(); // call loadMap function to load the google map
    }

    loadMap() {
        if (this.props && this.props.google) {                                  //checks if props passed
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;                                      // looks for HTML div ref 'map', look render below
            const latLng = new google.maps.LatLng(this.props.lat, this.props.lon);
            console.log(this.props.lat);
            const node = ReactDOM.findDOMNode(mapRef);
            const mapConfig = Object.assign({}, {
                center: latLng,                                              //set center to Helsinki
                zoom: 13                                                     //sets zoom
            })
            this.map = new maps.Map(node, mapConfig);                       //creates new Google map
            const marker = new maps.Marker({                                //creates marker on a map
                position: latLng,
                map: this.map
            });
        }
    }

    render() {
        return (
                <div ref="map" className="map">
                    loading map...
                </div>

        );
    }
}

export default MapContainer;