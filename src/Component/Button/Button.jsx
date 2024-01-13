import "./Button.css";

const Button = ({children}) => {
    return (
        <div>
            <button className="common-btn">{children}</button>
        </div>
    );
};

export default Button;