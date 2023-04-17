import imageAbout from "../assets/about.jpeg";
import Title from "../components/Title";

const AboutPage = () => {
    return (
        <section className="page">
            <Title title="about" subTitle="us" />

            <div className="section-center about-center">
                <div className="about-img">
                    <img src={imageAbout} className="about-photo" alt="awesome beach" />
                </div>

                <article className="about-info">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>

                    <div className="about-more">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                            unde dolor?
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                            unde dolor?
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                            unde dolor?
                        </p>
                    </div>
          
                    <button type="button" className="btn" id="btn-more">read more</button>
                </article>
            </div>
        </section>
    )
}

export default AboutPage;

