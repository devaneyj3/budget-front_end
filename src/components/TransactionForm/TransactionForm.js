import { useState } from "react";
import { editTransaction } from "../../redux/actions/transactionActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
const Edit = ({
  name,
  price,
  category,
  created,
  editTransaction,
  id,
  setEdit,
}) => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    type: "",
    account: "",
    category: "",
    created: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    editTransaction(id, values);
    setEdit(false);
  };
  return (
    <section className="edit">
      <form onSubmit={onSubmit}>
        <select name="account" onChange={handleChange}>
          <option>Account</option>
          <option value="Checking">Checking</option>
          <option value="Savings">Savings</option>
        </select>
        <select name="type" onChange={handleChange}>
          <option>Type: </option>
          <option value="inc">Inc</option>
          <option value="exp">Exp</option>
        </select>
        <input
          type="text"
          onChange={handleChange}
          value={values.name}
          placeholder={name}
          name="name"
        />
        <input
          type="number"
          onChange={handleChange}
          value={values.price}
          placeholder={price}
          name="price"
        />
        <input
          type="text"
          onChange={handleChange}
          value={values.category}
          name="category"
          placeholder={category}
        />
        <input
          type="date"
          onChange={handleChange}
          value={values.created}
          placeholder={created}
          name="created"
        />
        <Button color="success" type="submit">
          Edit
        </Button>
      </form>
    </section>
  );
};

export default connect(null, { editTransaction })(Edit);
