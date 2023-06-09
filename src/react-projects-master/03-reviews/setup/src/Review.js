import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index, setIndex] = useState(3);
const{name, job, image, text} = people[index]
  return <article className='review'>
<div className='img-container'>
  <img src={image} alt={name} className='person-img'></img>
</div>
  </article>;
};

export default Review;
