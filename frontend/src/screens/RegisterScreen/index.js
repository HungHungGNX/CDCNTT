import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { register } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect").split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <main className="py-3 mt-5">
      <Container>
        <FormContainer>
          <Row className="justify-content-md-center">
            <Col md={5}>
              <img
                src="https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Login image"
                className="w-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </Col>
            <Col md={5}>
              <h1 style={{ textAlign: "center" }}>Sign Up</h1>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label style={{fontSize:'16px'}}>Name</Form.Label>
                  <Form.Control
                    required
                    type="name"
                    placeholder="Enter name"
                    style={{fontSize:'16px'}}
                    value={name}
                    className="rounded-pill mt-1"
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="mt-3" style={{fontSize:'16px'}}>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    style={{fontSize:'16px'}}
                    value={email}
                    className="rounded-pill mt-1"
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password" style={{fontSize:'16px'}}>
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter Password"
                    style={{fontSize:'16px'}}
                    value={password}
                    className="rounded-pill mt-1"
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="passwordConfirm">
                  <Form.Label className="mt-3" style={{fontSize:'16px'}}>Confirm password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    style={{fontSize:'16px'}}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="rounded-pill mt-1"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-4 rounded-pill w-100 btn-sign-in"
                >
                  Register
                </Button>
              </Form>

              <Row className="py-3">
                <Col style={{fontSize:'16px'}}>
                  Have an Account?
                  <Link
                    to={redirect ? `/login?redirect=${redirect}` : "/login"}
                  >
                    <span> </span> Sign In
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </FormContainer>
      </Container>
    </main>
  );
}

export default RegisterScreen;
