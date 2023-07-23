import LOGO from "../../assests/Default.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import UserOperations from "../../services/user";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, name, password, error, loading, didRedirect } = values;
  const { userSignup } = UserOperations();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    userSignup({name, email, password})
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
    <div>
      {/* error message handling */}
    </div>
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
          <form onSubmit={handleSubmit}>
            <div class="mb-2">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                value={name}
                onChange={handleChange("name")}
                id="exampleFormControlInput1"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-2">
              <label for="exampleFormControlTextarea1" class="form-label">
                Email Address
              </label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={handleChange("email")}
                id="exampleFormControlInput1"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-2">
              <label for="exampleFormControlTextarea1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                value={password}
                onChange={handleChange("password")}
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signin;
