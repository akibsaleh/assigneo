import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileInfo, setProfileInfo] = useState(null);

  const handleEmailPassSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleEmailPassSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogout = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = async () =>
      onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        if (currentUser) {
          setUser(currentUser);
          setLoading(false);
          axios
            .post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
            .then()
            .catch((err) => console.log(err));
        } else {
          setProfileInfo({});
          axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true });
        }
      });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, handleEmailPassSignin, handleEmailPassSignup, handleGoogleLogin, handleLogout, profileInfo, setProfileInfo };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
