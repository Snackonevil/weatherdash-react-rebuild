import Icon from "./shared/Icon";
import { Container, Row } from "react-bootstrap";

const Today = ({ current, city }) => {
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
            <Container>
                <h1 className="display-1">
                    Right now in {!city ? "your area" : city}
                </h1>
                <h3 style={{ color: "steelblue" }}>
                    {Math.floor(current.temp)}&#176;F | Feels like:{" "}
                    {Math.floor(current.feels_like)}&#176;F
                </h3>
                <Row>
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
                </Row>
            </Container>
        </section>
    );
};

export default Today;
