import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [ burgerStatus, setBurgerStatus ] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)

  return (
    <Container>
      <Logo>
       <a href="#">
         <img src="/images/logo.svg" alt="logo"/>
       </a>
      </Logo>

      <Menu>
        {cars && cars.map((car,index)=> (
          <a href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla</a>
        <a href="#">Account</a>

        <CustomMenu onClick={()=>setBurgerStatus(true)}> </CustomMenu>

        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
          </CloseWrapper>

          {cars && cars.map((car,index) => (
            <li><a href='#'>{car}</a></li>
          ))}

          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
        </BurgerNav>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      color: white;
      border-radius: 3px;
    }
  }

  @media(max-width: 1197px) {
    display: none;          
  }
`

const RightMenu = styled.div`
  display : flex;
  align-items: center;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      color: white;
      border-radius: 3px;
      padding: 0 5px;
    }

  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 60px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translate(100%)'};
  transition: transform 0.2s ease-in;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.35);

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
   cursor: pointer; 
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Logo = styled.div`
  width: 300px;

  @media (max-width: 1197px) {
    width: 150px;
  }

  @media (max-width: 710px) {
    width: 80px;
  }
`
