import Title from "./Title";
import { Link } from "react-router-dom";
import MapIcon from "@mui/icons-material/Map";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="tour-center featured-center">
        {tours.map((tour) => {
          if(tour.id < 4){
              return (
              <article className="tour-card" key={tour.id}>
                <div className="tour-img-container">
                  <img src={tour.image} className="tour-img" alt="" />
                  <p className="tour-date">{tour.date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.text}</p>
                  <div className="tour-footer">
                    <p className="tour-location">
                      <span>
                        <MapIcon />
                      </span>
                      {tour.location}
                    </p>
                    <p>{tour.duration} days</p>
                    <p>from ${tour.price}</p>
                  </div>
                </div>
              </article>
            );
          }
        })}
      </div>

      <div className="tour-center">
        <Link to={"tours/"} className="btn tour-btn">
          explore
        </Link>
      </div>
    </section>
  );
};

export default Tours;
