import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcone,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute 
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle }>
            <CloseIcone />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ='main' onClick={ toggle }>Главная</SidebarLink>
                <SidebarLink to ='services' onClick={ toggle }>Услуги</SidebarLink>
                <SidebarLink to ='gallery' onClick={ toggle }>Галерея</SidebarLink>
                <SidebarLink to ='prices' onClick={ toggle }>Цены</SidebarLink>
                <SidebarLink to ='feedback' onClick={ toggle }>Отзывы</SidebarLink>
                <SidebarLink to ='contacts' onClick={ toggle }>Контакты</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = "contacts">Записаться</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar