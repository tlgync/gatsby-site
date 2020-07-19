import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const MenuIcon = styled.button`
  @media (min-width: 830px) {
    display: none;
  }
  @media (max-width: 830px) {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    outline:0;
    cursor: pointer;
    z-index: 5;

    div {
      width: 1.5rem;
      height: 0.2rem;
      background: black;
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;

      :first-child {
        transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`

const MenuLinks = styled.nav`
@media (min-width: 830px){
  a{
    margin: 0 20px;
    text-decoration: none;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: black;
    :last-child{
        margin-right: 0;
    }
}
}
}
  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background: #d7d7d7;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(-100%)")};

    a {
      text-decoration: none;
      margin: 30px 0;
      color: black;
      font-size: 1rem;
      transition: color 300ms;
      
      :hover {
        color: #6ab4ff;
      }
    }
  }
`

const Header = () => {
  const [nav, showNav] = useState(false)
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <div className="logo">
            <Link to="/">Tolga</Link>
          </div>
          <div className="navigation">
            <MenuLinks nav={nav}>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </MenuLinks>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
