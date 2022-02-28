const Icon = ({ icon, size }) => {
    return (
        <img
            className="col-md-3 col-sm-12"
            src={`https://openweathermap.org/img/wn/${icon}@${size}x.png`}
            alt="icon"
        />
    );
};

export default Icon;
