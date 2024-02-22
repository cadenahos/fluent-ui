import * as React from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  Text,
} from "@fluentui/react";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("5px"),
    width: "318px",
    maxWidth: "318px",
  },
});

const MyCard = ({ title, image, description }) => {
  const styles = useStyles();

  return (
    <DocumentCard className={styles.card}>
      <DocumentCardPreview
        previewImages={[
          {
            previewImageSrc: `${image}`,
            width: 318,
            height: 196,
          },
        ]}
      />
      <DocumentCardTitle title={title} shouldTruncate />
    </DocumentCard>
  );
};

export default MyCard;
