(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo2.8a81f6f5.png"},18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(23),a(12)),s=a(13),i=a(17),u=a(16),m=a(14),d=a.n(m),y=function(e){return r.a.createElement("div",{className:"Location"},r.a.createElement("p",null,r.a.createElement("span",{className:"title"},e.location)),r.a.createElement("p",{className:"country"},e.country),r.a.createElement("p",{className:"date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(r)}(new Date)),r.a.createElement("p",null,r.a.createElement("span",{className:"title"},e.temperature)),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,e.coldorhot)),r.a.createElement("img",{src:e.icon}))},p=function(e){return r.a.createElement("div",{className:"tomorrow"},r.a.createElement("p",{className:"titleforecast"},"Tomorrow"),r.a.createElement("p",{className:"data"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()+1],a=e.getDate()+1,n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(r)}(new Date)),r.a.createElement("p",null,r.a.createElement("span",{className:"tomorrowtemp"},e.temperature)),r.a.createElement("img",{src:e.icon}))},h=function(e){return r.a.createElement("div",{className:"tomorrow"},r.a.createElement("p",{className:"titleforecast"},"In 2 days"),r.a.createElement("p",{className:"data"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()+2],a=e.getDate()+2,n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(r)}(new Date)),r.a.createElement("p",null,r.a.createElement("span",{className:"twodaystemp"},e.temperature)),r.a.createElement("img",{src:e.icon}))},E=a(15),f=a.n(E),v=(a(41),a(42),"614d8cc0d4da4374bda150647201507"),g="https://api.weatherapi.com/v1/",w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={location:null,temperature:null,coldorhot:null,country:null,icon:null,tomorrowtemperature:null,intowdays:null,icontomorror:null,icon2days:null},e.getCity=function(t){if(13===t.keyCode){var a=t.target.value;f.a.get("".concat(g,"forecast.json?key=").concat(v,"&q=").concat(a,"&days=7")).then((function(t){var a=t.data.location.name;e.setState({location:a});var n=t.data.location.country;e.setState({country:n});var r=t.data.current.temp_c+"\xb0C";e.setState({temperature:r});var o=t.data.current.condition.text;e.setState({coldorhot:o});var c=t.data.current.condition.icon;e.setState({icon:c});var l=t.data.forecast.forecastday[1].day.maxtemp_c+" \xb0C";e.setState({tomorrowtemperature:l});var s=t.data.forecast.forecastday[1].day.condition.icon;e.setState({icontomorrow:s});var i=t.data.forecast.forecastday[2].day.maxtemp_c+" \xb0C";e.setState({intwodays:i});var u=t.data.forecast.forecastday[2].day.condition.icon;e.setState({icon2days:u})})),t.target.value=""}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.temperature>="20\xb0C"?"App warm":"App"},r.a.createElement("p",{className:"enter"},"Please enter your location"),r.a.createElement("input",{type:"text",placeholder:"Your Location",onKeyDown:this.getCity}),r.a.createElement("div",{className:null!=this.state.location?"logo none":"logo"},r.a.createElement("img",{src:d.a}),r.a.createElement("p",null,"Your weather forecast"),r.a.createElement("em",null,"Developed by Tommaso Vitali in 2020 with React.Js")),r.a.createElement("div",{className:null!=this.state.location?"wrapper":"wrapper none"},r.a.createElement(y,{location:this.state.location,country:this.state.country,temperature:this.state.temperature,coldorhot:this.state.coldorhot,icon:this.state.icon}),r.a.createElement("div",{className:"forecast"},r.a.createElement(p,{temperature:this.state.tomorrowtemperature,icon:this.state.icontomorrow}),r.a.createElement(h,{temperature:this.state.intwodays,icon:this.state.icon2days}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.522a7116.chunk.js.map