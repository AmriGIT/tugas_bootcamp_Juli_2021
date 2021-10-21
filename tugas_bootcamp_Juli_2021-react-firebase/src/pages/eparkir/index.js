import React, { Component } from 'react';
import { RowInput } from '../../components';
import "../login/login.css"


class Eparkir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cekin : "",
            harga :0,
            currentCount:0,
        }
    }

    cekInparkir = () =>{
        const jns = this.state.cekin
        console.log(jns)
        if (jns === "2") {
            console.log("2000")
            this.props.halaman(jns) 
        }else{
            console.log("4000")
            this.props.halaman(jns)
        }
    }

    setValue = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <>
                <div className="login-containter">
                    <RowInput
                        label="Jenis Kendaraan Roda"
                        type="number"
                        name="cekin"
                        change={this.setValue}
                        valueState={this.state.cekin}
                    ></RowInput>
                    <div className="row-button">
                        <button onClick={this.cekInparkir}>Cek IN</button>
                    </div>
                    <div>
                        <h1>Kendaraan Roda {this.props.result[2]}</h1>
                        <h1>Biaya Parkir sebesar Rp. {this.props.result[0]}</h1>
                        <h1>Durasi Parkir {this.props.result[1]} detik</h1>
                    </div>
                </div>
            </>
        );
    }
}

export default Eparkir;
