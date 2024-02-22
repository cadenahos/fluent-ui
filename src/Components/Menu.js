import { Nav } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import { getTheme } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

const theme = getTheme();
const useClasses = makeStyles({
  Nav: {
    height: "88vh ",
    width: "150px",
    backgroundColor: theme.palette.neutralLighter,
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

  return (
    <Nav
      groups={navLinkGroups}
      className={classes.Nav}
      onLinkClick={(event, element) => navigate(element.link)}
    />
  );
};
export default Menu;
