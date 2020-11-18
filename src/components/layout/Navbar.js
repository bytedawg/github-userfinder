import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';





class Navby extends Component {

    static defaultProps = {
        title: 'Github Finder'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (


            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faCoffee} className="iconBrand" />
                </Navbar.Brand>
                {this.props.title}
            </Navbar>
        );
    }
}


export default Navby;
