import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from "../actions/GoogleAuthActions/googleAuth";


class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2',()=> {
            window.gapi.client.init({
                clientId: '967271230354-3l7qnrmc61kl2tn62vik8us0sfuh0ccn.apps.googleusercontent.com',
                scope: 'email',
            }).then(() => {
                //Get the gapi auth instance values and set them in this.auth
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log('Is User is signed in ', this.auth.currentUser.get())

                //Check if user is signed in or if user is signed out
                this.onAuthChange(this.auth.isSignedIn.get());

                //Set the store to if user is signed in or is signed out.
                //Listen looks for changes in the users sign-in state
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }



    onAuthChange = (isSignedIn) => {
        console.log('On auth change', isSignedIn)
        if (isSignedIn) {
            //Set the user id as the payload in the store. We can handle the true or false with static values in the reducer
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
        this.auth.signOut();
    };

    renderSignInButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="button" onClick={this.onSignOutClick}>
                    Sign Out with Google
                </button>
            )
        } else {
            return (
                <button className="button" onClick={this.onSignInClick}>
                    Sign In with Google
                </button>
            )
        }

    };

    render() {
        return (
            <div>
                {this.renderSignInButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.isSignedIn)
    return {
        isSignedIn: state.auth.isSignedIn
    }
};



export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);