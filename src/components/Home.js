import React from 'react'
import HeaderEx from "./HeaderEx";
import CarouselEx from "./CarouselEx";
import CompareEx from "./CompareEx";
import AccordionEx from "./AccordionEx";
import ReviewEx from "./ReviewEx";
import FooterEx from "./FooterEx";
import SectionCounter from './SectionCounter';

const Home = () => {
  return (
    <div>
    <HeaderEx />
    <CarouselEx />
    <SectionCounter />
    <CompareEx />
    <AccordionEx />
    <ReviewEx />
    <FooterEx />
    </div>
  )
}

export default Home