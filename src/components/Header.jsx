import { useState, useEffect } from "react";
import Button from "./shared/Button";
import HistoryMenu from "./HistoryMenu";

const mockHistory = ["atlanta", "san diego", "boulder"];

const Header = ({ fetchCoords }) => {
    const [city, setCity] = useState("");
    const [history, setHistory] = useState([]);

    const saveHistory = history => {
        localStorage.setItem("history", JSON.stringify(history));
    };

    const handleHistory = city => {
        if (history.indexOf(city) === -1) {
            setHistory([city, ...history]);
            saveHistory([city, ...history]);
        } else {
            // if searched before, removes from current index and adds it to front of list to be retrieved first,
            const filtered = history.filter(item => item != city);
            setHistory([city, ...filtered]);
            saveHistory([city, ...filtered]);
        }
    };

    const handleRecent = city => {
        handleHistory(city);
        fetchCoords(city);
    };

    const handleSubmit = e => {
        e.preventDefault();
        e.target.previousElementSibling.value = "";
        handleHistory(city);
        fetchCoords(city);
    };

    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem("history"));
        setHistory(history);
    };

    useEffect(() => {
        loadHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <Button text="Search" func={handleSubmit} />
                </form>
                <div className="d-flex">
                    <HistoryMenu
                        history={history}
                        handleRecent={handleRecent}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;
