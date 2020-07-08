import React from 'react'
import './Weather.css'

export class Weather extends React.Component {
    state={
           weatherData:null

    }
     async componentDidMount(){
        let data= await fetch("")
        data = data.json().then((data)=>this.setState({weatherData:data},()=>console.log(this.state.weatherData.data[0].aqi)))
    }
    render() {
        if(this.state.weatherData)
        return (
            
            <div className="parent">
            <div className="weather">
            <h1> { this.state.weatherData.data[0].city_name }</h1>
            <i class="fa fa-cloud fa-5x " aria-hidden="true" text-color="yellow" ></i>
            <i class="fa fa-sun-o fa-5x" aria-hidden="true"></i>
            <i class="fa fa-cloud fa-5x " aria-hidden="true" text-color="yellow" ></i>
            <i class="fa fa-cloud fa-5x " aria-hidden="true" text-color="yellow" ></i>

            <div className="inner">
            <h3>Wind: { this.state.weatherData.data[0].wind_spd } {" "} { this.state.weatherData.data[0].wind_dir}</h3>
            <h3>Humidity:{" "}{ this.state.weatherData.data[0].rh}</h3>
            <h3>Conditions:{" "}{ this.state.weatherData.data[0].weather.description}</h3>
            <h3>Air Quality Index:{" "}{ this.state.weatherData.data[0].aqi}</h3>
                </div>
            </div>
            </div>
            
        )
    else{return <div></div>}
    }
}

export default Weather
