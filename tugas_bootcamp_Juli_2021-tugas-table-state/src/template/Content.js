import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {  Contact, Login } from "../pages"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Admin",
                password: "1234",
                address: "Jakarta"
            }, {
                username: "User",
                password: "1234",
                address: "Bogor"
            }, {
                username: "Operator",
                password: "1234",
                address: "Depok"
            }]
        }
    }

    addButton = newUser => {
        const newData = this.state.data
        newData.push(newUser)
        this.setState({
            data: newData
        })
        this.props.goToPage("contact")
    }
    cekLogin = (contact) =>{
        this.props.goToPage(contact)
    }

    render() {
        // if (this.props.menu === "login")
        //     return 

        // if (this.props.menu === "contact")
        //     return 

        // return <Home />
        return(
            <Container>
                <Login addData={this.addButton} allUser={this.state.data} cekLogin={this.cekLogin} />
                <Contact users={this.state.data} />
            </Container>
        )
    }
}

export default Content;