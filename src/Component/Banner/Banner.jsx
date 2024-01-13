import bannerImg from "../../assets/banner.png";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="banner-bg" id="home">
            <div className="Banner project-width">
            <h2>A New Era for <br /> Home Controlling</h2>
            <p>Be the next level of smart home management user</p>
            <button className="banner-btn">
                Start for free
            </button>
            <img className="banner-img" src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;