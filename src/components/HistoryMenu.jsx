import Dropdown from "react-bootstrap/Dropdown";

const HistoryMenu = ({ history, handleRecent, loadHistory }) => {
    const clearHistory = e => {
        localStorage.clear();
        loadHistory();
    };

    const renderHistory = () => {
        if (history == null) {
            return "";
        } else {
            const list = history.map((city, index) => {
                return (
                    <Dropdown.Item
                        key={index}
                        value={city}
                        onClick={e => {
                            handleRecent(e.target.innerText);
                        }}
                    >
                        {city}
                    </Dropdown.Item>
                );
            });
            return list;
        }
    };

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Recents
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {renderHistory()}
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
