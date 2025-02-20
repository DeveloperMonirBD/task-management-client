import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="navbar container mx-auto px-3 py-3">
            <div className='navbar-start'></div>
            <div className="navbar-end md:flex gap-3">
                <div>
                    {user && user?.email ? (
                        <div className="relative flex items-center gap-2 group">
                            <Link className="flex lg:ml-10 items-center gap-2">
                                <img className="w-14 h-14 rounded-full object-cover object-center" src={user?.photoURL} alt="" />
                            </Link>
                            <span className="absolute min-w-48 top-full right-0 lg:-right-10 mt-2 bg-brandLight text-brandPrimary font-bold border border-gray-200 rounded shadow-md p-3 text-sm hidden group-hover:block">
                                {user.displayName}
                            </span>
                        </div>
                    ) : (
                        <img className="rounded-full" src={userIcon} alt="user" />
                    )}
                </div>

                <div className="hidden lg:flex">
                    {user && user?.email ? (
                        <button onClick={logOut} className="btn bg-brandPrimary text-brandLight hover:text-brandPrimary font-bold">
                            Log out
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/auth/login" className="btn bg-brandPrimary text-brandLight hover:text-brandPrimary font-bold">
                                Login
                            </Link>
                            <Link to="/auth/register" className="btn bg-brandSecondary text-brandLight hover:text-brandSecondary font-bold">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
