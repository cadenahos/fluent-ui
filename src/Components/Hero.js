import {
  PrimaryButton,
  Stack,
  Text,
  DefaultPalette,
  DefaultButton,
} from "@fluentui/react";
import { makeStyles, tokens, shorthands } from "@fluentui/react-components";

const useClasses = makeStyles({
  textContainer: {
    display: "flex",
    height: "300px",
    //
    ...shorthands.padding("20px"),
    backgroundColor: DefaultPalette.themeLight,
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
    paddingTop: tokens.spacingVerticalL,
  },
  buttonContainer: {
    display: "flex",
    marginTop: "60px",
  },
});

function App() {
  const classes = useClasses();

  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg")`,
        backgroundSize: "cover",
        height: "60vh",
        display: "flex",
        padding: "20px",
        justifyContent: "start",
        alignItems: "center",
      }}
      className="ms-depth-4"
    >
      <Stack className={classes.textContainer}>
        <Text className={classes.title}>Welcome to BMP Company</Text>
        <Text className={classes.description}>
          We specialize in providing the best services for our clients.
        </Text>
        <Stack
          horizontal
          enableScopedSelectors
          gap="15px"
          className={classes.buttonContainer}
        >
          <PrimaryButton iconProps={{ iconName: "Money" }}>
            Prices
          </PrimaryButton>
          <DefaultButton iconProps={{ iconName: "Share" }} size={"medium"}>
            Know more
          </DefaultButton>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
