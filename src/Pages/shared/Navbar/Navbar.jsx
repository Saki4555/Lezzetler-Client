import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    console.log(user);
    return (
        <div className='my-container mx-auto mt-2'>
            <div className="navbar bg-[#FF5733] rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><Link to='/'>Home</Link></li>
                            <li className='font-bold'><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case lg:text-2xl">Lezzetler</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold bg-inherit'><NavLink to='/' className={({ isActive }) => (isActive ? 'text-white' : '')}>Home</NavLink></li>
                        <li className='font-bold'><NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-white' : '')}>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div  className="tooltip tooltip-bottom tooltip-info" data-tip={user?.displayName}>
                                <img className='w-12 h-12 object-cover rounded-lg' src={user?.photoURL} alt='' />
                            </div>
                            <button onClick={handleLogOut} className='btn ml-3'>Sign Out</button>
                        </>
                            : <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;