import React, { Component } from 'react';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            delete: false
        }
        this.idInterval = 0
    }

    deleteUser = (userx) =>{
        const index  = userx
       const newList = this.props.users
       const hasil = newList.splice(index, 1)
        this.setDeleteUser(hasil)
       
    }
    setDeleteUser = (hasil) =>{
        this.setState({
            data : hasil,
            delete : true
        })
        console.log(this.state.data)
    }
    renderList = () => {
        if(this.state.delete === false){
            const list = this.props.users.map((user, idx) => {
                // console.log("user:", user);
                return <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.address}</td>
                    <td>
                        <button onClick={() => this.props.setUser(idx)}>Update</button>
                    </td>
                    <td>
                        <button onClick={() =>this.deleteUser(idx)}>Delete</button>
                    </td>
                </tr>
            })

            return list
        }else {
            const list = this.state.data.map((user, idx) => {
                // console.log("user:", user);
                return <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.address}</td>
                    <td>
                        <button onClick={() => this.props.setUser(idx)}>Update</button>
                    </td>
                    <td>
                        <button onClick={() =>this.deleteUser(idx)}>Delete</button>
                    </td>
                </tr>
            })
            return list
        }

    }

    componentDidMount() {
        this.idInterval = setInterval(() => {
            console.log("ini interval");
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }

    render() {
        return (
            <>
                <table width="400px" border="1px" cellPadding="10px">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>

            </>
        );
    }
}

export default Contact;
