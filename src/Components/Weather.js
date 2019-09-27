import React, { Component } from 'react';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Forecast from './Forecast';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            dailyForecasts: [],
            showForecast: false
        };
    }

    passDateAsProps = () => {
        return this.state.date.getDate();
    }

    // componentDidMount () {
    //     // fetch(``)
    //     //     .then(response => 
    //     //         const location = response)
    //     fetch ("http://dataservice.accuweather.com/forecasts/v1/daily/5day/202396?apikey=WqUyWLMZmFHTyaUdNNYm46zQaCMSg9wG",{
    //          method: 'GET'
    //     })
    //     .then(function (response) {
    //         if(response.status >=200 && response.status < 204) {
    //             return response.json()
    //         } else {
    //             console.log('error')
    //         }
    //     })
    //     .then((response) => {
    //         console.log('response',response);
    //         this.setState({dailyForecasts:response.DailyForecasts});
    //     });
    // }

    handleDateChange = (date) => {
        this.setState({
            date: date
        }, () => {
            fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/202396?apikey=nGmhM6Ss3Up2WVsGGzcunFGCAmZpzbEz", {
                method: 'GET'
            })
                .then(function (response) {
                    if (response.status >= 200 && response.status < 204) {
                        return response.json()
                    } else {
                        console.log('error')
                    }
                })
                .then((response) => {
                    this.setState({ dailyForecasts: response.DailyForecasts, showForecast: true });
                    console.log(this.state.dailyForecasts)
                });
        });
        console.log(date);
    }

    // const day = (theDate, days) => {
    //     return new Date(theDate.getTime() + days*24*60*60*1000);
    // }


    render() {
        const addDays = (theDate, days) => {
            return new Date(theDate.getTime() + days*24*60*60*1000);
        }
        
        let newDate = addDays(new Date(), 5);
        

        
        return (
            <div style={{ textAlign: "center" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disablePast
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        // onClick={this.showForecast}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        maxDate={newDate}
                    />
                </MuiPickersUtilsProvider>
                <p>Select a date to check weather forecast.</p>
                { this.state.showForecast===true ? 
                    <Forecast date={this.state.date} weather={this.state.dailyForecasts}/> :
                    null }
                    
            </div>
        );
    }
}

export default Weather;