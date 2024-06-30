'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './faq.module.css';
import downarrow from './image.png'
import uparrow from './image1.png'

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqItems = [
    {
      question: "What is the Nifty Trader Prime Plan?",
      answer: "The Nifty Trader Prime Plan is a premium subscription service that offers advanced tools and analytics for traders."
    },
    {
      question: "How do I sign up for the Prime Plan?",
      answer: "You can sign up for the Prime Plan by visiting our website and clicking on the 'Sign Up' button."
    },
    {
      question: "What benefits do I get with the Prime Plan?",
      answer: "With the Prime Plan, you get access to exclusive trading tools, real-time data, and priority customer support."
    },
    {
      question: "Is there a free trial for the Prime Plan?",
      answer: "Yes, we offer a 14-day free trial for the Prime Plan."
    },
    {
      question: "Can I cancel my Prime Plan subscription?",
      answer: "Yes, you can cancel your Prime Plan subscription at any time through your account settings."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact customer support by emailing support@niftytrader.com or calling our support hotline."
    }
  ];

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.content}>
        <div className={styles.title}>FAQ</div>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.question}>
            <div onClick={() => handleToggle(index)} className={styles.questionHeader}>
              <span className={styles.questionText}>
                {item.question}
              </span>
              <span >
                {expandedIndex === index ? (
                 <Image src={uparrow}  className={styles.arrow}/>
                ) : (
                    <Image src={downarrow}  className={styles.arrow}/>
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <div className={styles.answer}>
                {item.answer}
              </div>
            )}
            <span className={styles.line}></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
