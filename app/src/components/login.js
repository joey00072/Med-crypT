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
import Background from "./../images/background.jpg";
import Divider from "@material-ui/core/Divider";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Dashbord from "./Dashboard";
class MaterialSignin extends Component {
  state = {
    email: "",
    password: "",
    login: true,
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
  handleLogin(props) {
    this.props.history.replace("/dashbord");
  }
  render() {
    return (
      <Grid container lg={12} xl={12} sm={12} xs={12} style={styles.outerGrid}>
        <Grid sm={5} xs={1} className={styles.img}>
          <Box style={styles.mainBox}>
            <Box style={styles.largeEmptyBox} />
            <Grid container justify="center"></Grid>
          </Box>
        </Grid>
        <Grid sm={1} xs={1} />
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
              <Box style={styles.largeEmptyBox} />
              <Box style={styles.largeEmptyBox} />
              <Grid container justify="center">
                <Avatar style={styles.avatar}>
                  <PersonPin style={styles.avatarIcon} />
                </Avatar>
              </Grid>
              <Box style={styles.largeEmptyBox} />
              <Box style={styles.largeEmptyBox} />
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
                onClick={this.handleLogin.bind(this)}
              >
                Signin
              </Button>
              <Box style={styles.emptyBox} />
              <Button padding={0} color="primary" variant="text" size="small">
                Forgot password
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid sm={1} xs={0} />
      </Grid>
    );
  }
}

const styles = {
  outerGrid: {
    // height: "100vh",
    // backgroundColor: "#4A3ECD",
    width: "100%",
    height: "100%",
    // overflow: "hidden",
    // position: "relative",
    backgroundImage: `url(${Background})`,
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
  avatar2: {
    marginTop: " 100px",
    width: 160,
    height: 160,
    backgroundColor: "rgb(0,0,0,0)",
  },
  avatarIcon: {
    height: 80,
    width: 80,
  },
  avatarIcon2: {
    height: 130,
    width: 130,
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
  logo: {
    backgroundImage: `url(./../images/background_icon.png)`,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100px",
    maxHeight: "100px",
    backgroundImage: `url(${Background})`,
  },
};

export default MaterialSignin;
