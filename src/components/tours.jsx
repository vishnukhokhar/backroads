import { touroptiondata } from './data.js';

import '../components/tours.css'

function TourOptions() {
    return (
        <div className='tour'>
            <div className='scard'>
                {touroptiondata.map(tour => (
                    <div className="s-card" key={tour.title}>
                        <div className="simage">
                            <img src={tour.img} alt={tour.title} />
                        </div>
                        <div className='scontent'>
                            <h3 className='heading'>{tour.title}</h3>

                            
                            }
                            <p className='desc'>{tour.description}</p>
                            <div className='details'>
                                <div className='locations'>{tour.location}</div>
                                <div className='durations'>{tour.duration}</div>
                                <div className='prices'>{tour.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TourOptions;