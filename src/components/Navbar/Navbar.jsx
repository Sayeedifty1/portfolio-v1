import { Link } from "react-router-dom";

const Navbar = () => {

    const NavOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Skills</Link></li>
        <li><Link to="/menu">Projects</Link></li>
        <li><Link to="/order/salads">Contact</Link></li>
    </>
const links = <>
<li className="mr-4">Linkedin</li>
<li className="mr-4">GitHub</li>
<li>Dark-light</li>

</>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Sayeed</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavOptions}
                </ul>
            </div>
            <div className="navbar-end p-2  ">
            <ul className="menu menu-horizontal px-1 mr-4">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;