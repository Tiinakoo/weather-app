import React, {Component} from 'react';
import Weather from "./Weather";

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // componentDidMount() {
    //     fetch('api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=xxxx')
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(json) {
    //             this.setState({data: json});
    //             console.log(json);
    //         });
    // }   // componentDidMount() {
    //     fetch('api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=b07a8f1b890e20f64dc617cf76ce3b3d')
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(json) {
    //             this.setState({data: json});
    //             console.log(json);
    //         });
    // }

    render() {
        // var weatherlist = this.state.data.map(function(w) {
        //     return (
        //         <Weather weather={w.weather.main}/>
        //     );
        // });

        return (
            <div className="weatherList">
                <h2>The weather in Helsinki is:</h2>
                <Weather/>
                {/*{weatherlist}*/}
            </div>
        );
    }
}

export default WeatherList;