import React, { useEffect, useState } from "react";
import firebase from "firebase";
import IdeiaCard from "../../components/IdeiaCard";
import { Grid } from "./styles";
type Ideia = {
  id: string;
  title: string;
};

const Home = () => {
  const [data, setData] = useState<Ideia[]>([]);

  useEffect(() => {
    function getData() {
      let newState: any = [];

      firebase
        .firestore()
        .collection("ideias")
        .get()
        .then((snapshot) =>
          snapshot.forEach((doc) => {
            const data = doc.data();
            newState.push({ id: doc.id, ...data });
          })
        );

      setData(newState);
    }

    getData();
  }, []);

  return (
    <>
      <Grid>
        {data.map((ideia) => (
          <IdeiaCard
            key={ideia.id}
            ideia={{
              id: ideia.id,
              title: ideia.title,
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, justo ut tempor faucibus, lectus erat aliquet eros, et mollis lacus arcu in leo",
              category: {
                id: "asdasd",
                name: "Culinária",
              },
            }}
          />
        ))}
      </Grid>
    </>
  );
};

export default Home;
