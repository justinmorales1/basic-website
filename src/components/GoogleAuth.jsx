import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from "../actions/GoogleAuthActions/googleAuth";


class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2',()=> {
            window.gapi.client.init({
                clientId: '967271230354-3l7qnrmc61kl2tn62vik8us0sfuh0ccn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log('Is User is signed in ', this.auth.currentUser.get())

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }



    onAuthChange = (isSignedIn) => {
        console.log('On auth change', isSignedIn)
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };


    //Use this function to sign into google auth
    onSignInClick = () => {
        this.auth.signIn();
    };

    //Use this function to sign out of google auth
    onSignOutClick = () => {
        this.auth.signOut()
    };

    render() {

        return (
            <div>
                <button className="button" onClick={this.onSignInClick}>
                    Sign In with Google
                </button>
                <button className="button" onClick={this.onSignOutClick}>
                    Sign Out with Google
                </button>

            </div>
        )
    }
}


export default connect(null,{signIn,signOut})(GoogleAuth);