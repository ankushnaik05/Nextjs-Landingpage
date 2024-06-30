// components/features/featurespage.js
'use client'

import React, { useState } from 'react';
import styles from './featurespage.module.css';
import Image from 'next/image';
import image1 from './image1.jpg';
import image2 from './image1.jpg';
import image3 from './image1.jpg';
import image4 from './image1.jpg';
import image5 from './image1.jpg';
import image6 from './image1.jpg';

const FeaturesPage = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const headlines = [
    'Option Screener',
    'Live Market Screener',
    'Option Chain',
    'Option Simulator',
    'Advanced Stock Screener',
    'Option Screener',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 

  const handleUpArrowClick = () => {
    // Slide image towards the right
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDownArrowClick = () => {
    // Slide image towards the left
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 )%images.length);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headline}>THE ULTIMATE DESTINATION OF STOCK MARKET INSIGHT</h1>
      <p className={styles.subtitle}>
        Join 1 million traders and investors who trust Nifty Trader for smart trading & real-time stock insight
      </p>
      <button className={styles.exploreButton} >
        Explore Features <span className={styles.arrow}>&#8594;</span>
        <span className={`${styles.arrow} ${styles.upArrow}`} onClick={handleUpArrowClick}>&#8593;</span>
        <span className={`${styles.arrow} ${styles.downArrow}`} onClick={handleDownArrowClick}>&#8595;</span>
      </button>
      <div className={styles.rectangleContainer}>
        <div
          className={styles.imageContainer}
          style={{ transform: `translateX(-${(currentImageIndex * 100) / 3}%)` }}
        >
          {images.concat(images).map((image, index) => {
            const adjustedIndex = index % images.length;
            let className = `${styles.imageWrapper}`;
            if (adjustedIndex === currentImageIndex) {
              className += ` active`;
            } else if (adjustedIndex === (currentImageIndex - 1 + images.length) % images.length) {
              className += ` prev`;
            } else if (adjustedIndex === (currentImageIndex + 1) % images.length) {
              className += ` next`;
            }
            return (
              <div key={index} className={className}>
                <div className={styles.imageHeadline}>{headlines[adjustedIndex]}</div>
                <Image
                  src={image}
                  alt={`Image ${adjustedIndex + 1}`}
                  className={styles.imageSlide}
                  layout="responsive"
                  width={300}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
