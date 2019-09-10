import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<Navbar bg='dark' expand='lg' variant='dark'>
				<Navbar.Brand href='#home'>Home</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Projects</Nav.Link>
						<Nav.Link href='#link'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
