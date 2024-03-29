import React, { FC, ReactNode } from "react";
import { CssBaseline, Paper } from "@material-ui/core";

import { Header, Footer } from "./index";

import { useStyle } from "../../styles/global.styles";

const Wrapper: FC<{ children: ReactNode }> = (props) => {
  const styles = useStyle();

  return (
    <>
      <CssBaseline />
      <Header />
      <div className={styles.root}>
        <Paper className={styles.paper}>{props.children}</Paper>
      </div>
      <Footer />
    </>
  );
};

export default Wrapper;
