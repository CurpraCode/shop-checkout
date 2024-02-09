// PLUGINS IMPORTS //
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useHeaderStyle } from "./header.style";

const Header = () => {
  const styles = useHeaderStyle();

  return (
    <AppBar position="absolute" color="default" className={styles.appBar}>
      <Toolbar>
        <Typography>Shopping</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
