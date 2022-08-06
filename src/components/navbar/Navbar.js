import React from 'react';
import { FaBars } from 'react-icons/fa';
import { HideOn } from 'react-hide-on-scroll';
import {
    Nav, 
    NavContainer, 
    NavLogo, 
    NavImg, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavContainer>
            <HideOn inverse height={700}>
                <NavLogo to= "/">
                    <NavImg src={require('./assets/LogoMini.png')} alt='Company logo'/>
                </NavLogo>
            </HideOn>
            
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to ="main">Главная</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to ="services">Услуги</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to ="gallery">Галерея</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to ="prices">Цены</NavLinks>
                </NavItem>    
                <NavItem>
                    <NavLinks to ="feedback">Отзывы</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to ="contacts">Контакты</NavLinks>
                </NavItem>
                <HideOn inverse height={700}>
                    <NavBtn>
                        <NavBtnLink to="contacts">Записаться</NavBtnLink>
                    </NavBtn> 
                </HideOn>
                       
            </NavMenu>
        </NavContainer>
    </Nav>
</>
  )
}

export default Navbar