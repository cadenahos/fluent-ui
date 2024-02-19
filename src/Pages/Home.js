import React from "react";
import { Stack, Text } from "@fluentui/react";
import {
  makeStyles,
  shorthands,
  Divider,
  tokens,
} from "@fluentui/react-components";
import Hero from "../Components/Hero";
import MyCard from "../Components/Card";
const useStyles = makeStyles({
  carrouselStack: {
    width: "100vh",
    height: "100vh",
  },
  carouselItems: {
    display: "flex",
    ...shorthands.margin("20px"),
  },
  divider: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  divChild: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});
function Home() {
  const styles = useStyles();
  const gridItems = Array(4).fill(0); // Replace 6 with the number of items you want

  return (
    <div className="App">
      <Hero />
      <div className={styles.divider}>
        <div className={styles.divChild}>
          <Divider as="div">
            <Text variant="xLarge">Our Clients</Text>
          </Divider>
        </div>
      </div>
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
