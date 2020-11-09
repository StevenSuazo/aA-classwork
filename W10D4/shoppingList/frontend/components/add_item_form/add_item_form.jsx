import React from "react";

// controlled component
class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    // since handleSubmit will be invoked function-style on the window, we must bind
  }

  handleSubmit(e) {
    e.preventDefault();
    // default behavior would launch a req/resp cycle and refresh the page

    const { name, price } = this.state;
    // debugger
    this.props.addItem({
      name: name,
      price: price
    })
  }

  update(field) {
    // 'this' refers correctly to the form due to method invocation
    // debugger
    return e => {
      // by using an arrow function, the context is taken from where the inner 
      // function is defined. Preserving the correct context
      // debugger
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={this.update("name")}
            value={this.state.name}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            onChange={this.update("price")}
            value={this.state.price}
          />
        </label>
        <input type="submit" value="Add New Item" />
      </form>
    );
  }
}

export default AddItemForm;
