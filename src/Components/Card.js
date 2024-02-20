import * as React from "react";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  shorthands,
  tokens,
  Image,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import { PrimaryButton } from "@fluentui/react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("5px"),
    width: "520px",
    maxWidth: "520px",
  },
});

const MyCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader
        header={
          <Body1>
            <b>Bank BNC</b> The best bank in the world
          </Body1>
        }
        description={
          <Caption1>This is the service we provide to our customers.</Caption1>
        }
      />

      <CardPreview>
        <Image
          fit="contain"
          src="https://afgiib.com/wp-content/uploads/2024/01/World-Bank-1024x570-1-900x313.jpeg"
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <PrimaryButton icon={<ArrowReplyRegular fontSize={16} />}>
          Page
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
