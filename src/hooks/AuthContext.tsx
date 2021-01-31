import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import firebase from "firebase";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  currentUser: any;
  login(credentials: SignInCredentials): Promise<firebase.auth.UserCredential>;
  signup(credentials: SignInCredentials): Promise<firebase.auth.UserCredential>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  updateEmail(email: string): Promise<void>;
  updatePassword(password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const signup = async ({ email, password }: SignInCredentials) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = async ({ email, password }: SignInCredentials) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return auth.signOut();
  };

  const resetPassword = async (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = async (email: string) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = async (password: string) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
