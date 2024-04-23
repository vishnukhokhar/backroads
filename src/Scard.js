
import '../src/components/tours.css'
// import { touroptiondata } from './components/data';
function Sdata(props) {
    return (
        <div className="s-card">
            <div className="s-image">
                <img src={props.title} alt="product"></img>
            </div>
            <div className='scontent'>
                <h3 className='heading'>{props.title}</h3>
                <p className='desc'>{props.description}</p>
                <div className='details'>
                    <div className='locations'>{props.location}</div>
                    <div className='durations'>{props.duration}</div>
                    <div className='prices'>po{props.price}</div>

                </div>

            </div>
        </div>
    );
}

export default Sdata;