import React from "react";
import c_1 from "../../common/assets/images/Category/cat-1.png";
import c_2 from "../../common/assets/images/Category/cat-2.png";
const Catg = () => {
  const data = [
    {
      cateImg: c_1,
      cateName: "Apple",
    },
    {
      cateImg: c_2,
      cateName: "Samsung",
    },
    {
      cateImg: c_1,
      cateName: "Oppo",
    },
    {
      cateImg: c_2,
      cateName: "Vivo",
    },
    {
      cateImg: c_1,
      cateName: "Redmi",
    },
    {
      cateImg: c_2,
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
            <button><h1>View All Brands</h1></button>
        </div>
      </div>
    </>
  );
};

export default Catg;
