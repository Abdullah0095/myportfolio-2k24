import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-currant">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl border-2 border-white text-white hover:text-green-400">RESUME</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-xl text-white px-8">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='projects'>Projects</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;