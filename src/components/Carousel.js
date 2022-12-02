import Carousel from 'react-bootstrap/Carousel';

import "../Styles/Crasoule.css"
function Ccarousel() {
  return (
    <Carousel variant="dark" className="border">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.samsung.com/is/image/samsung/assets/us/11232022/SDSAC-5168-HA-Care-plus-Energy-Star-Black-Friday-HP_KV-DT-1440x640.jpg?imwidth=1366"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>We are having an amazing <span>plan</span> for you {":)"}</h5>
          <span>Coming soon </span>
          <p>We are here to surve you </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/assets/us/a-assets/112022/SDSAC-5100-Z_Z-HP-KV-DT-1440x640.jpg?imwidth=1366"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Quality & comfort in one <span>package</span> </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/assets/us/home/11172022/HP-HD01-AmericaRecyclesDay-Promo2-D.jpg?imwidth=1366"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5><span>Samsung</span> New Devices</h5>
          <p>
            up to <span className='strong h3'> 90% </span> offer only in <span className='black-f'>Black Friday</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Ccarousel;