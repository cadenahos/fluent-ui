import React from "react";
import { Text, List, Stack, PrimaryButton, TextField } from "@fluentui/react";
import {
  Field,
  Input,
  Button,
  makeStyles,
  shorthands,
  tokens,
  Divider,
} from "@fluentui/react-components";
const useClasses = makeStyles({
  container: {
    width: "100vh",
    height: "100vh",
  },
  form: {
    display: "flex",
    width: "600px",
    ...shorthands.padding(tokens.spacingL),
  },
  button: {
    ...shorthands.margin(tokens.spacingVerticalM),
    width: "60px",
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
          <Divider />
          <PrimaryButton
            className={classes.button}
            shape="rounded"
            appearance="primary"
            size="bigger"
          >
            Submit
          </PrimaryButton>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;
