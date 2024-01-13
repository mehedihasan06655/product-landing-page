import Button from "../Button/Button";
import "./AboutCard.css";

const AboutCard = ({card}) => {
    const {img, title, description} = card;
    return (
        <div className="card">
            <img  className="card-img" src={img} alt="" />
            <div className="card-content">
            <h6 className="card-title">{title}</h6>
            <p className="card-description">{description}</p>
            </div>
            <Button>Learn More</Button>
        </div>
    );
};

export default AboutCard;