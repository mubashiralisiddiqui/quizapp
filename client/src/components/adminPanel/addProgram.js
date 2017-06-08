import React from 'react';
import '../../../public/assets/css/material-dashboard.css';
import axios from 'axios';
// import { browserHistory } from 'react-router';

export default class AddProgram extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            program: ''
        }
    }

    inputBoxValue(eve) {
        var val = eve.target.value;
        this.setState({
            program: val
        })
    }

    addAProgram() {

        axios.post('http://localhost:3050/api/addProgram', { program: this.state.program })
            .then(function (response) {
                console.log(response.data)
            })
            .then(() => {
                this.setState({
                    program: ''
                })
                window.location.assign('/admin/createProgram')
            })
    }

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Add Program</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" onChange={this.inputBoxValue.bind(this)} value={this.state.program} placeholder="Program Name" />
                                        <a className="btn icon-btn btn-success" onClick={this.addAProgram.bind(this)} ><span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>Add Program</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


