import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useReviewOrderStyles } from "./styles";

function ShippingDetails(props: any) {
  const {
    formValues: { firstName, lastName, email, phoneNumber, address1 },
  } = props;
  const styles = useReviewOrderStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={styles.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${email} ${phoneNumber}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  );
}

export default ShippingDetails;
