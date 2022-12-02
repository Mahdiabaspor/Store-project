import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../Styles/Components/ProductSlider.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ProductSlider = ({ Items }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider mt-4 container">
      <div className="row">
        <div className="col-4 col-md-2 slider-info">
          <h5>Best Offers</h5>
          <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" />
        </div>
        <Slider {...settings} className="col-8 col-md-10">
          {Items &&
            Items.map((item) => (
              <div className="slide" key={item._id}>
                <Link to={`/product/${item._id}`}>
                <div className="product-slide">
                  <div className="slider-offers-details">
                    <img
                      src="https://dkstatics-public.digikala.com/digikala-products/2203180.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                      alt="offer items"
                    />
                    <h6>{item.name}</h6>
                  </div>
                  <div className="slidder-offer-price-btn">
                    <p>Price: <span className="crossed-price">{item.price}</span>   <span className="offer-price">{item.price - 0.2 * item.price} T</span> </p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
