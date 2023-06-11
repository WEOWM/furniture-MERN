import React from 'react'
import {Carousel} from 'react-bootstrap'

const Banner = () => {
  return (
    <div>
        <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/cozy-modern-loft-with-comfortable-design-elements-generated-by-ai_188544-28044.jpg?w=1480&t=st=1686382979~exp=1686383579~hmac=fadf5deeb817e9dab95c1da138cf71127734887bc6a9bfdcf9a0f8c8a71c0354"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?size=626&ext=jpg&ga=GA1.1.336976123.1684895234&semt=sph"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?w=1060&t=st=1686383139~exp=1686383739~hmac=7a8145739c534ca9a389ba55f9564b4b5afd10a78ae905cc7e5f3b0b64d476dc"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner