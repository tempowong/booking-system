import Grid from "../grid/Grid";
import React, { Fragment } from "react";

const Section1: React.FC = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item lg={6} xs={12}>
          <img src={"/assets/images/banners/greeting.svg"} style={{ width: '90%' }}></img>
        </Grid>
      </Grid>
    </Fragment >
  );
};

export default Section1;
