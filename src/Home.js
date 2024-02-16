import React from "react";
import MyCard from "./Components/Card";
import { Stack } from "@fluentui/react";
import { makeStyles, shorthands } from "@fluentui/react-components";
const useStyles = makeStyles({
  carrouselStack: {
    width: "100vh",
    height: "100vh",
  },
  carouselItems: {
    display: "flex",
    ...shorthands.margin("20px"),
  },
});
function Home() {
  const styles = useStyles();
  const gridItems = Array(6).fill(0); // Replace 6 with the number of items you want

  return (
    <div className="App">
      <Stack horizontal wrap>
        {gridItems.map((_, index) => (
          <Stack.Item key={index} className={styles.carouselItems}>
            <MyCard />
          </Stack.Item>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
