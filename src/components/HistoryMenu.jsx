import Dropdown from "react-bootstrap/Dropdown";

const HistoryMenu = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Recents
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default HistoryMenu;
