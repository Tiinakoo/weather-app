import React, {Component} from 'react';
import './App.css';
import WeatherList from "./components/WeatherList";

class App extends Component {
    render() {
        return (


            <div className="app">
                <h1>The Weather app</h1>
                <WeatherList/>
            </div>
        );
    }
}

export default App;
