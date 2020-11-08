import React, { Component } from "react";
import {
  TextField,
  Typography,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import data from "../../data/data.json";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    marginTop: "5%",
    padding: "1% 4%",
  },
  image: {
    textAlign: "center",
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
    fontWeight: "bold",
  },
};

const quantities = [
  { value: "Ounces", label: "oz" },
  { value: "Pounds", label: "lbs" },
];

class ProductPage extends Component {
  state = {
    quantity: "",
    weight: "",
    customerNotes: "",
    product: {
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
    },
  };

  componentDidMount() {
    const name = this.props.match.params.name;
    const item = data.filter((item) => item.name === name);
    this.setState({ product: item[0] });
  }

  onQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  onWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  onNotesChange = (event) => {
    this.setState({ customerNotes: event.target.value });
  };

  async addToCart(id, quantity) {
    // Add data to cart api
    // Get The name, price and any special instructions
    console.log(`Adding ${id} to cart`)
  }

  render() {
    const { quantity, customerNotes, product } = this.state;
    return (
      <div id="productPage" style={styles.container}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={8} md={6} style={styles.image}>
            <img
              src={process.env.PUBLIC_URL + product.imageLg}
              alt="productImage"
              style={{ maxWidth: "100%", border: "2px solid black" }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Typography id="name" variant="inherit" component="h1">
              {product.name}
            </Typography>
            <Typography
              id="price"
              variant="inherit"
              component="h2"
              style={{ marginTop: 15 }}
            >
              ${product.price}
            </Typography>
            <Typography
              id="description"
              variant="inherit"
              component="p"
              style={{ margin: "20px 0 0 0" }}
            >
              {product.description}
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
              onClick={() => this.addToCart(product.id, quantity)}
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(ProductPage);
