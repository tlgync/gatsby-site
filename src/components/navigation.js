import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuIcon = styled.button`
@media (min-width: 700px){
    display:none;
}
  @media (max-width: 700px) {
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
const Wrapper = styled.div`
@media (max-width: 700px) {
  background: #d7d7d7;
}
`

const MenuLinks = styled.nav`
@media(min-width: 700px){
    display:none;
}
@media (max-width: 700px) {
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
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

  ul {
    list-style-type: none;
  }
  li {
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
      color: #6ab4ff;
    }
  }
}
`

const Navigation = () => {
  const [nav, showNav] = useState(false)
  return (
    <Wrapper>
      <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks nav={nav}>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </MenuLinks>
    </Wrapper>
  )
}

export default Navigation
