import React from 'react';

const location = (props) => {

    const dateBuilder = (d) => {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`
      }
      
    return (
        <div className="Location">
        <p><span className="title">{props.location}</span></p>
        <p className="country">{props.country}</p>
         <p className="date">{dateBuilder(new Date())}</p>
    

        <p><span className="title">{props.temperature}</span></p>
        <p className="title"><b>{props.coldorhot}</b></p>
        <img src={props.icon}  />
    </div>
    )
}

export default location;