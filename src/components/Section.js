import bgImageMobile1 from '../img/mobile-image-hero-1.jpg';
import bgImageMobile2 from '../img/mobile-image-hero-2.jpg';
import bgImageMobile3 from '../img/mobile-image-hero-3.jpg';
import iconArrow from '../img/icon-arrow.svg';
import iconAngleLeft from '../img/icon-angle-left.svg';
import iconAngleRight from '../img/icon-angle-right.svg';

function Section() {

    const sections = {
        discover: {
            image: bgImageMobile1,
            title: "Discover innovative ways to decorate",
            content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        available: {
            image: bgImageMobile2,
            title: "We are available all across the globe",
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        manufacture: {
            image: bgImageMobile3,
            title: "Manufactured with the best materials",
            content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        }
    }

    let index = 0

    const sectionsArray = [
        [sections.discover.image, sections.discover.title, sections.discover.content],
        [sections.available.image, sections.available.title, sections.available.content],
        [sections.manufacture.image, sections.manufacture.title, sections.manufacture.content]
    ]

    function toggleSectionsPlus(e) {
        index++
        if (index > sectionsArray.length - 1) {
            index = 0;
        }
            
        const image = e.target.parentNode.parentNode.parentNode.children[0];
        image.setAttribute("src", sectionsArray[index][0]);

        const title = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        title.textContent = sectionsArray[index][1];

        const content = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[1];
        content.textContent = sectionsArray[index][2];
    }

    function toggleSectionsMinus(e) {
        index--
        if (index < 0) {
            index = sectionsArray.length - 1;
        }
            
        const image = e.target.parentNode.parentNode.parentNode.children[0];
        image.setAttribute("src", sectionsArray[index][0]);

        const title = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        title.textContent = sectionsArray[index][1];

        const content = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[1];
        content.textContent = sectionsArray[index][2];
    }

    return (
        <section className="section">
            <div className="section_imgContainer">
                <img 
                    className="section_imgContainer_image" 
                    src={sections.discover.image}
                    alt="Mobilia"
                    />
                <div className="section_imgContainer_angles">
                    <button onClick={toggleSectionsMinus} className="section_imgContainer_angles_buttons">
                        <img 
                        className="angles" 
                        src={iconAngleLeft} 
                        alt=""
                        />
                    </button>
                    <button onClick={toggleSectionsPlus} className="section_imgContainer_angles_buttons">
                        <img 
                        className="angles" 
                        src={iconAngleRight} 
                        alt=""/>
                    </button>
                </div>
            </div>
            <div className="section_textContainer">
                <h2>{sections.discover.title}</h2>
                <p>{sections.discover.content}</p>
                <button>
                    <span>Shop now</span>
                    <img src={iconArrow} alt=""/>
                </button>
            </div>
        </section>
    );
}
  
export default Section;