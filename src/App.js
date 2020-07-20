import React, {Component} from 'react';
import Logo from '../src/img/logo2.png';
import Location from '../src/location';
import Tomorrow from '../src/Tomorrow';
import Aftertomorrow from '../src/AfterTomorrow';
import axios from 'axios';

import './App.css';
import './Media.css';

const api = {
  key: "614d8cc0d4da4374bda150647201507",
  base: "http://api.weatherapi.com/v1/"

  }

 

 class App extends Component {

  

  state = {
    location: null,
    temperature: null,
    coldorhot: null,
    country:null,
    icon:null,
    tomorrowtemperature: null,
    intowdays: null,
    icontomorror:null,
    icon2days:null


  }

  
     

      getCity = (e) => {

        if(e.keyCode == 13){
          
          let city = e.target.value;
           axios.get(`${api.base}forecast.json?key=${api.key}&q=${city}&days=7`).then((res)=>{
            
             const location = res.data.location.name;
             this.setState({location:location})
             const country = res.data.location.country;
             this.setState({country:country});
             const temperature = res.data.current.temp_c + '°C';
             this.setState({temperature:temperature})
             const coldOrhot = res.data.current.condition.text;
             this.setState({coldorhot: coldOrhot})
             const icon = res.data.current.condition.icon;
             this.setState({icon:icon})
             const tomorrow = res.data.forecast.forecastday[1].day.maxtemp_c +' '+ '°C';
             this.setState({tomorrowtemperature:tomorrow});
             const icontomorrow = res.data.forecast.forecastday[1].day.condition.icon;
             this.setState({icontomorrow:icontomorrow})
             const intwodays = res.data.forecast.forecastday[2].day.maxtemp_c +' '+'°C';
             this.setState({intwodays: intwodays});
             const icon2days = res.data.forecast.forecastday[2].day.condition.icon;
             this.setState({icon2days:icon2days})

             })

             e.target.value="";             
             

          }
         
          }
    

   

  render () {

      return (

      

      <div className={((this.state.temperature >= 20+ '°C') ? 'App warm' : 'App')}>

            {/* input and enter location  */}

            <p className="enter">Please enter your location</p>
         
            <input  type="text" 
                placeholder="Your Location"
                
                onKeyDown={this.getCity}
                
            />
          
            {/* Logo  */}

          <div className={((this.state.location!=null)  ? 'logo none' : 'logo')} >
           <img src={Logo} />
             <p>Your weather forecast</p>
             <em>Developed by Tommaso Vitali in 2020 with React.Js</em>
          </div>


         
        
        
              <div className={((this.state.location != null) ? 'wrapper' : 'wrapper none')}>

                {/* Main - today weather  */}

                <Location 
                location={this.state.location}
                country={this.state.country}
                temperature={this.state.temperature}
                coldorhot={this.state.coldorhot}
                icon={this.state.icon}/>


                    {/* tomorrow and 2days forecast  */}
              
                    <div className="forecast">
                      <Tomorrow temperature= {this.state.tomorrowtemperature} icon={this.state.icontomorrow}/>
                      <Aftertomorrow temperature={this.state.intwodays} icon= {this.state.icon2days} />
                        
                      </div>
                </div>
          
          

        
      
      
    </div>


    )

    
  }

   
    
  
}

export default App;
