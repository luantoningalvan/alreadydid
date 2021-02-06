import React, { useEffect } from "react";
import IdeiaCard from "../../components/IdeiaCard";
import { Grid, Container } from "../../components";
import { ContentLoader, Skeleton } from "./styles";
import { useIdeias } from "../../hooks/IdeiasContext";

const Home = () => {
  const { loading, fetchIdeias, list } = useIdeias();

  useEffect(() => {
    fetchIdeias();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} style={{ margin: "32px 0" }}>
        {!loading ? (
          <>
            {list.map((ideia) => (
              <Grid item xs={4}>
                <IdeiaCard key={ideia.id} ideia={ideia} />
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
