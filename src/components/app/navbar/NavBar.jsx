import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav">
            <span className="span__button">
                <i className="fa fa-github" />
            </span>
            <button className="button button__small button--primary">
                Projects
            </button>
        </nav>
    );
}

export default NavBar;
