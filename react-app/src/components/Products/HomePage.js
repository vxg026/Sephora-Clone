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
        swipeable={true}
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
          <NavLink className="card-link" to="/products/makeup">
            <div className="card2">
              <div>
                <img className="card-img2" src="https://media.discordapp.net/attachments/1062942242450460744/1119868816260878406/Screenshot_2023-06-17_at_10.58.31_PM.png?width=1689&height=1130" />
              </div>
              <div className="card-details2">
                <h2 className="info-card1">Must have makeup</h2>
                <h5 className="info-card2">The latest from popular and environmentally friendly brands</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/body">
            <div className="card3">
              <div>
                <img className="card-img3" src="https://media.discordapp.net/attachments/1062942242450460744/1119868815946297425/Screenshot_2023-06-17_at_10.58.16_PM.png?width=1694&height=1133" />
              </div>
              <div className="card-details3">
                <h2 className="info-card1">New Isle of Paradise Body Care</h2>
                <h5 className="info-card2">Cleanse, exfoliate,, and moisterize with skincare-powered formulas</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/skincare">
            <div className="card4">
              <div>
                <img className="card-img" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120936619776688178/Screenshot_2023-06-20_at_9.40.34_PM.png" />
              </div>
              <div className="card-details4">
                <h2 className="info-card1">Skincare for all skin types</h2>
                <h5 className="info-card2">Skincare for every age. Give your skin what it needs each step of the way.</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/fragrance">
            <div className="card5">
              <div>
                <img className="card-img" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120938674725584946/Screenshot_2023-06-20_at_9.49.45_PM.png" />
              </div>
              <div className="card-details5">
                <h2 className="info-card1">Fragrance</h2>
                <h5 className="info-card2">Find your fragrance, your perfect scent is waiting.</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink className="card-link" to="/products/hair">
            <div className="card6">
              <div>
                <img className="card-img" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120941265886912582/Screenshot_2023-06-20_at_10.00.00_PM.png" />
              </div>
              <div className="card-details6">
                <h2 className="info-card1">Hair</h2>
                <h5 className="info-card2">Find the best products for your hair type.</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>

      </Carousel>
      </div>
      <div className="bottom-tiles">
        <div className="f-card1">
            <div>
            <img className="f-img1" src="https://media.discordapp.net/attachments/1062942242450460744/1119876518471016498/Screenshot_2023-06-17_at_11.15.05_PM.png?width=1709&height=1133"/>
            </div>
            <div className="f1-text">
                <h2>Our Commitment to Diversity, Equity & Inclusion</h2>

            </div>
        </div>


        <div className="f-card1">
            <div className="planet-blue-div">
            <img className="f-img1" src="https://media.discordapp.net/attachments/1062942242450460744/1119876518735261706/Screenshot_2023-06-17_at_11.15.16_PM.png?width=1700&height=1133"/>
            </div>
            <div className="f2-text">
                <h2 className="beaut-on-demand">Beauty on Demand</h2>
                <h4 className="on-demand">Fast and easy options that work for you.</h4>

            </div>
        </div>



        <div className="f-card1">
            <div className="brown-div">
            <img className="f-img1" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120794372884140064/Screenshot_2023-06-20_at_12.16.32_PM.png"/>
            </div>
            <div className="f3-text">
                <h2 className="beaut-on-demand">Clean + Planet Positive</h2>
                <h4 className="on-demand">Brands on a mission to change your skin and the earth.</h4>

            </div>
        </div>
      </div>
      <div className="f-feedback">
        <h3 className="f-fbck-txt">Website feedback? Let us know</h3>
      </div>
      <div className="footer">
          <div className="h3-div">
        <a href="https://www.linkedin.com/in/vanessa-gonzalez-82667a1b3/">
             <h3>Linked In</h3>
                  </a>
                  <a href="https://github.com/vxg026">
                    <div className="github-url">
                               <img className="github"src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"/> <h3>GitHub</h3>
                    </div>

                  </a>

          </div>


      </div>
    </div>


  );
}

export default Home;
