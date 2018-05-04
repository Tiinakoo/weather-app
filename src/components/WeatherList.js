import React, {Component} from 'react';
import Weather from "./Weather";
import {GoogleApiWrapper} from "google-maps-react";
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
import WeatherForm from "./WeatherForm";

let weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: '',
                main: '',
                description: ''
            }],
            temp: '',
            lon: '',
            lat: '',
            city: '',
        };
    }

    componentDidMount() {
        const city = 'Helsinki';
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + weatherKey)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    data: data.weather,
                    temp: data.main.temp,
                    lat: data.coord.lat,
                    lon: data.coord.lon
                })
            });
    }

    callback = (value) => {
        const newCity = value;
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&units=metric&APPID=' + weatherKey)
            .then(response => response.json())
            .then(data => this.setState({
                data: data.weather,
                temp: data.main.temp,
                lon: data.coord.lon,
                lat: data.coord.lat,
                city: data.name
            }))
    }

    render() {
        const {data} = this.state;
        return (
            <div className="weatherList">
                <WeatherForm callback={this.callback}/>
                <h3>{this.state.city}</h3>
                <p>Today's weather forecast is:</p>
                {data.map(hit =>
                    <Weather key={hit.id} description={hit.description}/>
                )}
                <p>{this.state.temp}&deg;C</p>
                <div>
                    <MapContainer google={this.props.google} lat={this.state.lat} lon={this.state.lon}/>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_API_KEY
})(WeatherList)