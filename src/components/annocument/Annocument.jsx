import React from "react";
import banner_1 from '../../common/assets/images/banner-1.png'
import banner_2 from '../../common/assets/images/banner-2.png'
const Annocument = () => {
    const mystyle = {
        width: '30%',
        height: '340px',
    }
    const mystyle1 = {
        width: '68%',
        height: '340px',
    }
  return (
    <>
      <section className="annouc background">
        <div className="container d_flex">
            <div className="img" style={mystyle}>
                <img src={banner_1} alt="" width='100%' height='100%'/>
            </div>
            <div clssName="img" style={mystyle1}>
                <img src={banner_2} alt="" width='100%' height='100%'/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
