import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Food App</h1>
      <div>
        <input type="text" name="" id="" placeholder="Search " />
        <button>Search</button>

        <select name="meals" id="meals">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Tea Time</option>
        </select>
      </div>
    </div>
  );
};

export default Header;