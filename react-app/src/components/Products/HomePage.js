import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './HomePage.css'
const Home = ()=>{


    return(
<>
<NavLink className="card-link" to="/products/sunscreen">
    <div className="card1">
        <div>
       <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1119780586492534894/Screenshot_2023-06-17_at_5.07.36_PM.png?width=1718&height=1133"/>
        </div>
        <div className="card-details">
        <h2 className="info-card1">Sunscreen under $50</h2>
        <h4 className="info-card2">Hydrating formuals that boost glow too</h4>
        <h3 className="info-card3">SHOP NOW</h3>
        </div>
    </div>

</NavLink>
</>
    )
}
export default Home;
