import React from 'react';

const NavBar = () => {
    return (
        <nav className="nav">
            <span className="span__button">
                <i className="fa fa__big fa-github" />
            </span>
            <div>
            <button className="button button__small button--primary">
                Projects
            </button>
             <button className="button button__small button--primary ml-1">
                Contact
            </button>
            </div>
        </nav>
    );
}

export default NavBar;
