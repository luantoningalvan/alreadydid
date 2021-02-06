import React, { createContext, useState, useContext } from "react";
import { firestore } from "../config/firebase";

interface UsersContextData {
  user: any;
  fetchUser(uid: string): Promise<void>;
  loading: boolean;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export const UsersProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchUser = async (uid: string) => {
    setLoading(true);
    const docRef = firestore.collection("users").doc(uid);

    docRef.get().then((res) => {
      setCurrentUser(res.data());
      setLoading(false);
    });
  };

  const value = {
    user: currentUser,
    fetchUser,
    loading,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export function useUsers(): UsersContextData {
  const context = useContext(UsersContext);

  return context;
}
