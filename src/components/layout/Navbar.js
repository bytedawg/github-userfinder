import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';






const Navby = ({title}) => {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faGithub} />
                </Navbar.Brand>
                {title}
            </Navbar>
        );
}

Navby.defaultProps = {
    title: 'User Finder',
};

Navby.propTypes = {
    title: PropTypes.string.isRequired,
    // icon: PropTypes.string.isRequired
};

export default Navby;
