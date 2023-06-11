import React from "react";
import { Col, Row } from "react-bootstrap";
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

import "./Footer.css";

const Footer = () => {
 
  return (
    <>
      <Row className="footer m-0 p-0 mt-5 text-center">
        <Col>
          <h3>Menu</h3>
          <p>shop</p>
          <p>Feature</p>
          <p>sale</p>
          <p>contact Us</p>
         
        </Col>
        <Col>
          <h3>Help</h3>
          <p>Delivery</p>
          <p>shipping</p>
          <p>privacy Policy</p>
          <p>FaQs</p>
          
        </Col>
        <Col>
          <h3>Contact Us</h3>
          <p>Contact@maymooth.com</p>
          <p>+44123456789</p>
        </Col>
        <Col className="d-flex flex-column gap-4">
          <h3>Stay Social</h3>
          <div className="footer-icon fs-4">
            <GrFacebookOption/>
            <AiOutlineTwitter/>
            <AiOutlineInstagram/>

          </div>
          <p className="fw-bold">Subscrible to our Newslettler</p>
         
          <div style={{display:"flex",alignItems:"flex-start"}} >
            <input placeholder="Email address" className="newsletter-int" />
            <h6 className="m-0 p-0 fw-bold" style={{position:"absolute",right:"1rem"}} >Subscribe</h6>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
