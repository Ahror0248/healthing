import React, {useState} from 'react';
import {Button} from 'styled-button-component';
import {Navbar, NavbarLink} from 'styled-navbar-component';
import {Nav} from 'styled-nav-component';

const NavbarSection = () => {
    const [hidden, setHidden] = useState(true);
    return (
        <Navbar expandSm light>
            <Nav start>
                <NavbarLink light brand href="#">BRAND</NavbarLink>
                <Nav end>
                    <Button
                        light
                        outline
                        toggleCollapse
                        expandSm
                        onClick={() => setHidden(!hidden)}
                    >
                        <span>&#9776;</span>
                    </Button>
                </Nav>
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
                <NavbarLink light active>Active</NavbarLink>
                <NavbarLink light href="#">Link</NavbarLink>
                <NavbarLink light href="#">Link</NavbarLink>
                <NavbarLink light disabled href="#">Disabled</NavbarLink>
            </Nav>
        </Navbar>
    );
};

export default NavbarSection;