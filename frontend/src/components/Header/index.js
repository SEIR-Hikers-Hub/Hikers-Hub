import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// DEPENDENCIES
import { Link } from 'react-router-dom';
// Logo
import hikers_hub_logo from '../../assets/hikers_hub_logo.png';
// STYLE
import './style.css';

import Weather from '../../pages/Weather';

export default function Header(props) {

	// state declaration: build JSX array of NavBar items
	const initialState = []
	const [navItems, setNavItems] = useState(initialState)
	const [searchString, setSearchString] = useState('');
	// const [userData, setUserData] = useState({});
	const navigate = useNavigate()

	
	// search form functions
	function handleChange(event) {
		setSearchString(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await axios.request(options)
		.then(response => {
			console.log(response.data);
			//output is sent to console but not to the weather page yet
			props.setWeatherData(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		// navigate('/weather');
	}

	const options = {
		method: 'GET',
		url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
		params: { q: searchString, days: '3' },
		headers: {
			'X-RapidAPI-Key': '722919fb48mshe0390e26231a4fdp1f95e1jsn1d9ac9af1b45',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};


	// add NavBar items to JSX array depending on App login state
	useEffect(() => {
		if (props.isLoggedIn) {
			setNavItems(initialState.concat(
				<Nav className="me-auto" key='2'>
					<Nav.Link className="log" onClick={() => {
						props.setIsLoggedIn(false)
						localStorage.clear()
						console.log(localStorage.token)
					}}>Log Out</Nav.Link>
					<Nav.Link className="nav-item" href="/addtrail">Add Trail</Nav.Link>
				</Nav>
			))
		} else {
			setNavItems(initialState.concat([
				<Nav className="me-auto" key='2'>
					<Nav.Link className="nav-item" href="/login" key='2'>Log In</Nav.Link>
					<Nav.Link className="nav-item" href="/signup" key='3'>Sign Up</Nav.Link>
				</Nav>
			]))
		}
	}, [props.isLoggedIn])

	return (
		<Navbar className='navbar' variant='light' fixed='top' expand='lg'>
			<Container>
				<Link className='link' to='/'>
					<Navbar.Brand className='nav-logo'>Logo</Navbar.Brand>
				</Link>

				{/* <img src="../../assets/hikers_hub_logo.png" className="logo" alt="hikers hub logo"/> */}

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					{navItems}
					<Form onSubmit={handleSubmit} className='d-flex'>
						<Form.Control
							type='search'
							placeholder='Search for weather by location'
							className='me-2'
							aria-label='Search'
							name='searchString'
							onChange={handleChange}
							value={searchString}
						/>
						<Button
							type='submit'
							variant='outline-success' 
							// onClick={() => {
							// 	setUserData = {userData}
							// }}
							>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};