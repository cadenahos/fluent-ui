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
  cardContainer: {
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
  textContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    ...shorthands.padding("20px"),
  },
  title: {
    textAlign: "center",
    fontSize: "3em",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground2BrandHover,
    paddingBottom: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalS,
  },
  description: {
    textAlign: "center",
    fontSize: "1.5em",
    color: tokens.colorNeutralForeground2BrandHover,
    paddingBottom: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalL,
  },
});
function Home() {
  const styles = useStyles();
  const gridItems = Array(4).fill(0); // Replace 6 with the number of items you want

  return (
    <div className="App">
      <Hero />

      <Stack className={styles.textContainer}>
        <Text className={styles.title}>BizManage Pro</Text>
        <Text className={styles.description}>
          BizManage Pro is a comprehensive business management software designed
          to streamline your business operations. It offers a suite of tools
          including inventory management, customer relationship management
          (CRM), sales tracking, financial management, and human resources. With
          its intuitive interface and powerful features, BizManage Pro helps you
          to effectively manage your business processes, improve productivity,
          and drive growth. Whether you're a small business or a large
          enterprise, BizManage Pro is the perfect solution to meet your
          business needs..
        </Text>
      </Stack>
      {/* <div className={styles.divider}>
        <div className={styles.divChild}>
          <Divider as="div">
            <Text variant="xLarge">Our Clients</Text>
          </Divider>
        </div>
      </div> */}
      <Stack horizontal wrap>
        {gridItems.map((_, index) => (
          <Stack.Item key={index} className={styles.cardContainer}>
            <MyCard />
          </Stack.Item>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
