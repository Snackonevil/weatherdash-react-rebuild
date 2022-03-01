import Icon from "./shared/Icon";

const Day = ({ day }) => {
    let unixMillisec = day.dt * 1000;
    let dateObject = new Date(unixMillisec);
    let date = dateObject.toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return (
        <div className="col-lg col-md-12 col-sm-12 p-3 m-1 border rounded text-center">
            <h6>{date}</h6>
            <Icon icon={`${day.weather[0].icon}`} size="2" />
            <h4>{Math.floor(day.temp.day)}&#176;F</h4>
            <h5>{day.humidity}% Humidity</h5>
            <h5>{Math.floor(day.wind_speed)} mph winds</h5>
            <p>{day.weather[0].description}</p>
        </div>
    );
};

export default Day;
