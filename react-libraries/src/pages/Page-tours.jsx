import { useState } from 'react';
import {useSpring, a } from "@react-spring/web";
import MapIcon from "@mui/icons-material/Map";
import { tours } from '../data';
import Title from '../components/Title';

export default function ToursPage() {
   

    return (
        <section className='page'>
            <Title title="featured" subTitle="tours" />

            <div className='tour-center featured-center'>
                {tours.map((tour) => {
                    const [flipped, set] = useState(false)
                    const { transform, opacity } = useSpring({
                    opacity: flipped ? 1 : 0,
                    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
                    config: { mass: 5, tension: 500, friction: 80 },
                    })

                    return(
                        <div className='container' onClick={() => set(state => !state)}>
                            <a.div className='c front' 
                            style={{opacity: opacity.to(o => 1 - o), transform}} >
                                <img src={tour.image} alt='tour image' />

                                <p className="tour-date">{tour.date}</p>
                            </a.div>

                            <a.div className='c back' style={{opacity, transform, rotateX: '180deg'}}>
                                <h4>{tour.title}</h4>

                                <p>{tour.text}</p>

                                <div className='tour-footer'>
                                    <p className='tour-location'>
                                        <span><MapIcon /></span>
                                        {tour.location}
                                    </p>
                                    <p>{tour.duration} days</p>
                                    <p>from ${tour.price}</p>
                                </div>
                            </a.div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
} 
