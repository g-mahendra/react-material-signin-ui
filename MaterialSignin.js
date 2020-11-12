import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import PersonPin from "@material-ui/icons/PersonPin";
import Avatar from "@material-ui/core/Avatar";
import food from "";
import Divider from "@material-ui/core/Divider";

class MaterialSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail(text) {
    this.setState({
      email: text.target.value,
    });
  }

  handlePassword(text) {
    this.setState({
      password: text.target.value,
    });
  }

  render() {
    return (
      <Grid container lg={12} xl={12} sm={12} xs={12} style={styles.outerGrid}>
        <Grid sm={1} xs={0} />
        <Grid
          item
          alignItems="center"
          justify="space-arround"
          direction="column"
          style={styles.paperGrid}
          sm={5}
          xs={12}
          container
        >
          <Paper elevation={5} style={styles.paperContainer}>
            <Box style={styles.mainBox}>
              <Box style={styles.largeEmptyBox} />
              <Grid container justify="center">
                <Avatar style={styles.avatar}>
                  <PersonPin style={styles.avatarIcon} />
                </Avatar>
              </Grid>
              <Box style={styles.emptyBox} />
              <TextField
                type="email"
                value={this.state.email}
                variant="outlined"
                label="Email"
                margin="dense"
                onChange={this.handleEmail.bind(this)}
              />
              <Box style={styles.emptyBox} />
              <TextField
                type="password"
                value={this.state.password}
                variant="outlined"
                label="Password"
                margin="dense"
                onChange={this.handlePassword.bind(this)}
              />
              <Box style={styles.largeEmptyBox} />
              <Button
                style={styles.signinButton}
                color="primary"
                variant="contained"
              >
                Signin
              </Button>
              <Box style={styles.emptyBox} />
              <Button padding={0} color="primary" variant="text" size="small">
                Forgot password
              </Button>
              <Box style={styles.emptyBox} />
              <Divider component="strong" />
              <Paper elevation={3} justify="center" style={styles.signupPaper}>
                <Button style={styles.signupButton}>
                  <AccountCircleOutlined style={styles.icon} />
                  Signup to get started
                </Button>
              </Paper>
              <Box style={styles.largeEmptyBox} />
              <Paper elevation={3}>
                <Button style={styles.paperButtons}>
                  <Typography style={styles.gText} variant="h5">
                    G
                  </Typography>{" "}
                  Signin with Google
                </Button>
              </Paper>
            </Box>
          </Paper>
        </Grid>
        <Grid sm={6} xs={1} />
      </Grid>
    );
  }
}

const styles = {
  outerGrid: {
    height: "100vh",
    backgroundImage: `url(${food})`,
    backgroundRepeat: "no-repeat",
  },
  mainBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    minWidth: 300,
    padding: 30,
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    backgroundColor: "maroon",
  },
  avatarIcon: {
    height: 80,
    width: 80,
  },
  emptyBox: {
    height: 10,
  },
  signinButton: {
    width: 200,
    marginLeft: 50,
  },
  signupButton: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
  },
  googleSigninButton: {
    background: "red",
    color: "#fff",
    elevation: 3,
    maxWidth: 400,
    height: 40,
    paddingLeft: 7,
    paddingRight: 7,
  },
  largeEmptyBox: {
    height: 20,
  },
  paperGrid: {
    alignItems: "center",
    flex: 1,
    height: "100vh",
  },
  paperContainer: {
    backgroundColor: "#fff",
    height: "100vh",
    marginTop: 50,
    marginBottom: 50,
  },
  paperButtons: {
    width: 300,
  },
  gText: { marginRight: 10 },
  icon: { marginRight: 5 },
  signupPaper: { marginTop: 15 },
};

export default MaterialSignin;
