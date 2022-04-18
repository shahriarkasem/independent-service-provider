import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const hangleGoogleLogin = () => {
        signInWithGoogle();
    }

    return (
        <section>
            <div>
                <div>
                    <div className='google-login-container'>
                        <div className='google-login'></div>
                        <p className='px-2 mt-2'>or</p>
                        <div className='google-login'></div>
                    </div>
                    <div className='google-login-btn '>
                        <button onClick={hangleGoogleLogin} className='btn btn-primary fw-bold w-50'>Google Login</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialLogin;