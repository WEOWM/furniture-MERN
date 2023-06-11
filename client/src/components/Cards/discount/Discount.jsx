import React from 'react'
import './Discount.css'
import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Discount = () => {
  return (
    <div>
        <Row className='p-0 m-0 mt-5'>
            <Col className='p-0 ms-0' md={6} style={{display:'flex', alignItems:"center",justifyContent:'center',marginTop:'4rem'}}>
                <div className="dis-text">
                    <h2>Get Inspired</h2>
                    <p>Discount ideas. Where you can explore insspired interior, and get helpful tips and style advice to transform your space. Come on in </p>

                </div>
            </Col>
            <Col md={6}>
                <div className=" card dis-img ">
                <div className="card-img-overlay "style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span  style={{fontSize:"29px",color:"#FFF"}}></span>
                </div>
                    <img className='w-100'height="480px" src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?w=1380&t=st=1686459133~exp=1686459733~hmac=430c1a3a4601e83464d21b4dd15dc030d2017c1dd982948fac3424b615df9f4d" alt="" />
                </div>

            </Col>
        </Row>
        <Row className='p-0 m-0 mt-3'>
        <Col md={6}>
<div className=" card dis-img ">
<div className="card-img-overlay "style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
<span  style={{fontSize:"29px",color:"#FFF"}}></span>
</div>
    <img className='w-100 pe-0'height="480px" src="https://img.freepik.com/free-psd/realistic-modern-living-room-with-sofa-white-wall_176382-494.jpg?w=1060&t=st=1686461828~exp=1686462428~hmac=a331688969f7dffc9efde82b05dfb91b187efb89d3a255e17957d1d2fe235f1e" alt="" />
</div>

</Col>
            <Col className='p-0 me-0' md={6} style={{display:'flex', alignItems:"center",justifyContent:'center',marginTop:'4rem'}}>
                <div className="dis-text">
                    <h2>Get Inspired</h2>
                    <p>Discount ideas. Where you can explore insspired interior, and get helpful tips and style advice to transform your space. Come on in </p>

                </div>
            </Col>
           
        </Row>

        <Row className='p-0 m-0 mt-5'>
            <Col className='p-0 ms-0' md={6} style={{display:'flex', alignItems:"center",justifyContent:'center',marginTop:'4rem'}}>
                <div className="dis-text">
                    <h2>Get Inspired</h2>
                    <p>Discount ideas. Where you can explore insspired interior, and get helpful tips and style advice to transform your space. Come on in </p>

                </div>
            </Col>
            <Col md={6}>
                <div className=" card dis-img ">
                <div className="card-img-overlay "style={{display:'flex',flexDirection:"column", top:"25px",left:"35px"}} >
                <span  style={{fontSize:"29px",color:"#FFF"}}></span>
                </div>
                    <img className='w-100'height="480px" src="https://img.freepik.com/free-photo/3d-render-modern-home-office_1048-17753.jpg?t=st=1686462134~exp=1686462734~hmac=4f43027443182650ef136d6039e006ed200818befb2a8fb637d61992ef90964c" alt="" />
                </div>

            </Col>
        </Row>
    </div>
  )
}

export default Discount

