import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import ActionBundle from '../../actions/actionbundle.js';
import {connect}from 'react-redux'
class AppBarExampleIcon extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false
        }
    }


    componentWillMount() {
     
        // firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                // User is signed in.
                this.setState({ isLogged: true });
                console.log(this.state.isLogged);
                // ...
            } else {
                // User is signed out.
                this.setState({ isLogged: false });
                return console.log(this.state.isLogged);
            }
      //  }.bind(this));
    }

    logout(e) {
        e.preventDefault();
        
    }
    render() {
        return (
            <div>
                <center>
                    <div>
                        <AppBar
                            title="BloodBank"
                            iconStyleLeft={{ "display": "none" }} style={{ "backgroundColor": "#af111c" }}
                            iconElementRight={this.state.isLogged === true ? <FlatButton label="Logout" onClick={this.logout.bind(this)} /> : void 0}
                        />
                    </div>

                    {this.props.children}
                </center>
            </div>
        )
    }
}
function mapStateToProps(state){
  return{
    auth: state.AuthReducer
  }
}
function mapDispatchToProps(dispatch){
return{
  Logout:(userSignin)=>{
   dispatch(signOut(userSignin));
  }
}
}


export default connect(mapStateToProps,mapDispatchToProps)(AppBarExampleIcon);



