import React from 'react'
import { Carousel } from 'react-bootstrap'
import Footer from '../Footer'
const Bannar = () => {
  return (
    <>
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.worldsoccershop.com/wcm/connect/d268f29f-31e0-4891-b0bf-86a0db05217e/Guide-to-Jerseys-at-the-2022-World-Cup_d+%281%29.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d268f29f-31e0-4891-b0bf-86a0db05217e-oi1Hpf0"
            alt="Search"
            width="700"
            height="600"
          />
          <Carousel.Caption>
            <h3>High Quality</h3>
            <p>Best Quality Exported Jerseys.</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thumblr.uniid.it/blog_component/91701/bcd433d8eb8f.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
            <h3>Best in Febrics</h3>
            <p>Best Febrics are ensured.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thumblr.uniid.it/blog_component/91697/faeedb4769b2.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
            <h3>Just in Price</h3>
            <p>Get the Best in Best Price.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thumblr.uniid.it/blog_component/91857/ac81e2f3445f.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Quickest delivery</h3>
            <p>Wear your desire jersey in quickest hour.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thumblr.uniid.it/blog_component/91937/9a17333952c4.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Easy To Order</h3>
            <p>Order your jersey in a few clicks.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://thumblr.uniid.it/blog_component/92142/2ad3706aac4d.jpg"
            alt="First slide"
            width="400"
            height="600"
          />
          <Carousel.Caption>
          <h3>Best Offer</h3>
            <p>Have the best offers for your kits.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default Bannar