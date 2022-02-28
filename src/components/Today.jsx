import Icon from "./shared/Icon";
import Container from "./shared/Container";

const Today = ({ current }) => {
    let uvColor = "";
    if (current.uvi < 3) {
        uvColor = "success";
    } else if (current.uvi >= 3 && current.uvi <= 5) {
        uvColor = "warning";
    } else {
        uvColor = "danger";
    }
    return (
        <section className="border-bottom">
            <h1 className="display-1">Now in your area</h1>
            <Container>
                <h3>
                    {Math.floor(current.temp)}F | Feels like:
                    {Math.floor(current.feels_like)}
                </h3>
                <div className="row">
                    <Icon icon={`${current.weather[0].icon}`} size="4" />
                    <div className="col-md-3 col-sm-12 p-5">
                        <h4>{current.humidity}% humidity</h4>
                        <h4>{Math.floor(current.wind_speed)} mph winds</h4>
                        <h4>
                            UV Index:{" "}
                            <span className={`text-${uvColor}`}>
                                {current.uvi}
                            </span>
                        </h4>
                        <h3>{current.weather[0].description}</h3>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Today;
