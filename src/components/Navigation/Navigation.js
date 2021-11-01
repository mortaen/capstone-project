import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import styled from 'styled-components/macro'
import { NavData } from './NavData'
import { IconContext } from 'react-icons'

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false)

  function toggleNavigation() {
    setShowNavigation(!showNavigation)
  }

  function closeNavigation() {
    setShowNavigation(false)
  }

  return (
    <>
      <NavButton
        toggleNavigation={toggleNavigation}
        showNavigation={showNavigation}
      />
      <Nav showNavigation={showNavigation}>
        <NavButton
          toggleNavigation={toggleNavigation}
          showNavigation={showNavigation}
        />
        {NavData.map(item => {
          return (
            <NavItem key={item.id}>
              <StyledLink to={item.path}>
                <IconWrapper>
                  <IconContext.Provider
                    value={{
                      size: '2rem',
                    }}
                  >
                    {item.icon}
                  </IconContext.Provider>
                </IconWrapper>
                <Title>{item.title}</Title>
              </StyledLink>
            </NavItem>
          )
        })}
      </Nav>
      {showNavigation && <ClickArea onClick={closeNavigation}></ClickArea>}
    </>
  )
}

const ClickArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30%;
`

const Nav = styled.nav`
  background-color: #2f4858;
  color: white;
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -70%;
  transition: 850ms;
  list-style-type: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.25rem;

  ${({ showNavigation }) =>
    showNavigation &&
    `
    right: 0;
    `}
`

const NavItem = styled.li`
  padding: 5px;
  margin: 1rem 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const IconWrapper = styled.div`
  display: inline-flex;
  vertical-align: -8%;
`

const Title = styled.span`
  color: white;
  font-size: 2rem;
  padding-left: 0.5rem;
`

export default Navigation
