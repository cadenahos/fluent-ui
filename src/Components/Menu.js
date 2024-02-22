import { Nav } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import { useTheme } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

const useClasses = makeStyles({
  Nav: {
    width: "200px",
    height: "88vh ",
  },
});
const Menu = () => {
  const classes = useClasses();
  const navigate = useNavigate();
  const navLinkGroups = [
    {
      links: [
        {
          name: "Inbox",
          link: "/account/inbox",
          key: "Inbox",
          iconProps: {
            iconName: "Inbox",
            styles: {
              root: {
                fontSize: 20,
              },
            },
          },
        },
        {
          name: "Dashboard",
          link: "/account/dashboard",
          key: "Dashboard",
          iconProps: {
            iconName: "BIDashboard",
            styles: {
              root: {
                fontSize: 20,
              },
            },
          },
          // Use Link component for navigation
        },
        // Add more links as needed
      ],
    },
  ];
  const theme = useTheme();
  const themePrimaryColor = theme.palette.themePrimary;
  React.useEffect(() => {
    console.log(themePrimaryColor);
  }, []);
  return (
    <Nav
      groups={navLinkGroups}
      className={classes.Nav}
      onLinkClick={(event, element) => navigate(element.link)}
      styles={{ backgroundColor: themePrimaryColor }}
    />
  );
};
export default Menu;
