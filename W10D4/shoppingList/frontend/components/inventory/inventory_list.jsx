import React from "react";
import AddItemFormContainer from "../add_item_form/add_item_form_container";

const InventoryList = ({ inventory = [], addToCart }) => {
  // debugger
  return (
    <div>
      <ul className="list">
        <h4>Stuff For Sale</h4>
        {inventory.map(item => (
          <li className="inventory-item" key={item.id}>
            <p>{item.name}:</p>
            <p>{item.price}</p>
            <button onClick={(e) => addToCart(item.id)}>Add To Cart</button>
          </li>
        ))}
      </ul>
      <AddItemFormContainer />
    </div>
  );
};

export default InventoryList;
