import React from 'react';

import styles from './style';

const App = () => {
  return (
    <div className="bg-secondColor w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-secondColor ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      <div className={`bg-secondColor ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Steps
          Collections
          About
          Partners
        </div>
      </div>
    </div>
  );
};

export default App; 