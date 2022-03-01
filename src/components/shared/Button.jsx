const Button = ({ func, text }) => {
    return (
        <button className="btn btn-secondary" onClick={func}>
            {text}
        </button>
    );
};

export default Button;
