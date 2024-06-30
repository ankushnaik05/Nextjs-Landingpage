import React from 'react';
import styles from './footer.module.css';
import svgImage from './image.png';
import svgImage1 from './image1.png';
import svgImage2 from './image2.png';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.bigContainer}>
        {/* Background SVG Image 1 */}
        <div className={styles.imageContainer}>
          <Image priority src={svgImage1} className={styles.backgroundImage} alt="SVG Image 1" />
        </div>

        {/* Background SVG */}
        <svg className={styles.backgroundSVG} viewBox="0 0 961 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M843 490.965C955.507 585.712 874.751 616.296 961 717.808L-288 856V-14H473.722C473.722 -14 447.304 189.947 541.331 306.566C654.075 446.401 689.221 361.462 843 490.965Z" fill="url(#paint0_linear_1_268)"/>
          <defs>
            <linearGradient id="paint0_linear_1_268" x1="258.979" y1="-432.486" x2="1104.82" y2="1074.58" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B7C2FF"/>
              <stop offset="1" stop-color="#D5BDF4"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Content */}
        <div className={styles.imageContainer}>
          <svg className={styles.logoSVG} viewBox="0 0 805 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M706.636 432.445C767.633 498.618 805 713 805 713L-0.000178752 674.742L-9.00238e-05 -105C-9.00238e-05 -105 166.443 -99.8811 278.132 -27.1181C393.33 47.9308 308.317 180.332 394.02 277.998C503.072 402.271 594.027 310.28 706.636 432.445Z" fill="url(#paint0_linear_1_269)"/>
            <defs>
              <linearGradient id="paint0_linear_1_269" x1="-67.3932" y1="264.773" x2="462.819" y2="227.595" gradientUnits="userSpaceOnUse">
                <stop stop-color="#839BF3"/>
                <stop offset="1" stop-color="#C3DAFC"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* SVG Image */}
        <div className={styles.imageContainer}>
          <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
        </div>

        <div className={styles.imageContainer}>
          <Image priority src={svgImage2} className={styles.okImage2} alt="SVG Image" />
        </div>

        <div className={styles.textContainer}>
          <div  className={styles.text}>Screening like a pro with</div>
          <div className={styles.boldText}>Nifty Trader</div>
          <div className={styles.smallText}>Stop wasting time and start winning. Get access<p> to Nifty Trader stock screeners today.</p></div>
          <button className={styles.button}>Start Free Trial Now</button>
        </div>
      </div>
      <div className={styles.smallContainer}>
        <div className={styles.iconsContainer}>
          <div className={styles.icon}><FaFacebookF /></div>
          <div className={styles.icon}><FaTwitter /></div>
          <div className={styles.icon}><FaYoutube /></div>
          <div className={styles.icon}><FaLinkedinIn /></div>
          <div className={styles.icon}><FaInstagram /></div>
          <div className={styles.icon}><FaTelegramPlane /></div>
        </div>
        <div className={styles.websiteText}>www.niftytrader.com</div>
      </div>
    </div>
  );
};

export default Footer;
