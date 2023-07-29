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
import { Link } from "react-router-dom";

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

function Navbar() {
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
              <button className="router-btns">
                <Link to={`/home`} className="link">خانه</Link>
              </button>
              <button className="router-btns">بلاگ</button>
              <button className="router-btns">تماس با ما</button>
            </div>
            <div className="login-btns__container">
              <button  className="btns">
                <Link to={`/login`} className="link">ورود</Link>
              </button>
              <button className="btns">
                <Link to={`/signup`} className="link">ثبت نام</Link>
              </button>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
    </>
  );
}
export default Navbar;
