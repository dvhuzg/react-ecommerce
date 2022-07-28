import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";
const Dcard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <div>
                <div className="product" key={index}>
                  <div className="box">
                      <div className="img">
                        <img src={value.cover} alt="img" width='100%'/>
                      </div>
                      <h4>{value.name}</h4>
                      <span>{value.price}</span>
                  </div>
                </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Dcard;
