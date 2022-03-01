import { useState } from "react";
import Button from "./shared/Button";
import HistoryMenu from "./HistoryMenu";

const Header = ({ testFunc }) => {
    const [city, setCity] = useState("");
    const [history, setHistory] = useState();

    const clearHistory = () => {
        console.log("cleared");
    };

    const submit = e => {
        e.preventDefault();
        testFunc(city);
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
                    <Button text="Search" func={submit} />
                </form>
                <div className="d-flex">
                    <HistoryMenu />
                    <Button text="Clear" func={clearHistory} />
                </div>
            </div>
        </nav>
    );
};

export default Header;
