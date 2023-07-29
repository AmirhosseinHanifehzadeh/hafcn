import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "../components/Drawer";
import { Outlet } from "react-router-dom";

import "../styles/navbar.css"

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    boxShadow: "inherit", 
  },
  navlinks: {
    margin: '0 32px',
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));

function Root() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <AppBar className={classes.container} position="sticky">
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <div>
              <button className="router-btns">خانه</button>
              <button className="router-btns">بلاگ</button>
              <button className="router-btns">تماس با ما</button>
            </div>
            <div className="login__container">
              <button  className="btns">
                ورود
              </button>
              <button className="btns">
                ثبت نام
              </button>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <Outlet />
    </>
  );
}
export default Root;

