import React from "react";
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
// import {Navigation24Filled} from "@fluentui/react-icons";
// import { Icon } from "@fluentui/react-components";
export default function Navbar() {
  return (
    <Menu>
      <MenuTrigger>
        <Button
          // icon={<Navigation24Filled>}
          title="Company Name"
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem icon={<Icon iconName="Mail" />}>Option 1</MenuItem>
          <MenuItem icon={<Icon iconName="Calendar" />}>Option 2</MenuItem>
          <MenuItem icon={<Icon iconName="SignIn" />}>Login</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
