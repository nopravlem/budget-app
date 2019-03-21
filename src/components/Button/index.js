import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const Button = ({ children }) => (
  <button styleName='Button'>
    {children}
  </button>
);

export default CSSModules(Button, styles);
