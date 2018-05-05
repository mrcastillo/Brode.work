import React from "react";
import { Link }  from "react-router-dom";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
}

class NavBar extends React.Component { 
    render(){
        return(
            <Navbar>
                <Nav>
                    <NavItem componentClass={Link} eventKey={1} href="/" to={"/"}>
                        <span className={"nav-text"}>Home</span>
                    </NavItem>
                    <NavItem componentClass={Link} eventKey={2} href="/projects" to={"/projects"}>
                        <span className={"nav-text"}>Projects</span>
                    </NavItem>
                    <NavItem componentClass={Link} eventKey={2} href="/blog" to={"/blog"}>
                        <span className={"nav-text"}>My Blog</span>
                    </NavItem>
                    <NavDropdown eventKey={3} title="More" id=" ">
                    <MenuItem eventKey={3.1}>Comedy - IvanManito</MenuItem>
                        <MenuItem eventKey={3.2}>Bvity - News Site</MenuItem>
                        <MenuItem eventKey={3.3}>Joe Rogan Experience</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;


/*
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Brode.Work</a>
                    </Navbar.Brand>
                </Navbar.Header>
*/