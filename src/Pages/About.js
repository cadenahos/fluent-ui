import React from "react";
import { Text, List, Stack, PrimaryButton, TextField } from "@fluentui/react";
import {
  makeStyles,
  shorthands,
  tokens,
  Divider,
} from "@fluentui/react-components";
const useClasses = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100vh",
    height: "100vh",
  },
  form: {
    display: "flex",
    width: "600px",
    ...shorthands.padding(tokens.spacingL),
  },
  buttonx: {
    ...shorthands.margin(tokens.spacingVerticalM),
    width: "60px",
    marginTop: "20px",
  },
});
const About = () => {
  // const companies = [
  //   "America Finantial - Specializes in financial services",
  //   "BNC Group - Specializes in business consulting",
  //   "Cencosub - Specializes in technology solutions",
  // ];
  const classes = useClasses();
  return (
    <div className={classes.container}>
      <Stack tokens={{ childrenGap: 20, padding: 20 }}>
        <Text variant="xxLarge">About Our Company</Text>
        <Text variant="large">
          We are a leading provider of business process management solutions.
          Our team of experts is dedicated to delivering high-quality results
          that exceed our clients' expectations.
        </Text>

        <Stack className={classes.form}>
          <Text variant="xLarge">Contact Us</Text>
          <TextField label="Name"></TextField>
          <TextField label="Message" multiline rows={3}></TextField>
          <TextField label="Email" type="email"></TextField>
          <PrimaryButton className={classes.buttonx} size="bigger">
            Submit
          </PrimaryButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;
