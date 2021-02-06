import React, { createContext, useState, useContext } from "react";
import { firestore } from "../config/firebase";

type Ideia = {
  id: string;
  title: string;
  description: string;
  category: string;
};

interface FormData {
  title: string;
  description: string;
  category: string;
}

interface IdeiasContextData {
  list: Ideia[];
  fetchIdeias(): Promise<void>;
  insertIdeia(data: FormData, callback?: () => void): Promise<void>;
  loading: boolean;
}

const IdeiasContext = createContext<IdeiasContextData>({} as IdeiasContextData);

export const IdeiasProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchIdeias = async () => {
    let newState: any = [];
    setLoading(true);

    firestore
      .collection("ideias")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          newState.push({ id: doc.id, ...data });
        });

        setData(newState);
        setLoading(false);
      });
  };

  const insertIdeia = async (data: FormData, callback?: () => void) => {
    setLoading(true);

    firestore
      .collection("ideias")
      .add(data)
      .then(() => {
        setLoading(false);
      });

    fetchIdeias();
    callback && callback();
  };

  const value = {
    list: data,
    loading,
    fetchIdeias,
    insertIdeia,
  };

  return (
    <IdeiasContext.Provider value={value}>{children}</IdeiasContext.Provider>
  );
};

export function useIdeias(): IdeiasContextData {
  const context = useContext(IdeiasContext);

  return context;
}
