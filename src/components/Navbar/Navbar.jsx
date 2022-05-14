import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import { NavButtons } from "./NavButtons";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "white",
    width: "100%",
    height: 80,
    boxShadow:
      " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
  },

  logo: {
    width: 65,
    height: 70,
    alignItems: "center",
  },

  container: {
    display: "flex",
    color: "black",
    fontSize: "bold",
    paddingLeft: "2%",
    // background:"yellow",
  },

  shoppingcart: {
    color: "black",
    fontSize: "20px",
  },
});

export const Navbar = () => {
  const classes = useStyle();
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdLNlCBrDhxM2zcBS5zZtAh0184wPt6tFGQ&usqp=CAU";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Box>
          <Link to="/">
            {" "}
            <img src={logo} className={classes.logo} />
          </Link>
        </Box>
        <h4 className={classes.shoppingcart}>Shopping Cart</h4>

        <Box component="span" className={classes.container}>
          <NavLink />
        </Box>
        <NavButtons />
      </Toolbar>
    </AppBar>
  );
};
