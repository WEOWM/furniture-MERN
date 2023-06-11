import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const SignIN = () => {
  const [Email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(Email, Password);

    if (Email || Password) {
      localStorage.setItem("TOKEN", true);
      navigate("/");
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <div className="signup-body">
      <Row className="p-0 m-0">
        <Col md={4} className="p-0 m-0">
          <div className="sigup-img"></div>
        </Col>
        <Col md={8} className="signup-form p-0 m-0">
          <div className="signup-Box">
            <h2 style={{ display: "flex", alignItems: "center" }}>Sign IN</h2>
            {/* <input className='sign-input' type="text" name="" id="" placeholder='Name'/> */}
            <input
              onChange={(e) => setemail(e.target.value)}
              className="sign-input"
              type="email"
              name=""
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="sign-input"
              type="password"
              name=""
              placeholder="Password"
            />
            <button onClick={(e) => submit(e)} className="sign-btn">
              Sign in
            </button>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="m-0 me-2">Don't have Account?</p>{" "}
              <NavLink to={"/sign-up"}> Sign Up</NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIN;
