import React from 'react'
import './About.css'
import abt_img from '../../images/about.jpeg'
const About = () => {
    return (

        <div className='about'>
            <h1>About <span>Us</span></h1>

            <div className='content'>
                <div className='abt-left'>
                    <img src={abt_img} alt='' className='abt-img'></img>
                </div>
                <div className='abt-right'>

                    <h3>Explore The Difference</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <p>
                        <p>

                        </p>
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                        quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                        unde dolor?
                    </p>
                    <a href="/">   <button>Read More</button> </a>
                </div>
            </div>

        </div>





        // <section class="section" id="about">
        //     <div class="section-title">
        //         <h2>about <span>us</span></h2>
        //     </div>

        //     <div class="section-center about-center">
        //         <div class="about-img">
        //             <img
        //                 src={abt_img}
        //                 class="about-photo"
        //                 alt="awesome beach"
        //             />
        //         </div>
        //         <article class="about-info">
        //             <h3>explore the difference</h3>
        //             <p>
        //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        //                 quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
        //                 unde dolor?
        //             </p>
        //             <p>
        //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        //                 quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
        //                 unde dolor?
        //             </p>
        //             <a href="#" class="btn">read more</a>
        //         </article>
        //     </div>
        // </section>
    )
}

export default About