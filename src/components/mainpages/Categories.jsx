import React from "react";
import fashion from "../../common/assets/images/Category/fashion.png";
import elec from "../../common/assets/images/Category/elec.png";
import car from "../../common/assets/images/Category/car.png";
import home from "../../common/assets/images/Category/home.png";
import gift from "../../common/assets/images/Category/gift.png";
import music from "../../common/assets/images/Category/music.png";
import health from "../../common/assets/images/Category/health.png";
import pet from "../../common/assets/images/Category/pet.png";
import toy from "../../common/assets/images/Category/toy.png";
import grocery from "../../common/assets/images/Category/grocery.png";
import book from "../../common/assets/images/Category/book.png";

const Categories = () => {
  const data = [
    {
      cateImg: fashion,
      cateName: "Fashion",
    },
    {
      cateImg: elec,
      cateName: "Electronic",
    },
    {
      cateImg: car,
      cateName: "Cars",
    },
    {
      cateImg: home,
      cateName: "Home & Garden",
    },
    {
      cateImg: gift,
      cateName: "Gift",
    },
    {
      cateImg: music,
      cateName: "Music",
    },
    {
      cateImg: health,
      cateName: "Health & Beauty",
    },
    {
      cateImg: pet,
      cateName: "Pets",
    },
    {
      cateImg: toy,
      cateName: "Toy",
    },
    {
      cateImg: grocery,
      cateName: "Grocery",
    },
    {
      cateImg: book,
      cateName: "Book",
    },
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
