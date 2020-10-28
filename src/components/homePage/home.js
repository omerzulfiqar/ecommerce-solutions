import React, { Component } from "react";



const styles = {
  page: {
    position: "fixed",
  },
  img: {
    maxWidth: '100%'
  },
 
};

export default class Home extends Component {
  render() {
    return (
      <div id="home" style={styles.page}>
        <img src={process.env.PUBLIC_URL + '/img/veg.jpg'} alt="storePic" style={styles.img} />
      </div>
    );
  }
}
