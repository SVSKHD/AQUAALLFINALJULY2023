import { useState } from "react"
import LOGO from "../../assests/Default.png";
import { Button, Form } from 'react-bootstrap';
const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

  }
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
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Signin
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Signin;
