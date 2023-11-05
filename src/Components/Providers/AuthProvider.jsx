import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return signInWithPopup(auth);
  };

  const handleLogout = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
  };

  useEffect(() => {
    const unSubscribe = () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setLoading(false);
        }
      });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, handleEmailPassSignin, handleEmailPassSignup, handleGoogleLogin, handleLogout, profileUpdate };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
