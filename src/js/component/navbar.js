import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import SWlogo from "../../img/SWlogo.png";
import { Context } from "../store/appContext";

//LIBRERIA BOOTSTRAP FOR REACT

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Badge } from "reactstrap";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<Link to={"/"}>
					<img src={SWlogo} width="30" a height="30" alt="star wars logo" id="logo" />
				</Link>
			</a>
			<Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
				<DropdownToggle caret className="dropdownButton">
					Favorites{" "}
					<Badge color="black" className="badge">
						{store.favorites.length}
					</Badge>
				</DropdownToggle>
				<DropdownMenu end>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, index) => {
							return (
								<DropdownItem key={index}>
									<div className="favAndTrash">
										{favorite}
										<i
											id="delete"
											className="far fa-trash-alt pointer trash"
											onClick={() => {
												actions.deleteFavorite({ index });
											}}
										/>
									</div>
								</DropdownItem>
							);
						})
					) : (
						<DropdownItem>
							<p>No Favorites</p>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
export default Navbar;
