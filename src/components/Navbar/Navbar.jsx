import * as React from 'react';
import { Link } from 'react-router-dom';
const App = () => {
    return (
        <nav>
            <ul className='navlinks'>
                <li className='Link'>
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
                <li className='Link'>
                    <Link to='#'>About us</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Services</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Education</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Foundation</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Investors</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Careers</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Softbinators Labs</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Blog</Link>
                </li>
                <li className='Link'>
                    <Link to='#'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger-toggle'>
                <i className='fas fa-bars fa-xl'></i>
            </div>
        </nav>
    );
};
export default App;
