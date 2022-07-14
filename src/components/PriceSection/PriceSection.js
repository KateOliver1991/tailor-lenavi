import React from 'react';
import Uniform from "./assets/15.jpg";
import Individual from "./assets/about_us.jpg";
import Repair from "./assets/repair.jpg"

import { 
    PriceSectionContainer,
    PriceSectionContent,
    PriceService,
    PriceSectionTitle,
    PriceH3,
    PriceItemWrapper,
    ItemList,
    PriceItem,
    ItemCost
 } from './PriceElements';

const PriceSection = () => {
  return (
    <PriceSectionContainer id="prices">
        <PriceSectionContent>
            <PriceService>
                <PriceSectionTitle style={{
                    backgroundImage: `url(${Uniform})`,
                    backgroundPosition: '0% 30%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <PriceH3>Школьная форма</PriceH3>
                </PriceSectionTitle>

                <PriceItemWrapper>
                    <ItemList>
                        <PriceItem>Юбка в складку</PriceItem>
                        <ItemCost>от 1150 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Юбка годе</PriceItem>
                        <ItemCost>от 950 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Сарафан</PriceItem>
                        <ItemCost>от 1650 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Жилет на подкладе</PriceItem>
                        <ItemCost>от 1500 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Брюки</PriceItem>
                        <ItemCost>от 1650 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Аксессуары</PriceItem>
                        <ItemCost>от 200 ₽</ItemCost>
                    </ItemList>
                </PriceItemWrapper>
                

            </PriceService>

            <PriceService>
                <PriceSectionTitle style={{
                    backgroundImage: `url(${Individual})`,
                    backgroundPosition: '0% 30%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <PriceH3>Индивидуальный пошив</PriceH3>
                </PriceSectionTitle>

                <PriceItemWrapper>
                    <ItemList>
                        <PriceItem>Юбка </PriceItem>
                        <ItemCost>от 1000 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Брюки</PriceItem>
                        <ItemCost>от 1000 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Платье</PriceItem>
                        <ItemCost>от 1500 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Пиджак на подкладе</PriceItem>
                        <ItemCost>от 2000 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Вечерние платья</PriceItem>
                        <ItemCost>по договоренности</ItemCost>
                    </ItemList>
                </PriceItemWrapper>
                

            </PriceService>

            <PriceService>
                <PriceSectionTitle style={{
                    backgroundImage: `url(${Repair})`,
                    backgroundPosition: '0% 30%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <PriceH3>Ремонт одежды</PriceH3>
                </PriceSectionTitle>

                <PriceItemWrapper>
                    <ItemList>
                        <PriceItem>Укоротить рукава</PriceItem>
                        <ItemCost>от 300 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Укоротить низ брюк</PriceItem>
                        <ItemCost>от 300 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Укоротить платье/юбку</PriceItem>
                        <ItemCost>от 300 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Укоротить пальто/шубу</PriceItem>
                        <ItemCost>от 1000 ₽</ItemCost>
                    </ItemList>
                    <ItemList>
                        <PriceItem>Удлинить изделие</PriceItem>
                        <ItemCost>от 500 ₽</ItemCost>
                    </ItemList>
                
                </PriceItemWrapper>
                

            </PriceService>
        </PriceSectionContent>
    
    </PriceSectionContainer>
  )
}

export default PriceSection