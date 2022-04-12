import { useContext } from 'react';
import { ConfigContext } from '@context/config'

const Header = () => {
    const { isAmp } = useContext(ConfigContext);

    return (
            isAmp ? (
                <>
                    <header>
                        <div role="button" on="tap:sidebar1.toggle" tabIndex="0" className="hamburger">☰</div>
                        <div className="site-name">News Site</div>
                    </header>
                    <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
                        <div role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabIndex="0" className="close-sidebar">✕</div>
                        <ul className="sidebar">
                            <li><a href="#">Example 1</a></li>
                            <li><a href="#">Example 2</a></li>
                            <li><a href="#">Example 3</a></li>
                        </ul>
                    </amp-sidebar>
                </>
            ) : (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div >
                </nav>
            </header>
        )
    )
}

export default Header;