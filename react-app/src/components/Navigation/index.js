import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul>
			<div className="nav-icons-logo">
				<div>

				<NavLink className="sephoria-home" exact to="/">S E P H O R I A</NavLink>
				</div>

			{isLoaded && (
						<div>
							<ProfileButton user={sessionUser} />
						</div>


			)}
			</div>
		</ul>
	);
}

export default Navigation;
