import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import styled from 'styled-components/macro'
import { NavData } from './NavData'

function Navigation() {
  const [navigation, setNavigation] = useState(false)

  function showNavigation() {
    setNavigation(!navigation)
  }

  return (
    <>
      <NavButton showNavigation={showNavigation} navigation={navigation} />
      <Nav navigation={navigation}>
        <NavButton showNavigation={showNavigation} navigation={navigation} />
        {NavData.map((item, index) => {
          return (
            <NavItem key={index}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </NavItem>
          )
        })}
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  background: #c9ccd3;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-blend-mode: lighten;
  background-blend-mode: multiply, multiply;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  list-style-type: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px;
  opacity: 0.75;
  ${({ navigation }) =>
    navigation &&
    `
    right: 0;
    `}
`

const NavItem = styled.li`
  padding: 5px;
`

export default Navigation
