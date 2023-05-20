function Main() {

    const bgImageMobile1 = './mobile-image-hero-1.jpg';
    // const bgImageMobile2 = './mobile-image-hero-2.jpg';
    // const bgImageMobile3 = './mobile-image-hero-3.jpg';

    const sections = {
        discover: {
            title: "Discover innovative ways to decorate",
            content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        available: {
            title: "We are available all across the globe",
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        manufacture: {
            title: "Manufactured with the best materials",
            content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        }
    }

    const iconArrow = './icon-arrow.svg';

    return (
        <main className="main">
            <section className="section">
                <div className="section_container">
                    <img 
                        className="section_container_image" 
                        src={bgImageMobile1} 
                        alt="Mobilia"
                        />
                    <div className="section_container_angles">
                        <button className="section_container_angles_buttons">
                            <img 
                            className="angles" 
                            src="./icon-angle-left.svg" 
                            alt=""
                            />
                        </button>
                        <button className="section_container_angles_buttons">
                            <img 
                            className="angles" 
                            src="./icon-angle-right.svg" 
                            alt=""/>
                        </button>
                    </div>
                </div>
                <div>
                    <h2>{sections.discover.title}</h2>
                    <p>{sections.discover.content}</p>
                </div>
                <button>
                    <span>Shop now</span>
                    <img src={iconArrow} alt=""/>
                </button>

            </section>
        </main>
    );
}
  
  export default Main;