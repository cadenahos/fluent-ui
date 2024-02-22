import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@fluentui/react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const useStyles = makeStyles({
  mainViewContent: {
    ...shorthands.padding("15px"),
    height: "80vh",
    overflowY: "scroll",
  },
});
export default function Account() {
  const styles = useStyles();
  return (
    <Stack vertical>
      <Stack.Item grow={10}>
        <Stack horizontal>
          <Stack.Item grow={1}>
            <Menu />
          </Stack.Item>
          <Stack.Item grow={130} className={styles.mainViewContent}>
            <Outlet />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item grow={1}>
        <Footer />
      </Stack.Item>
    </Stack>
  );
}
