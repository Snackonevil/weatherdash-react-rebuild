import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Today from "./components/Today";
import FiveDay from "./components/FiveDay";
import { Container } from "react-bootstrap";

function App() {
    // const initialState = {
    //     current: {},
    //     daily: [],
    // };
    const [city, setCity] = useState();
    const [weather, setWeather] = useState({});
    const [isLoading, setLoading] = useState(true);
    async function fetchWeather(coords) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,minutely&units=imperial&appid=9eae40a4431a1836c424f06650dd3e9d`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
    }

    async function fetchCoords(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9eae40a4431a1836c424f06650dd3e9d`;

        const response = await fetch(url);
        const data = await response.json();
        setCity(data.city.name);
        fetchWeather(data.city.coord);
    }

    const loadDefaultCity = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const coordObj = {
                lat: latitude,
                lon: longitude,
            };
            fetchWeather(coordObj);
        });
    };

    const testFunc = city => {
        fetchCoords(city);
    };

    useEffect(() => {
        loadDefaultCity();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <main className="container rounded m-auto my-5 p-4 bg-secondary">
                <h1 className="text-center m-5">LOADING...</h1>
            </main>
        );
    }

    return (
        <div>
            <Header testFunc={testFunc} />
            <main className="container rounded m-auto my-5 p-4 bg-secondary">
                <Today current={weather.current} city={city} />

                <Container>
                    <h1 className="py-3">5-Day Forecast</h1>
                </Container>
                <FiveDay daily={weather.daily} />
            </main>
        </div>
    );
}

export default App;
