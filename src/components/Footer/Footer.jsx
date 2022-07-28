import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-footer'>
            <ul className='follow-links'>
                <li className='item-follow'>Follow us</li>
                <li className='item-follow'>
                    <Link to='#'>
                        <i className='fa-brands fa-linkedin fa-2xl'></i>
                    </Link>
                    <Link to='#'>
                        <i className='fa-brands fa-square-facebook fa-2xl'></i>
                    </Link>
                </li>
            </ul>
            <div className='mini-container-footer'>
                <ul className=''>
                    <li className='item-list'>
                        <div className='logo'>
                            <Link to='/'>
                                <img
                                    src={require('C:\\Users\\olaru\\Documents\\Bootcamp Javascript\\Assignments_Projects\\Front end\\blog-softbinator-copy\\src\\Images\\Logo\\Image_Logo_Softbinator.png')}
                                    alt='We are Softbinator Teh'
                                    width={131}
                                    height={37}
                                />
                            </Link>
                        </div>
                    </li>
                    <li className='item-list'>Bucharest</li>
                    <li className='item-list'>1-5 Costache Negri, 4th floor</li>
                    <br />
                    <li className='item-list'>Tel: +40757404781.</li>
                    <li className='item-list'>
                        E-mail: contact@softbinator.com
                    </li>
                </ul>
                <p>
                    <b>2022 Softbinator Foundation. All Rights Reserved.</b>
                </p>
            </div>
        </div>
    );
};
export default Footer;
