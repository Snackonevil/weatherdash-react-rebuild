// import React, { createContext } from "react";

// const initialState = {
//     current: {},
//     daily: {},
// };

// export const WeatherContext = createContext(initialState);

// export const WeatherProvider = ({ children }) => {
//     async function fetchCoords(city) {
//         const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9eae40a4431a1836c424f06650dd3e9d`;

//         const response = await fetch(url);
//         const data = await response.json();
//     }

//     async function fetchWeather(city) {
//         const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=-84&exclude=hourly,minutely&units=imperial&appid=9eae40a4431a1836c424f06650dd3e9d`;
//         const response = await fetch(url);
//         const data = await response.json();
//     }

//     function loadDefaultCity() {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             const coordObj = {
//                 lat: latitude,
//                 lon: longitude,
//             };
//             fetchWeather(coordObj);
//         });
//     }
// };
