import { Stack, Text } from "@fluentui/react";
import { makeStyles, tokens } from "@fluentui/react-components";

const useClasses = makeStyles({
  hero: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingLeft: tokens.spacingVerticalS,
    paddingRight: tokens.spacingVerticalS,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    color: tokens.colorNeutralForeground2BrandHover,
    paddingBottom: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalS,
  },
  description: {
    fontSize: "1.5em",
    color: tokens.colorNeutralForeground2BrandHover,
    paddingBottom: tokens.spacingVerticalS,
    paddingTop: tokens.spacingVerticalS,
  },
});

function App() {
  const classes = useClasses();

  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg")`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack className={classes.textContainer}>
        <Text className={classes.title}>Welcome to BMP Company</Text>
        <Text className={classes.description}>
          We specialize in providing the best services for our clients.
        </Text>
      </Stack>
    </div>
  );
}

export default App;
