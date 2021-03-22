import { Formik, Field } from "formik";
import { addTransaction } from "../../redux/actions/transactionActions";
import { connect } from "react-redux";
import "./AddTransaction.scss";
import { Button } from "reactstrap";
const AddTransaction = ({ addTransaction }) => {
  return (
    <section className="addTransaction">
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          type: "",
          account: "",
          category: "",
          date: "",
        }}
        onSubmit={(values) => {
          addTransaction(values);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field as="select" name="account" required>
              <option>Account</option>
              <option value="Checking">Checking</option>
              <option value="Savings">Savings</option>
            </Field>
            <Field as="select" name="type" required>
              <option>Type: </option>
              <option value="inc">Inc</option>
              <option value="exp">Exp</option>
            </Field>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              placeholder="Name"
              name="name"
              required
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <input
              type="number"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.price}
              placeholder="3.00"
              name="price"
              required
            />
            {props.errors.price && (
              <div id="feedback">{props.errors.price}</div>
            )}
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.category}
              name="category"
              placeholder="Category"
              required
            />
            {props.errors.category && (
              <div id="feedback">{props.errors.category}</div>
            )}
            <input
              type="date"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.amount}
              name="date"
              required
            />
            {props.errors.date && <div id="feedback">{props.errors.date}</div>}
            <Button color="success" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default connect(null, { addTransaction })(AddTransaction);
