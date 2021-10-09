import React, { Component } from 'react';
import Menu from '../components/menu';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{
                marginTop: 10,
                display: 'flex',
                justifyContent: "flex-start",
                gap: 10,
                alignItems: "center"
            }}>
                <Menu color="red" target="/" >Home</Menu>
                <Menu color="green" target="/contact">Contact</Menu>
                <Menu color="blue" target="/login">Log In</Menu>
                {/* <Menu color="orange">E-Parkir</Menu> */}



                {/* <Menu color="red" fn={() => this.props.goToPage("home")}>Home</Menu>
                <Menu color="green" fn={() => this.props.goToPage("contact")}>Contact</Menu>
                <Menu color="blue" fn={() => this.props.goToPage("login")}>Log In</Menu>
                <Menu color="orange" fn={() => this.props.goToPage("eparkir")}>E-Parkir</Menu> */}
            </div>
        );
    }
}

export default Navbar;