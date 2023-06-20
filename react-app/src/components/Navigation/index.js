import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

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
				<div className="store-location-icon">
					<div>
						<img className="store-review-likes" src="https://cdn.discordapp.com/attachments/1062942242450460744/1119725107829551204/store.png"/>
					</div>
					<div>
						<h5 className="store-serv">Stores & Services</h5>
						<h6 className="marina-sqr">Sephora Marina Square</h6>
					</div>

				</div>
				<div className="community-image">
					<div >
							<img className="community-forum-icon" src="https://cdn.discordapp.com/attachments/1062942242450460744/1119725131355398184/community.png"/>
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
	<div>
				<a className="reviews-link" href="/reviews/curr">
					<div>
				<img className="reviews-chat-icon" src="https://cdn.discordapp.com/attachments/1062942242450460744/1119725077399863317/reviews.png"/>
				Manage Reviews
				</div>
				</a>
			</div>
			<div>
				<img className="reviews-chat-icon" src="https://media.discordapp.net/attachments/1062942242450460744/1119725148451385445/heart.png?width=418&height=343"/>
			</div>
			<div>
				<a href="/products/curr">
				<img className="reviews-chat-icon" src="https://media.discordapp.net/attachments/1062942242450460744/1119725163261472879/cart.png?width=484&height=400"/>
				</a>
			</div>
			</div>
					<div className="link-to-spec-products">

							<NavLink to="/products/all">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">All</p>
						</div>
						</NavLink>
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Brands</p>
						</div>
							<NavLink to="/products/sunscreen">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Sunscreens</p>
						</div>
						</NavLink>
							<NavLink to="/products/makeup">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Makeup</p>
						</div>
						</NavLink>
							<NavLink to="/products/hair">
						<div className="div-black-nav-bar">
						<p className="black-bar-style">Hair</p>
						</div>
						</NavLink>

					</div>
		</ul>
	);
}

export default Navigation;
