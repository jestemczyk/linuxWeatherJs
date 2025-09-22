#! /usr/bin/env node

let city = process.argv[2] || "Minsk";

function toCelsius(kelvins) {
  return Math.round(kelvins - 273.15);
}

if(city === "-h" || city === "--help"){
	console.log("\n    weatherjs [key] [CITY]\n\nKeys:\n  -h    Open the description(that you are reading now)\n  --help    Open the description(that you are reading now)\n\n[CITY]:\n  Name of the city for the weather forecast. Unless you write it, it will be replaced with 'Minsk'.");
}else{
	try {
	    const appId = "a94d0a5ac08570add4b47b8da933f247";
	    const response = await fetch(
	      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appId}`
	    );
	    if (!response.ok) {
	      throw new error("something went wrong with the server response");
	    }
	    const data = await response.json();
	    console.log(`\nCity: \x1b[31m${data.city.name}\x1b[0m\ntemp: \x1b[31m${toCelsius(data.list[0].main.temp)}°C\x1b[0m\ndescription: \x1b[31m${data.list[0].weather[0].description}\x1b[0m\nwind speed: \x1b[31m${data.list[0].wind.speed} m/s\x1b[0m\n`);
	    
	  } catch (error) {
	    console.error(error.message);
	  }
}


