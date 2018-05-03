import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="weather">
                <div>{this.props.main}</div>
                <div>{this.props.description}</div>
            </div>

        );
    }
}

export default Weather;