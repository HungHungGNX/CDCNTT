import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col ,Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { login } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styles from "./LoginScreen.module.css";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect").split("=")[1]
    : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <main className="py-3 mt-5">
    <Container>
    <FormContainer>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <h1 style={{ textAlign: "center" }}>Sign In</h1>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label style={{fontSize:'16px'}}>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                style={{fontSize:'16px'}}
                value={email}
                className="rounded-pill mt-3"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" style={{fontSize:'16px'}}>
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                className="rounded-pill mt-3"
                style={{fontSize:'16px'}}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              style={{fontSize:'10px'}}
              className="mt-4 rounded-pill w-100 btn-sign-in p-4">
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col style={{fontSize:'16px'}}>
              New Customer?
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}>
               <span> </span> Register
              </Link>
            </Col>
          </Row>
        </Col>

        <Col md={5}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </Col>
      </Row>
    </FormContainer>
    </Container></main>
  );
}

export default LoginScreen;
