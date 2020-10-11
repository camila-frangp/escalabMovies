/** @format */

import React from 'react';
import cx from 'classnames';
import css from './input.module.scss';

const Input = ({ className, disabled, onChange, props }) => {
  return (
    <input
      className={cx(css.cntInput, className && className)}
      disabled={disabled}
      onChange={e => onChange(e)}
      {...props}
    />
  );
};

export default Input;
