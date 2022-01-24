import React, { Component } from 'react'
import './Navigation.css';
import { NavigationItems } from './NavigationItems';
import { Link } from "react-scroll"



class Navigationbar extends Component {
    state = { clicked: false };

    // function to handle menu button when clicked
    handleButtonClick = () => {
        this.setState(
            { clicked: !this.state.clicked }
        )
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h2 className="navLogo">Car Yard</h2>

                <div className="menu-icon" onClick={this.handleButtonClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {NavigationItems.map((item, index) => {
                        return (
                            <Link>
                                <a className={item.className} href={item.url} smooth={true} duration={1000} to={item.scroll}>
                                    {item.title}
                                </a>
                            </Link>
                        )
                    })}


                </ul>
            </nav>
        )
    }


}

export default Navigationbar
