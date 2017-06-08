import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';

export default class AllPrograms extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            availablePrograms: [],
            success: 'none'
        }
        this.flag = true
    }

    componentWillUnmount() {
        this.flag = false
    }

    componentDidMount() {
        var allPrograms = [];
        axios.get('http://localhost:3050/api/getAllPrograms')
            .then(function (response) {
                allPrograms = response.data
            })
            .then(() => {
                if (this.flag === true) {
                    this.setState({
                        availablePrograms: allPrograms
                    })
                }
            })
    }

    del(Pid) {
        // console.log(Pid)
        axios.delete('http://localhost:3050/api/deleteProgram/' + Pid)
            .then(function (response) {
                console.log('deleted')
            })
            .then(() => {
                this.setState({
                    success: 'block'
                })
                window.location.assign('/admin/createProgram');

            })
            .catch(() => {
                alert('Failed To Delete');
            })
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">All Programs</a></li>
                            </ul>
                            <br />
                            {this.state.availablePrograms.map((Proname) => {
                                return (
                                    <div key={Proname._id}>
                                        <a href="#" className="list-group-item">{Proname.program}<span style={{ float: 'right' }}><i onClick={this.del.bind(this, Proname._id)} className="fa fa-trash-o" aria-hidden="true"></i></span></a>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="alert alert-success" style={{ display: this.state.success }}>
                            <b>Successfully Deleted !!</b>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
