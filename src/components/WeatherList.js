import React, {Component} from 'react';
import Weather from "./Weather";
import {GoogleApiWrapper} from "google-maps-react";
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';

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
            lon: '24.9382',
            lat: '60.1699',
            city: 'Helsinki',
        };
    }

    componentDidMount () {
        const city = this.state.city;
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + weatherKey)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                // console.log(data)
                this.setState({
                    data: data.weather,
                    city: data.name,
                    temp: data.main.temp,
                    lat: data.coord.lat,
                    lon: data.coord.lon
                })
            });
    }

    handleChange = (event) => {
        this.setState({city: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        const city = this.state.city;
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=' + weatherKey)
                .then(response => response.json())
                .then(data => this.setState({
                    data: data.weather,
                    temp: data.main.temp,
                    lon: data.coord.lon,
                    lat: data.coord.lat
                }))
                .then(this.setState({city: ''}));

    }

    render() {
        const {data} = this.state;
        return (
            <div className="weatherList">
                <div className="form">
                    Select city: <br/>
                    <input
                        type="text"
                        value={this.state.newCity}
                        onChange={this.handleChange}
                    />
                    <button
                        onClick={this.handleClick}>
                        Submit
                    </button>
                </div>
                <p>Today's weather forecast is:</p>
                {data.map(hit =>
                    <Weather key={hit.id} main={hit.main} description={hit.description}/>
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