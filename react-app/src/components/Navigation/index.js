import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { thunkCurrProducts } from '../../store/product';
import {useEffect} from 'react'
import communityIcon from "../../images/community.png";
import storeIcon from "../../images/store.png"
function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);
	const currProducts = useSelector(state=>state.products.currProducts)

	useEffect(()=>{
		dispatch(thunkCurrProducts())
	}, [dispatch, sessionUser])

	const productArr = Object.values(currProducts)

	let items = 0;
	for (let i = 0; i<productArr.length; i++){
	  const quantity = parseInt(productArr[i]?.quantity)
	  items+= quantity
	}
const handlClick=()=>{
	 alert("feature coming soon!")
}
	return (
		<ul className="ul-root">
			<div className="blue-div">
				Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply. LEARN MORE
			</div>
			<div className="nav-icons-logo">
				<div>

					<NavLink className="sephoria-home" exact to="/"><div className="sephoria-logo-home">S E P H O R I A</div></NavLink>
				</div>
				<div className="search-bar-nav">
				<i className="fas fa-search"></i>
					<input
						className="search-text"
						type="search"
						placeholder='Search'
					/>
				</div>
				<div onClick={handlClick} className="store-location-icon">
					<div>
						<img className="store-review-likes" src={storeIcon}/>
					</div>
					<div>
						<h5 className="store-serv">Stores & Services</h5>
						<h6 className="marina-sqr">Sephora Marina Square</h6>
					</div>

				</div>
				<div onClick={handlClick}className="community-image">
					<div >
							<img className="community-forum-icon" src={communityIcon} alt="Community Icon"/>
					</div>

					<div className="com-word">

					Community
					</div>
				</div>

				{isLoaded && (
					<div>
						<ProfileButton user={sessionUser} />
					</div>


				)}
{sessionUser &&	<div>
				<a className="reviews-link" href="/reviews/curr">
					<div className="reviews-home">
				<img className="reviews-chat-icon" src="https://cdn.discordapp.com/attachments/1062942242450460744/1119725077399863317/reviews.png"/>
				Manage Reviews
				</div>
				</a>
			</div>}
			{sessionUser && <NavLink to="/products/likes">
			<div>
				<img className="reviews-chat-icon" src="https://media.discordapp.net/attachments/1062942242450460744/1119725148451385445/heart.png?width=418&height=343"/>
			</div>
			</NavLink>}
			<div className="cart_icon-item">

			{sessionUser &&	<a href="/products/curr">
				<img className="reviews-chat-icon basket notification" src="https://media.discordapp.net/attachments/1062942242450460744/1119725163261472879/cart.png?width=484&height=400"/>
				</a>}
				{sessionUser && currProducts && items!==0 && <span className="not">{items}</span>}
			</div>
			</div>
					<div className="link-to-spec-products">

							<NavLink className="nav-bar-remove-text-decoration" to="/products/all">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">All</p>
						</div>
						</NavLink>
							<NavLink className="nav-bar-remove-text-decoration" to="/products/sunscreen">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Sunscreens</p>
						</div>
						</NavLink>
							<NavLink className="nav-bar-remove-text-decoration" to="/products/makeup">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Makeup</p>
						</div>
						</NavLink>
							<NavLink className="nav-bar-remove-text-decoration" to="/products/hair">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Hair</p>
						</div>
						</NavLink>
						<NavLink className="nav-bar-remove-text-decoration" to="/products/fragrance">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Fragrance</p>
						</div>
						</NavLink>
						<NavLink className="nav-bar-remove-text-decoration" to="/products/skincare">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Skincare</p>
						</div>
						</NavLink>
						<NavLink className="nav-bar-remove-text-decoration" to="/products/body">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Bath & Body</p>
						</div>
						</NavLink>
					</div>
		</ul>
	);
}

export default Navigation;
