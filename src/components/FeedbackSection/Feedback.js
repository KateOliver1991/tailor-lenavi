import React, { useState } from "react";
import people from "./FeedData.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import {
  ReviewContainer, 
  ReviewContent, 
  ReviewSecTitle, 
  Underline, 
  ReviewBox, 
  ImgContainer,
  PersonImg,
  QuoteIcon,
  ReviewAuthor,
  ReviewText,
  ReviewBtnContainer,
  PrevBtn,
  NextBtn
} from './FeedbackElements.js';


const Review = () => {
  const [index, setIndex] = useState(0);
  const { name,  image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  
  

  return (
    <ReviewContainer id="feedback">
      <ReviewContent>
        <ReviewSecTitle>О нас говорят</ReviewSecTitle>
        <Underline/>
        <ReviewBox>
          <ImgContainer>
            <PersonImg src={image} alt={name}/>
            <QuoteIcon><FaQuoteRight/></QuoteIcon>
          </ImgContainer>
          <ReviewAuthor>{name}</ReviewAuthor>
          <ReviewText>{text}</ReviewText>
          <ReviewBtnContainer>
            <PrevBtn onClick={prevPerson}><FaChevronLeft/></PrevBtn>
            <NextBtn onClick={nextPerson}><FaChevronRight/></NextBtn>
          </ReviewBtnContainer>
        </ReviewBox>
      </ReviewContent>
    </ReviewContainer>
  );
};

export default Review;