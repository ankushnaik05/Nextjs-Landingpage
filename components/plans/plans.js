// components/plans/plans.js

import React from 'react';
import styles from './plans.module.css';
import svgImage from './image1.png'
import Image from 'next/image';
import svgImage1 from './image.png'

const Plans = () => {
  return (
    <div className={styles.plansContainer}>
      <h1 className={styles.title}>Pricing Plans</h1>
     
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.largeColumn}>
                <p className={styles.largeRow}>Compare plans</p>
                <p className={styles.description}>Choose your workspace plan according to your organization plan</p>
              </th>
              <th className={styles.largeColumn}>
                <p className={styles.boldLarge}>Free <span className={styles.smallText}>/lifetime</span></p>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Create an account</button>
                </div>
              </th>
              <th className={styles.largeColumn}>
                <p className={styles.boldLarge}>₹849 <span className={styles.smallText}>/month</span></p>
                <div className={styles.buttonContainer}>
                  <button className={`${styles.button} ${styles.loginButton}`}>Login to buy</button>
                </div>
              </th>
              <th className={styles.largeColumn}>
                <p className={styles.boldLarge}>₹4310 <span className={styles.smallText}>/year</span></p>
                <div className={styles.buttonContainer}>
                  <button className={`${styles.button} ${styles.loginButton}`}>Login to buy</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.largeColumn}>No of Users</td>
              <td className={styles.largeColumn}>1</td>
              <td className={styles.largeColumn}>
              <p>3</p>
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Users per page</td>
              <td className={styles.largeColumn}>5 Pages</td>
              <td className={styles.largeColumn}>
              <p>50 pages</p>
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Includes essential features to get started</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>More advanced features for increased productivity</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Designing & Development</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Customizable options to meet your specific needs</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Secure data storage</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Email Support</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>24/7 customer support</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Analytics and reporting</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            <tr>
              <td className={styles.largeColumn}>Account Managements</td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage1} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
              <td className={styles.largeColumn}>
              <Image priority src={svgImage} className={styles.okImage} alt="SVG Image" />
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plans;
