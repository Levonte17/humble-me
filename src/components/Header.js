import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
        <nav className="nav">
            <Link to="/">
                <div className='nav-logo'>HUMBLE ME</div>
            </Link>

            <Link to="/jerseys">
                <div className='nav-logo'>JERSEYS</div>
            </Link>
            <Link to="/accesories">
                <div className='nav-logo'>ACCESSORIES</div>
            </Link>
            <Link to="/clothing">
                <div className='nav-logo'>CLOTHING</div>
            </Link>
            
            </nav>
            </div>
    );
}


export default Header;