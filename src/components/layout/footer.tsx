// PLUGINS IMPORTS //
import React from "react";
import { Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©{" "}
      <Link color={"inherit"} href="www.google.com">
        Shopping
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
