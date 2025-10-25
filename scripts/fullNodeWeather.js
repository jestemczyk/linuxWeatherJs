#! /usr/bin/env node

let city = process.argv[2] || "Berlin";

function toCelsius(kelvins) {
  return Math.round(kelvins - 273.15);
}

const main = { temp: "20 C", feels: "22 C", humidity: "80%", other: "clouds" };
const wind = {
  speed: "4.67 m/s",
  direction: "North West",
  directionDegrees: "306 deg",
};

console.log("┌────────┬────────┬────────┬────────┬────────┐");
console.log("│        │ temp   │ feels  │humidity│ other  │");
console.log("│  MAIN  │        │ like   │        │        │");
console.log("│  INFO  ├────────┼────────┼────────┼────────┤");
console.log(
  `│        │ \x1b[31m20 С\x1b[0m   │ \x1b[31m22 С\x1b[0m   │ \x1b[31m85%\x1b[0m    │ \x1b[31mclouds\x1b[0m │`
);
console.log("│────────┼────────┼────────┼────────┼────────┘");
console.log("│        │ speed  │ dir    │ dir in │");
console.log("│        │        │        │ degrees│");
console.log("│  Wind  ├────────┼────────┼────────┤");
console.log(
  "│        │\x1b[31m4.67\x1b[0m    │\x1b[31mNW\x1b[0m      │\x1b[31m306\x1b[0m     │"
);
console.log(
  "│        │ \x1b[31mm/s\x1b[0m    │        │ \x1b[31mdeg\x1b[0m    │"
);
console.log("└────────┴────────┴────────┴────────┘");
