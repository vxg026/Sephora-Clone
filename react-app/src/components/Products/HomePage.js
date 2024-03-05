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

    },
    smaller: {
      breakpoint: { max: 1024, min: 760 },
      items: 2,
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
                <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1119780586492534894/Screenshot_2023-06-17_at_5.07.36_PM.png?ex=65ecf9f0&is=65da84f0&hm=c21ce7295d8e2b70dc837cae768a49105a97bef79c2ec67018083f2c5fb3c69a&=&format=webp&quality=lossless&width=1584&height=1045" />
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
                <img className="card-img2" src="https://media.discordapp.net/attachments/1062942242450460744/1119868816260878406/Screenshot_2023-06-17_at_10.58.31_PM.png?ex=65ed4c1b&is=65dad71b&hm=cd9bc688f05cf1abf37a285600a05f4b075e28650a1d6fb19cd0945184874bf3&=&format=webp&quality=lossless&width=1584&height=1060" />
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
                <img className="card-img3" src="https://media.discordapp.net/attachments/1062942242450460744/1119868815946297425/Screenshot_2023-06-17_at_10.58.16_PM.png?ex=65ed4c1b&is=65dad71b&hm=70108da8df124a3e8b2806656cc0099432aa3f647a2e99aa2648416f8214b8e9&=&format=webp&quality=lossless&width=1584&height=1060" />
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
                <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1120936619776688178/Screenshot_2023-06-20_at_9.40.34_PM.png?ex=65f12e94&is=65deb994&hm=e50517c1efa2e74f214a70540a6dcd1a2c66d53e879e8c6d69e467a1155e1a28&=&format=webp&quality=lossless&width=1584&height=1056" />
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
                <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1120941265886912582/Screenshot_2023-06-20_at_10.00.00_PM.png?ex=65f132e7&is=65debde7&hm=d4e72e1eb95bf315ca98b8e34efcbc574ec98e7bd977d7a7f30d5fc865619420&=&format=webp&quality=lossless&width=1584&height=1051" />
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
                <img className="card-img" src="https://cdn.discordapp.com/attachments/1062942242450460744/1120793308382363678/Screenshot_2023-06-20_at_12.12.08_PM.png?ex=65f0a91c&is=65de341c&hm=377b63d0ef7b09edeb7267398889c45eb18196fcb9b004dc4a71a4c0c17e4058&" />
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
    </div>


  );
}

export default Home;
