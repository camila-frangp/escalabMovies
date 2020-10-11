/** @format */

import * as React from 'react';
import cx from 'classnames';
import css from './button.module.scss';

const Button = ({ className, disabled, children, onClick, props }) => {
  return (
    <button
      type="button"
      className={cx(css.button, className && className)}
      disabled={disabled}
      onClick={e => onClick(e)}
      {...props}>
      {children}
    </button>
  );
};
export default Button;
