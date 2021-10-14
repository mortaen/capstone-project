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
        {NavData.map((item, id) => {
          return (
            <NavItem key={id}>
              <Link to={item.path}>
                {item.icon}
                <Title>{item.title}</Title>
              </Link>
            </NavItem>
          )
        })}
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  background-color: #1f2933;
  color: white;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -50%;
  transition: 850ms;
  list-style-type: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px;
  ${({ navigation }) =>
    navigation &&
    `
    right: 0;
    `}
`

const NavItem = styled.li`
  padding: 5px;
`

const Title = styled.span`
  color: white;
`

export default Navigation
