import { useState } from "react";
import LOGO from "../../assests/Default.png";
import { Button, Form, Spinner } from "react-bootstrap";
import UserOperations from "../../services/user";
import ToastMessages from "../../reusables/toast";
import useSpinner from "../../reusables/Spinner";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
  });
  const { email, password, error, loading } = values;
  const { userLogin } = UserOperations();
  const { SuccessNotify, ErrorNotify } = ToastMessages();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ loading: true });
    userLogin({ email, password })
      .then((res) => {
        console.log("success", res);
        SuccessNotify("Succesfully Logged In");
        setValues({ loading: false });
      })
      .catch((err) => {
        console.log("err", err);
        setValues({ loading: false });
        ErrorNotify(err);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-center">
          <img
            src={LOGO}
            height="300"
            className="img-thumbail"
            alt="aquakart-emblem"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleChange("email")}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handleChange("password")}
                placeholder="Password"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                {loading ? <useSpinner /> : "Signin"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Signin;
