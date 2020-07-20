import React from 'react';


const afterTomorrow = (props) => {


    const dateBuilderPlus2 = (d) => {
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
        let day = days[d.getDay()+2];
        let date = d.getDate()+2;
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${day} ${date} ${month} ${year}`
      } 
   
      
    return (

        <div className="tomorrow">
                  <p className="titleforecast">In 2 days</p>
                  <p className="data">{dateBuilderPlus2(new Date())}</p>
                  <p><span className="twodaystemp">{props.temperature}</span></p>
                  <img src={props.icon} />

                  </div>
        
    )
}

export default afterTomorrow;