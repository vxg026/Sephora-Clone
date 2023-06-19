import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './HomePage.css';


const Home = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,

    }
  };


  return (
    <div className="cards-container">
        <div className="cards-con-car">
      <Carousel
        showDots={true}
        responsive={responsive}

      >
        <div>
          <NavLink className="card-link" to="/products/sunscreen">
            <div className="card1">
              <div>
                <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1119780586492534894/Screenshot_2023-06-17_at_5.07.36_PM.png?width=1718&height=1133" />
              </div>
              <div className="card-details1">
                <h2 className="info-card1">Sunscreen under $50</h2>
                <h5 className="info-card2">Hydrating formulas that boost glow too</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>

        <div>
          <NavLink className="card-link" to="/products/sunscreen">
            <div className="card2">
              <div>
                <img className="card-img2" src="https://media.discordapp.net/attachments/1062942242450460744/1119868816260878406/Screenshot_2023-06-17_at_10.58.31_PM.png?width=1689&height=1130" />
              </div>
              <div className="card-details2">
                <h2 className="info-card1">Summer must-haves!</h2>
                <h5 className="info-card2">Hydrating formulas that boost glow too</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/sunscreen">
            <div className="card3">
              <div>
                <img className="card-img3" src="https://media.discordapp.net/attachments/1062942242450460744/1119868815946297425/Screenshot_2023-06-17_at_10.58.16_PM.png?width=1694&height=1133" />
              </div>
              <div className="card-details3">
                <h2 className="info-card1">Sunscreen under $50</h2>
                <h5 className="info-card2">Hydrating formulas that boost glow too</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/sunscreen">
            <div className="card4">
              <div>
                <img className="card-img4" src="https://media.discordapp.net/attachments/1062942242450460744/1119868815946297425/Screenshot_2023-06-17_at_10.58.16_PM.png?width=1694&height=1133" />
              </div>
              <div className="card-details3">
                <h2 className="info-card1">Sunscreen under $50</h2>
                <h5 className="info-card2">Hydrating formulas that boost glow too</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
      </Carousel>
      </div>
      <div className="bottom-tiles">
        <div className="f-card1">
            <div >
            <img className="f-img1" src="https://media.discordapp.net/attachments/1062942242450460744/1119876518471016498/Screenshot_2023-06-17_at_11.15.05_PM.png?width=1709&height=1133"/>
            </div>
            <div className="f1-text">
                <h2>Our Commitment to Diversity, Equity & Inclusion</h2>

            </div>
        </div>


        <div className="f-card1">
            <div >
            <img className="f-img1" src="https://media.discordapp.net/attachments/1062942242450460744/1119876518735261706/Screenshot_2023-06-17_at_11.15.16_PM.png?width=1700&height=1133"/>
            </div>
            <div className="f1-text">
                <h2>Our Commitment to Diversity, Equity & Inclusion</h2>

            </div>
        </div>



        <div className="f-card1">
            <div >
            <img className="f-img1" src="https://media.discordapp.net/attachments/1062942242450460744/1119876518169030747/Screenshot_2023-06-17_at_11.15.37_PM.png?width=1709&height=1133"/>
            </div>
            <div className="f1-text">
                <h2>Our Commitment to Diversity, Equity & Inclusion</h2>

            </div>
        </div>
      </div>
      <div className="f-feedback">
        <h3 className="f-fbck-txt">Website feedback? Let us know</h3>
      </div>
    </div>


  );
}

export default Home;
