import React, { Component } from "react";
import {
  TextField,
  Typography,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import NYStrip from "../../assets/img/NYStrip.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styles = {
  container: {
    marginTop: "5%",
    padding: "1% 4%",
  },
  image: {
    textAlign: "center"
  },
  productDetails: {
    display: "block",
    padding: "0 10px",
  },
  select: {
    minWidth: 100,
    marginRight: "2%",
    marginTop: "2%",
  },
  form: {
    marginTop: "2%",
    minWidth: "100%",
  },
  addBtn: {
    marginTop: 20,
    backgroundColor: "#00695c",
    color: "white",
    fontWeight: 'bold'
  },
};

const quantities = [
  { value: "Ounces", label: "oz" },
  { value: "Pounds", label: "lbs" },
];

export default class ProductPage extends Component {
  state = {
    quantity: "",
    weight: "",
    customerNotes: "",
  };

  onQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  onWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  onNotesChange = (event) => {
    this.setState({ customerNotes: event.target.value });
  };

  render() {
    const { quantity, customerNotes } = this.state;
    return (
      <div id="productPage" style={styles.container}>
        <Grid
          container
          spacing={1}
          justify="center"
        >
          <Grid item xs={12} sm={8} md={6} style={styles.image}>
            <img
              src={NYStrip}
              alt="productImage"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
              <Typography id="name" variant="inherit" component="h1">
                New York Strip Steak
              </Typography>
              <Typography
                id="price"
                variant="inherit"
                component="h2"
                style={{ marginTop: 15 }}
              >
                $22
              </Typography>
              <Typography
                id="description"
                variant="inherit"
                component="p"
                style={{ margin: "20px 0 0 0" }}
              >
                One delectable New York Strip Steak. The New York Strip is known
                by other names (Ambassador Steak, Kansas City strip, etc.), but
                its marbling and tenderness deliver one result: fantastic taste.
              </Typography>
              <div style={{ display: "flex" }}>
                <TextField
                  id="quantity"
                  variant="outlined"
                  margin="dense"
                  label="Weight"
                  onChange={(event) => this.onWeightChange(event)}
                  required
                  placeholder="Enter quantity"
                  style={styles.select}
                />
                <TextField
                  id="quantityUnits"
                  select
                  required
                  label="Unit"
                  value={quantity}
                  onChange={(event) => this.onQuantityChange(event)}
                  variant="outlined"
                  margin="dense"
                  style={styles.select}
                >
                  {quantities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="customer-requirement-form"
                label="Notes"
                multiline
                rows={4}
                value={customerNotes}
                variant="outlined"
                onChange={(event) => this.onNotesChange(event)}
                placeholder="Please enter any requirements or instructions you would like us to follow"
                style={styles.form}
              />
              <Button
                id="addToCartBtn"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                fullWidth
                style={styles.addBtn}
              >
                Add To Cart
              </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
