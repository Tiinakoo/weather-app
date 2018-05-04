import React, {Component} from 'react';

class WeatherForm extends Component {
    state = {
        submittedCity: ''
    }

    handleChange = (event) => {
        this.setState({submittedCity: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        const city = this.state.submittedCity;
        this.props.callback(city);
        this.setState({submittedCity: ''})
    }

    render() {
        return (
            <form className="form">
                Select city:<br/>
                <input
                    type="text"
                    value={this.state.submittedCity}
                    onChange={this.handleChange}
                /><br/>
                <button
                    onClick={this.handleClick}>
                    Submit
                </button>
            </form>

        );
    }
}

export default WeatherForm;