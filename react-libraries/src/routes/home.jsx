import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <section className="hero" id="home">
            <div className="hero-banner">
                <h1>continue exploring</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  explicabo debitis est autem dicta.
                </p>
                <Link to={'tours/'} className="btn hero-btn">
                  explore tours
                </Link>
            </div>
        </section>

        <section className="section" id="about">
            <Title title="about" subTitle="us" />

            <div className="section-center about-center">
              <div className="about-img">
                <img src={imageAbout} className="about-photo" alt="awesome beach" />
              </div>
              <article className="about-info">
                <h3>explore the difference</h3>
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
                <a href="#" className="btn">
                  read more
                </a>
              </article>
            </div>
        </section>
    </>
)}

