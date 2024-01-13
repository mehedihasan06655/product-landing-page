import AboutCard from "../AboutCard/AboutCard";
import Button from "../Button/Button";

const About = () => {
    const aboutCardData = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1682685797660-3d847763208e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart integration with smart device",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias aperiam voluptates, atque quod voluptatem."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1682685796186-1bb4a5655653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart integration with smart device",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias aperiam voluptates, atque quod voluptatem."
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart integration with smart device",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias aperiam voluptates, atque quod voluptatem."
        }
    ]
    return (
        <div className="about padding-top project-width">
            <Button>About us</Button>
            <div className="about-content">
                <h3>Meet Mayzer.</h3>
                <p>At-based smart home management software to increase your home security with smart devices integrate.</p>
            </div>
            <div className="aboutCard">
                {
                    aboutCardData.map((card, id)=>(
                        <AboutCard card={card} key={id}></AboutCard>
                    ))
                }
            </div>
        </div>
    );
};

export default About;