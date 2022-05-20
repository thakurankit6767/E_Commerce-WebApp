import { Box, Button, makeStyles, Badge } from "@material-ui/core";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyle = makeStyles({
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "200%",
    alignItems: "center",
    // backgroundColor:"red"
    // border:"2px solid red",
  },
});

export const NavButtons = () => {
  const cartproducts = useSelector((state) => state.data.cart);
  console.log("lengthofcart", cartproducts.length);

  const classes = useStyle();

  return (
    <>
      <Box>
        <Button className={classes.buttons}>
          <Badge color="primary">
            <Link to="/LoginPage">
              <AccountCircleIcon />
            </Link>
          </Badge>
        </Button>
      </Box>

      <Box>
        <Button className={classes.buttons}>
          <Badge color="red">
            <Link to="/cartPage">
              <ShoppingBagIcon />
            </Link>
            <span style={{ color: "red", fontSize: "bold" }}>
              {cartproducts.length}
            </span>
          </Badge>
        </Button>
      </Box>
    </>
  );
};
