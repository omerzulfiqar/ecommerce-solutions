/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  navBar: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  searchBar: {
    display: "flex",
    visible: {
      display: "block",
      padding: "0px 20px",
      backgroundColor: "#9e2b07",
    },
    hidden: {
      display: "none",
    },
    btn: {
      marginTop: 8,
      marginBottom: 4,
      color: "#9e2b07",
      borderRadius: 4,
    },
    bar: {
      backgroundColor: "rgba(209, 209, 209, 0.75)",
      borderRadius: 4,
      marginLeft: 0.25,
    },
  },
  meatLinks: {
    links: {
      color: "#ffffff",
      margin: 20,
      textDecoration: "none",
    },
    toolbar: {
      backgroundColor: "#d65b33",
      minHeight: 25,
    },
    contatiner: {
      margin: "0px auto",
    },
  },
};

export default class NavBar extends Component {
  state = {
    searchbar: false,
  };

  onSearchClick = () => {
    this.setState({ searchbar: !this.state.searchbar });
  };

  render() {
    const { searchbar } = this.state;
    return (
      <div id="NavAndSearch">
        <div id="navBar">
          <AppBar position="static">
            <Toolbar>
              <div id="actionsLeft">
                {/* <span id="zipcode">22042</span> */}
                <IconButton id="locationIcon" color="secondary">
                  <LocationOnIcon />
                </IconButton>
                <IconButton
                  id="searchIcon"
                  color="secondary"
                  onClick={() => this.onSearchClick()}
                >
                  <SearchIcon />
                </IconButton>
              </div>
              <div id="title" style={styles.navBar}>
                <h2>E-Commerce App</h2>
              </div>
              <div id="actionsRight">
                <Link to='/cart'>
                  <IconButton id="shoppingCartIcon" color="secondary">
                    <ShoppingCartIcon />
                  </IconButton>
                </Link>

                <IconButton id="accountIcon" color="secondary">
                  <AccountCircleIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div
          id="searchBar"
          style={searchbar ? styles.searchBar.visible : styles.searchBar.hidden}
        >
          <form style={styles.searchBar}>
            <Button
              variant="contained"
              color="secondary"
              style={styles.searchBar.btn}
            >
              <SearchIcon />
            </Button>
            <TextField
              id="outlinedSearch"
              variant="outlined"
              margin="dense"
              color="secondary"
              style={styles.searchBar.bar}
              fullWidth
              placeholder="Search for stuff..."
            />
          </form>
        </div>
        <div id="meatLinksContainer">
          <Toolbar style={styles.meatLinks.toolbar}>
            <div id="meatLinks" style={styles.meatLinks.contatiner}>
              <Link style={styles.meatLinks.links} to="/chicken">
                Chicken
              </Link>
              <Link style={styles.meatLinks.links} to="/beef">
                Beef
              </Link>
              <Link style={styles.meatLinks.links} to="/lamb">
                Lamb
              </Link>
            </div>
          </Toolbar>
        </div>
      </div>
    );
  }
}
