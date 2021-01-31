import React, { useEffect, useState } from "react";
import IdeiaCard from "../../components/IdeiaCard";
import { Grid, Container } from "../../components";
import { firestore } from "../../config/firebase";
import { ContentLoader, Skeleton } from "./styles";

type Ideia = {
  id: string;
  title: string;
};

const Home = () => {
  const [data, setData] = useState<Ideia[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
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
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{ margin: "32px 0" }}>
        {!loading ? (
          <>
            {data.map((ideia) => (
              <Grid item xs={4}>
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
              </Grid>
            ))}
          </>
        ) : (
          <>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Grid item xs={4}>
                <ContentLoader>
                  <div className="row">
                    <Skeleton className="square-skeleton" />
                  </div>
                </ContentLoader>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
