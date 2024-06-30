// components/testimonials/testimonials.js

import React from 'react';
import styles from './testimonials.module.css';
import Image from 'next/image';
import icon from './image.png';
import icon2 from './image2.png';
import icon3 from './image3.png';
import icon4 from './image4.png';
import icon5 from './image5.png'

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <h2 className={styles.title}>Client Testimonials</h2>

      <div className={styles.container}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon} alt="ajay kumar" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>ajay kumar</div>
                <div className={styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon2} alt="Jane Smith" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Jane Smith</div>
                <div className={styles.review}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon3} alt="David Johnson" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>David Johnson</div>
                <div className={styles.review}>Fusce vitae arcu nec orci consequat scelerisque ut in dui. Donec non mi metus.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon} alt="Emily Brown" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Emily Brown</div>
                <div className={styles.review}>Integer euismod vestibulum arcu ac tincidunt. In a libero sapien.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.testimonialsWrapperReverse}>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon2} alt="Michael Lee" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Michael Lee</div>
                <div className={styles.review}>Sed gravida ligula nec ligula pharetra, vel pharetra mauris mattis.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon3} alt="Sophia Wilson" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Sophia Wilson</div>
                <div className={styles.review}>Maecenas rutrum ex nec odio euismod, sit amet blandit lectus malesuada.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon} alt="Daniel Miller" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Daniel Miller</div>
                <div className={styles.review}>Nulla facilisi. Aliquam erat volutpat. In pretium purus nec magna lacinia dapibus.</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.clientInfo}>
              <Image src={icon2} alt="Olivia Davis" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Olivia Davis</div>
                <div className={styles.review}>Vestibulum a libero quis nisi pharetra convallis. Mauris vehicula sed ligula at tristique.</div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.container}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialBox1}>
            <div className={styles.clientInfo}>
              <Image src={icon4} alt="John Doe" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Nilesh Patil</div>
                <div className={styles.review}>Thanks team for providing such an awesome app! You provide voice to open interest data,
                     we don't need to understand what it wants to tell us. 
                    It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
            <div className={styles.clientInfo}>
              <Image src={icon5} alt="Jane Smith" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Anjan Banarjee</div>
                <div className={styles.review}>This is the app I've been looking for for a long time. I couldn't find it anywhere else. 
                    It seems their understanding of 
                    user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon4} alt="John Doe" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Nilesh Patil</div>
                <div className={styles.review}>Thanks team for providing such an awesome app! You provide voice to open interest data,
                     we don't need to understand what it wants to tell us. 
                    It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon4} alt="John Doe" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Nilesh Patil</div>
                <div className={styles.review}>Thanks team for providing such an awesome app! You provide voice to open interest data,
                     we don't need to understand what it wants to tell us. 
                    It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.testimonialsWrapperReverse}>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon5} alt="Jane Smith" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Anjan Banarjee</div>
                <div className={styles.review}>This is the app I've been looking for for a long time. I couldn't find it anywhere else. 
                    It seems their understanding of 
                    user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon4} alt="John Doe" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Nilesh Patil</div>
                <div className={styles.review}>Thanks team for providing such an awesome app! You provide voice to open interest data,
                     we don't need to understand what it wants to tell us. 
                    It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon5} alt="Jane Smith" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Anjan Banarjee</div>
                <div className={styles.review}>This is the app I've been looking for for a long time. I couldn't find it anywhere else. 
                    It seems their understanding of 
                    user needs aligns perfectly with what I was exactly looking for. Thanks, guys, for making this possible!</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialBox1}>
          <div className={styles.clientInfo}>
              <Image src={icon4} alt="John Doe" className={styles.clientImage} />
              <div>
                <div className={styles.clientName}>Nilesh Patil</div>
                <div className={styles.review}>Thanks team for providing such an awesome app! You provide voice to open interest data,
                     we don't need to understand what it wants to tell us. 
                    It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  );
};




export default Testimonials;
