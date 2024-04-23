import React from 'react'
import './footer.css'
import { Navbaritmes, socialLinks } from './data'

const foot = () => {
    return (
        <footer className='last'>
            <ul className='foot-menu'>
                {Navbaritmes.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href='/'>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <ul className='foot-menu'>
                {socialLinks.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <span className='end'>Copyright © Backroads Travel Tours Company 2024 All Rights Reserved</span>
        </footer>
    )
}

export default foot;