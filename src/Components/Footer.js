import React from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { Text } from "@fluentui/react";
import { getTheme } from "@fluentui/react";

const theme = getTheme();

const useStyles = makeStyles({
  footer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    color: theme.palette.themeSecondary,
    ...shorthands.padding("6px"),
  },
});

export default function Footer() {
  const styles = useStyles();
  return <Text className={styles.footer}>BizManage Pro</Text>;
}
