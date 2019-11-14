import React from "react";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    /* Prevent Default */
    event.preventDefault();
    /* Get Form Text */
    var storeName = this.myInput.current.value;
    /*
    Go to store with name user created
    /store/whatever
    */
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
