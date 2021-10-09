import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css"


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        const target = this.props.target 
        return (
            <Link  to ={target}
                className="menu"
                style={{ backgroundColor: this.props.color }}
                onClick={this.props.fn}
            >
                {this.props.children}
            </Link>
        );
    }
}

export default Menu;