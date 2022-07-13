import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginRequest } from "../actions/loginActions";
import { useAuth } from "../components/AuthProvider";

const Login = (props) => {
  let navigate = useNavigate();
  const { signin } = useAuth();
  const dispatch = useDispatch();

  // receive data from redux store
  const loginDetails = useSelector((state) => state.login);
  
  const [formData, setFormData] = useState({
    username: "kminchelle",
    password: "0lelplR"
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    dispatch(loginRequest(formData.username, formData.password));
  };

  console.log(loginDetails);
  if (loginDetails.userDetail) {
   // console.log("userDetail in login", loginDetails.userDetail);
    signin(loginDetails.userDetail, () => {
      console.log("Navigate Products");
      navigate("/");
    });
  }

  return (
    <Container>
      <h1>{loginDetails.isLoading ? "Please Wait...." : "Login Here"}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleInputChange}
            value={formData.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <p>{loginDetails.errorMessage}</p>
    </Container>
  );
};
export default Login;
