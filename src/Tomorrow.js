import React from 'react';


const tomorrow = (props) => {


    const dateBuilderPlus = (d) => {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
        let day = days[d.getDay()+1];
        let date = d.getDate()+1;
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`
      } 
   
      
    return (

        <div className="tomorrow">
                  <p className="titleforecast">Tomorrow</p>
                  <p className="data">{dateBuilderPlus(new Date())}</p>
                  <p><span className="tomorrowtemp">{props.temperature}</span></p>
                  <img src={props.icon} />
        </div>
        
    )
}

export default tomorrow;