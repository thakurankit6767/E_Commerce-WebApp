import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  loginFailure,
  loginLoading,
  loginSuccess,
} from "../../redux/signin/action";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = createTheme();

  const { isAuthenticated } = useSelector((state) => state.login);
  console.log(isAuthenticated);
  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    dispatch(loginLoading());
    dispatch(loginSuccess({ email: email }));

    console.log(payload);
  };

  if (isAuthenticated) {
    return <Navigate to="/CartPage" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <hr />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Link to="/cartPage"></Link>
              Sign In
            </Button>

            <Button
              className="ButtonDiv"
              variant="contained"
              onClick={() => {
                navigate("/SignUp");
              }}
              style={{ marginTop: "40px" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
