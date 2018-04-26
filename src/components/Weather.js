import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="weather">
                <p>Partly cloudy</p>
                {/*<div>{this.props.weather.main}</div>*/}
                {/*<div>{this.props.weather.description}</div>*/}
            </div>

        );
    }
}

export default Weather;