import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-4 shadow-lg">
            <nav>
                <ol className="flex justify-center space-x-8 text-white font-bold text-lg">
                    <li><Link className="hover:text-yellow-300 transition" to="/">HOME</Link></li>
                    <li><Link className="hover:text-yellow-300 transition" to="/about">ABOUT</Link></li>
                    <li><Link className="hover:text-yellow-300 transition" to="/contact">CONTACT</Link></li>
                    <li><Link className="hover:text-yellow-300 transition" to="/create">CREATE POST</Link></li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar;