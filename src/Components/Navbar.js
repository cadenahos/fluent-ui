import React from "react";
import { CommandBar } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";

// Initialize icons in case you haven't done it yet
initializeIcons();

const items = [
  {
    key: "companyIcon",
    iconProps: { iconName: "BuildQueue" }, // Replace with your company icon
    onClick: () => console.log("Company icon clicked"),
  },
  {
    key: "option1",
    text: "Option 1",
    onClick: () => console.log("Option 1 clicked"),
  },
  {
    key: "option2",
    text: "Option 2",
    onClick: () => console.log("Option 2 clicked"),
  },
];

const farItems = (setIsModalOpen) => [
  {
    key: "login",
    text: "Login",
    iconProps: { iconName: "SignIn" },
    onClick: () => setIsModalOpen(true),
  },
];

const Navbar = ({ setIsModalOpen }) => {
  return (
    <div>
      <CommandBar
        items={items}
        farItems={farItems(setIsModalOpen)}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

export default Navbar;
