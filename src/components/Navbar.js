import React from 'react'
import {
  Nav,
  NavBarContainer,
  NavIcon,
  NavLogo,
} from './Navbar.elements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>
            <NavIcon />
            InvesTech
          </NavLogo>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar
