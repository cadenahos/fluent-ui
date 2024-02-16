import React from "react";
import { CommandBar } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";
import { Link, useNavigate } from "react-router-dom";
import { Link as FluentLink } from "@fluentui/react";

// Initialize icons in case you haven't done it yet
initializeIcons();

const farItems = (setIsModalOpen) => [
  {
    key: "login",
    text: "Login",
    iconProps: { iconName: "SignIn" },
    onClick: () => setIsModalOpen(true),
  },
];

const Navbar = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "companyIcon",
      iconProps: { iconName: "BuildQueue" }, // Replace with your company icon
      onClick: () => console.log("Company icon clicked"),
    },
    {
      key: "home",
      text: "Home",
      iconProps: { iconName: "Home" },
      // Use Link component for navigation
      onClick: () => navigate("/"),
    },
    {
      key: "about",
      text: "About",
      iconProps: { iconName: "Info" },
      // Use Link component for navigation
      onClick: () => navigate("/about"),
    },
  ];

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
