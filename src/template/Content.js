import React, { Component } from 'react';
import { Home, Contact, Login, Eparkir } from "../pages"
import Eparkir2 from '../pages/eparkir2';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedUser: -1,
            cekin : "",
            harga :0,
            currentCount:0
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

    editButton = newUser => {
        // data unique => findIndex
        const { selectedUser, data: oldData } = this.state

        oldData.splice(selectedUser, 1, newUser)
        this.setState({
            data: oldData,
            selectedUser: -1
        })
        this.props.goToPage("contact")
    }

    updateSelectedUser = idx => {
        this.setState({
            selectedUser: idx
        })
        this.props.goToPage("login")
    }
    halamaneparkir = (e) =>{
        this.props.goToPage("cls")
        this.setState({
            cekin : e
        })
    }
    cekout = () =>{
        console.log(this.state.harga)
        this.props.goToPage("eparkir")
    }

    componentDidMount() {
        // fetch API terus update state
        this.setState({
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
        })
    }


    render() {
        const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
        if (this.props.menu === "login")
            return <Login addData={this.addButton} editData={this.editButton} editUser={dataEdit} />

        if (this.props.menu === "contact")
        // const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
            return <Contact users={this.state.data} setUser={this.updateSelectedUser } />
        if(this.props.menu === "eparkir")
            return <Eparkir halaman={this.halamaneparkir}></Eparkir>
        if(this.props.menu ==="cls")
        return <Eparkir2 hasil={this.state.cekin} cekout={this.cekout}></Eparkir2>

        
        return <Home />
    }
}

export default Content;