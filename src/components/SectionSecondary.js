import aboutDark from '../img/image-about-dark.jpg';
import aboutLight from '../img/image-about-light.jpg';

function SectionSecondary() {

    const sectionSecondary = {
        title: "About our furniture",
        content: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."
    }

    return (
        <section className="section_secondary">
            <img 
                className="section_secondary_image" 
                src={aboutDark} 
                alt="Mobilia"
                />
            <div className="section_secondary_textContainer">
                <h2>{sectionSecondary.title}</h2>
                <p>{sectionSecondary.content}</p>
            </div>
            <img 
                className="section_secondary_image" 
                src={aboutLight} 
                alt="Mobilia"
                />
        </section>
    );
}
  
export default SectionSecondary;