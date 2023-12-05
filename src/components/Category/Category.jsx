import Input from "../Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="winter"
          title="winter"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="summer"
          title="summer"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="mens"
          title="mens"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
