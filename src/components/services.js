import './services.css'
import { services } from './data';
function Services() {
    return (
        <div className='ourservices' >
            <h1>Our <span>Services</span></h1>

            <div className='content'>
                <ul className='serviceslist'>
                    {services.map((item, index) => {
                        return (
                            <li key={index}>
                                <div >
                                    <i className={item.icon}></i>
                                    <h2>{item.title}</h2>
                                    <h4>{item.text}</h4>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    );
}

export default Services;