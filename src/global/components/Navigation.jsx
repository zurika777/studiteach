import {Link, useLocation} from 'react-router-dom';
export  function Navigation(props) {
    const {customClass} = props;
    let location = useLocation();
    return (
        <nav className={customClass}>

            <ul>
                <li><Link to="/" className={(!location.pathname || location.pathname === '/') ?
                    'active' : ''}>
                    Home
                </Link>
                </li>
                <li><Link to="/about"className={location.pathname === '/about' ?
                    'active' : ''}>
                    About
                </Link>
                </li>
                <li><Link to="/contact"className={location.pathname === '/contact' ?
                    'active' : ''}>
                    Contac
                </Link>
                </li>
                    <li><Link to="/products"className={location.pathname === '/products' ?
                    'active' : ''}>
                    products
                </Link>
                </li>
            </ul>
        </nav>


    )
}
// TODO useLocation სად ვიმყოფწბით იმის გაგება ანუ active რომელ ლინკზე