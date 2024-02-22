import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import Menu from "../Components/Menu";

const useStyles = makeStyles({
  mainView: {
    width: "100%",
  },
});
export default function Account() {
  return (
    <Stack vertical>
      <Stack.Item grow={20}>
        <Stack horizontal>
          <Stack.Item grow={1}>
            <Menu />
          </Stack.Item>
          <Stack.Item grow={3}>
            <Outlet />
          </Stack.Item>
        </Stack>
        /
      </Stack.Item>
      <Stack.Item grow={1}>Footer</Stack.Item>
    </Stack>
  );
}
