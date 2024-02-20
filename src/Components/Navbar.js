import React from "react";
import { CommandBar } from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useUser";

// Initialize icons in case you haven't done it yet
initializeIcons();

const Navbar = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const items = [
    {
      key: "companyIcon",
      iconProps: { iconName: "BuildQueue" }, // Replace with your company icon
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
  const AuthItems = [
    {
      key: "home",
      text: "Dashboard",
      iconProps: { iconName: "Home" },
      // Use Link component for navigation
      onClick: () => navigate("/dashboard"),
    },
  ];
  const logOut = () => {
    setAuth(false);
    navigate("/");
  };
  const farItems = (setIsModalOpen, setAuth, auth) => {
    if (auth) {
      return [
        {
          key: "logout",
          text: "Logout",
          iconProps: { iconName: "SignOut" },
          onClick: () => logOut(),
        },
      ];
    } else {
      return [
        {
          key: "login",
          text: "Login",
          iconProps: { iconName: "SignIn" },
          onClick: () => setIsModalOpen(true),
        },
      ];
    }
  };

  return (
    <div>
      <CommandBar
        items={auth ? AuthItems : items}
        farItems={farItems(setIsModalOpen, setAuth, auth)}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

export default Navbar;
