import styled from 'styled-components'
import { RiFundsBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #192734;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavBarContainer = styled.div`
  background: #192734;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const NavIcon = styled(RiFundsBoxFill)`
  background: #192734;
  color: #F5F8FA;
  font-size: 1.2em;  
  margin-right: 0.5rem;
  stroke: none;
`

export const NavLogo = styled(Link)`
  background: #192734;
  color: #F5F8FA;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`