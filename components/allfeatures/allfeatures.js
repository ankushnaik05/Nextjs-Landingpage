// components/features/allfeatures.js

'use client'
import React, { useState } from 'react';
import styles from './allfeatures.module.css';
import promoImage from './image.png'; // Import the image
import Image from 'next/image';
import icon1 from './image1.png';
import icon2 from './image2.png';
import icon3 from './image3.png';
import icon4 from './image4.png';
import icon5 from './image5.png'; // New image imports for hover state
import icon6 from './image6.png';
import icon7 from './image7.png';
import icon8 from './image8.png';

const AllFeatures = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Define feature data including titles, descriptions, and icons
    const features = [
        {
            title: 'Advanced stock screener',
            description: 'Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening.',
            icons: [icon1, icon5], // Default and hovered icons
        },
        {
            title: 'Live Market screener',
            description: 'Access real-time market data and dynamic filters to ensure timely trades without outdated information.',
            icons: [icon2, icon6],
        },
        {
            title: 'Options screener',
            description: 'Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters.',
            icons: [icon3, icon7],
        },
        {
            title: 'Advanced option chain',
            description: 'Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting.',
            icons: [icon4, icon8],
        },
    ];

    // Handle mouse enter event
    const handleHoverEnter = (index) => {
        setHoveredIndex(index);
    };

    // Handle mouse leave event
    const handleHoverLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className={styles.container}>
            {/* First Container */}
            <div className={`${styles.featuresContainer} ${styles.featuresWrapper}`}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${styles.featureBox} relative p-4 rounded text-left bg-white transition duration-300 ease-in-out transform hover:bg-white hover:shadow-md cursor-pointer`}
                        onMouseEnter={() => handleHoverEnter(index)}
                        onMouseLeave={handleHoverLeave}
                    >
                        <Image src={hoveredIndex === index ? feature.icons[1] : feature.icons[0]} className={styles.featureIcon} />
                        <h2 className={styles.featureTitle}>{feature.title}</h2>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>

            {/* Second Container */}
            <div className={styles.promoContainer}>
                <div className={styles.promoText}>
                    <h2 className={styles.promoTitle}>Missing trades because of outdated data?</h2>
                    <p className={styles.promoDescription}>Get the live market screening with dynamic filters.</p>
                </div>
                <div className={styles.promoImage}>
                    <Image src={promoImage} className={styles.promoImage} alt="Promotion" />
                </div>
                <div className={styles.promoButtonContainer}>
                    <button className={styles.promoButton}>Get Free Trial</button>
                </div>
            </div>
        </div>
    );
};

export default AllFeatures;
