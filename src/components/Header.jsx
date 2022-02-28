import { useState } from "react";

const Header = ({ fetchCoords }) => {
    const [city, setCity] = useState("");

    const submit = e => {
        e.preventDefault();
        // fetchCoords(city);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand">
                    Weather Dashboard
                </a>
                <form className="d-flex">
                    <input
                        type="text"
                        placeholder="Enter City"
                        onChange={e => setCity(e.target.value)}
                    />
                    <button className="btn btn-secondary" onClick={submit}>
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Header;
