import Dropdown from "react-bootstrap/Dropdown";

const HistoryMenu = ({ history, handleHistory }) => {
    const clearHistory = e => {
        localStorage.clear();
    };
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Recents
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {history.map((city, index) => {
                        return (
                            <Dropdown.Item
                                key={index}
                                value={city}
                                onClick={e => {
                                    handleHistory(e.target.innerText);
                                }}
                            >
                                {city}
                            </Dropdown.Item>
                        );
                    })}
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={clearHistory}>
                        Clear History
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default HistoryMenu;
