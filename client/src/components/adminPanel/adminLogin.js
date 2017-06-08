
import React from 'react';
import '../../../public/assets/css/style.css';
import { Store } from '../../store/store.js'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import TokenMiddlware from '../../middlewares/adminMiddlewares/tokenMiddleware';
import adminDefaultPic from '../../../public/assets/images/round.png';
import axios from 'axios';


function mapDispatchToProps(dispatch) {
    return {
        TOKEN: (tok) => { Store.dispatch(TokenMiddlware.saveHisToken(tok)) }
    }
}


class AdminLoginComp extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            adminName: '',
            password: ''
        }
    }

    nameInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            adminName: val
        })
    }

    passInputBox(eve) {
        var val = eve.target.value;
        this.setState({
            password: val
        })
    }

    Signin() {
        var resOfsuccess;
        var resOfToken;

        axios.post('http://localhost:3050/api/adminLogin', this.state)
            .then((response) => {
                resOfsuccess = response.data.success;
                resOfToken = JSON.parse(response.request.response).token
            })
            .then(() => {
                if (resOfsuccess === false) {
                    alert("You are Unauthorize");
                }
                else {
                    var token = resOfToken;
                    this.props.TOKEN(token);
                    browserHistory.push('/admin/dashboard');

                }
            })
    }

    render() {
        
        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">

                        <div className="account-wall">
                            <center style={{ marginBottom: '30px' }}><img className="profile-img" src={adminDefaultPic}
                                alt="" />
                            </center>

                            <input type="text" className="form-control" placeholder="Admin name" onChange={this.nameInputBox.bind(this)} required />
                            <input type="password" className="form-control" placeholder="Password" onChange={this.passInputBox.bind(this)} required />
                            <button className="btn btn-lg btn-primary btn-block" onClick={this.Signin.bind(this)} type="submit">Sign in</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const AdminLogin = connect(null, mapDispatchToProps)(AdminLoginComp);
