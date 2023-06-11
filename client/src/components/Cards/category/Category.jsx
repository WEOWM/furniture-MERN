import React from "react";
import "./Category.css";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Category = () => {
  return (
    <>
      <Row className="m-0 p-0 mt-5" >
        <Col md={6} className="left-box">
          <div className="card first-img">
            <img className="w-100" src="https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?w=1380&t=st=1686402071~exp=1686402671~hmac=f544ff6e5f1aeffe71f88f7df80be0aa894068a0f90c4eddd5014d0d66381434" alt="not found" />
            <div className="card-img-overlay"style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span  style={{fontSize:"29px",color:"#FFF"}}>Wine & Dine</span>
                <NavLink>SHOP DINNER ROOM</NavLink>
            </div>
          </div>
          <div className="card second-img">
            <img className="w-100" src="https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-437.jpg?w=1480&t=st=1686401387~exp=1686401987~hmac=356e6846a63ebedc29fcd97bfc9cf3d4c0b8eb94ea5951eaf66d4f7bc24f197f" alt="not found" />
            <div className="card-img-overlay"style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span style={{fontSize:"29px",color:"#FFF"}}>TIME FOR BED</span>
                <NavLink>SHOP DINNER ROOM</NavLink>
            </div>
          </div>
        </Col>
        <Col md={6} className=" right-box">
          <div className="card second-img">
            <img className="w-100" src="https://img.freepik.com/free-photo/luxury-kitchen-with-stainless-steel-appliances-marble-generated-by-ai_24640-87156.jpg?w=1480&t=st=1686399982~exp=1686400582~hmac=e5eb65d6f9f635a2026161058c3424c3f2ae0b478278d61b46a55a06a95999bd" alt="not found" />
            <div className="card-img-overlay"style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span  style={{fontSize:"29px",color:"#FFF"}}>KITCHEN</span>
                <NavLink>SHOP DINNER ROOM</NavLink>
            </div>
          </div>
          <div className="card first-img">
            <img className="w-100" src="https://img.freepik.com/free-photo/retro-living-room-interior-design_53876-145503.jpg?w=1380&t=st=1686401696~exp=1686402296~hmac=29e72be7de5c7805d253f6675e3fff3c436c2a2612c18db1366a590a16246ccd" alt="not found" />
            <div className="card-img-overlay"style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span  style={{fontSize:"29px",color:"#FFF"}}>SIT & RELAX</span>
                <NavLink>SHOP DINNER ROOM</NavLink>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
