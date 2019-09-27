import React from 'react';
import './Forecast.css';

const addDays = (theDate, days) => {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

const day = new Date();
const today = day.getDate();
const day1 = addDays(day, 1).getDate();
const day2 = addDays(day, 2).getDate();
const day3 = addDays(day, 3).getDate();
const day4 = addDays(day, 4).getDate();



const Forecast = (props) => {
   
    return (
        <div className ="card" >
            <h3 style={{textAlign:"center"}}>WEATHER FORECAST</h3>
            <hr />

            { props.date.getDate()===today ?
                <p>
                    <ul>
                        <li> DAY :  {props.weather[0].Day.IconPhrase}
                        </li>

                        <li> TEMP: {props.weather[0].Temperature.Maximum.Value}F (max.) ----
                                   {props.weather[0].Temperature.Minimum.Value}F (min.)
                             </li>

                        <li>
                            NIGHT : {props.weather[0].Night.IconPhrase} <br />

                        </li>
                    </ul>
                </p> : 
                null }
            
            { props.date.getDate()===day1 ?
                <ul>
                    <li> DAY : {props.weather[1].Day.IconPhrase} <br />
               </li>

               <li> TEMP: {props.weather[1].Temperature.Maximum.Value}F (max.) ----
                                   {props.weather[1].Temperature.Minimum.Value}F (min.)
                             </li>

                    <li>
                        NIGHT : {props.weather[1].Night.IconPhrase} <br />
                </li>
                </ul> : 
                null  }
                { props.date.getDate()===day2 ?
                <ul>
                    <li> DAY : {props.weather[2].Day.IconPhrase} <br />
               </li>

               <li> TEMP: {props.weather[2].Temperature.Maximum.Value}F (max.) ----
                                   {props.weather[2].Temperature.Minimum.Value}F (min.)
                             </li>

                    <li>
                        NIGHT : {props.weather[2].Night.IconPhrase} <br />
                </li>
                </ul> : 
                null  }
                { props.date.getDate()===day3 ?
                <ul>
                    <li> DAY : {props.weather[3].Day.IconPhrase} <br />
               </li>

               <li> TEMP: {props.weather[3].Temperature.Maximum.Value}F (max.) ----
                                   {props.weather[3].Temperature.Minimum.Value}F (min.)
                             </li>
                    <li>
                        NIGHT : {props.weather[3].Night.IconPhrase} <br />
                </li>
                </ul> : 
                null  }
                { props.date.getDate()===day4 ?
                <ul>
                    <li> DAY : {props.weather[4].Day.IconPhrase} <br />
               </li>

               <li> TEMP: {props.weather[4].Temperature.Maximum.Value}F (max.) ----
                                   {props.weather[4].Temperature.Minimum.Value}F (min.)
                             </li>

                    <li>
                        NIGHT : {props.weather[4].Night.IconPhrase} <br />
                </li>
                </ul> : 
                null  }

        </div>
    );
    // }

}

export default Forecast; 