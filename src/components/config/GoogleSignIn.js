import React from 'react';
import { auth, provider } from '../config/firebase-config'; // Replace with your Firebase configuration import
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import GoogleloginIcon from '../../assets/Icons/GoogleloginIcon.png'

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate('/');
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
     
      <button
        className=" text-white w-64 h-auto font-semibold py-2 px-4 rounded cursor-pointer"
        onClick={signInWithGoogle}>
        <img src={GoogleloginIcon} />
      </button>
    </div>
  );
}

export default Login;
