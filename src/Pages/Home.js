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
const cardItems = [
  {
    title: "inventory management",
    previewImages:
      "https://images.pexels.com/photos/6684765/pexels-photo-6684765.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Manage your inventory efficiently and never run out of stock.",
  },
  {
    title: "customer relationship management",
    previewImages:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Build strong relationships with your customers and improve customer satisfaction.",
  },
  {
    title: "sales tracking",
    previewImages:
      "https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Track your sales and identify opportunities for growth.",
  },
  {
    title: "financial management",
    previewImages:
      "https://images.pexels.com/photos/15189548/pexels-photo-15189548/free-photo-of-gente-oficina-trabajando-sentado.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Manage your finances effectively and ensure the financial health of your business.",
  },
  {
    title: "human resources",
    previewImages:
      "https://images.pexels.com/photos/6585028/pexels-photo-6585028.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Manage your employees effectively and create a positive work environment.",
  },
];
function Home() {
  const styles = useStyles();

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
        {cardItems.map((item, index) => (
          <Stack.Item key={index} className={styles.cardContainer}>
            <MyCard
              title={item.title}
              image={item.previewImages}
              description={item.description}
            />
          </Stack.Item>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
