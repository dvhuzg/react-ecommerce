import React from "react";

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>0967641315</label>
            <i className="fa fa-envelope"></i>
            <label>dohungdvh@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
            <span>🎏</span>
            <label htmlFor="">EN</label>
            <span>🎏</span>
            <label htmlFor="">USD</label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
