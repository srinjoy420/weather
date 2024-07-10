const input_box=document.querySelector(".input-box");
const searchbtn=document.querySelector(".search_btn");
const weatherimage=document.querySelector(".weather-image");
const temperature=document.querySelector(".temperature");
const details=document.querySelector(".details");
const humidity=document.querySelector(".hum_chance");
const wind=document.querySelector(".air_speed");
 const locationnotfound=document.querySelector(".location_not_found");
const weatherbody=document.querySelector(".weather_body");

async function ckeckweather(city){
    const api_key="480bd098d72b164927694ec93cd8ade1";
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let promise=await fetch(api);
    // console.log(promise);
    let weather_data=await promise.json();
    console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    details.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind.innerHTML=`${weather_data.wind.speed}Km/hr`;
    // now the time for the images
    if(weather_data.weather[0].main==="clear"){
        weatherimage.src="images/clear.png";
    }
    else if(weather_data.weather[0].main==="Mist"){
        weatherimage.src="images/mist.png";

    }
    else if(weather_data.weather[0].main==="Rain"){
        weatherimage.src="images/rain.png";

    }
    else if(weather_data.weather[0].main==="Clouds"){
        weatherimage.src="images/cloud.png";

    }
    else if(weather_data.weather[0].main==="Snow"){
        weatherimage.src="images/snow.png";

    }
    console.log(weather_data);

    // if the location not found
   

}

searchbtn.addEventListener("click",()=>{
    // console.log(input_box.value);
    ckeckweather(input_box.value);
})
 

 


