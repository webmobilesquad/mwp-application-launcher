import cx from 'classnames';
import { connect } from 'unistore/preact';
import style from './style.module.scss';

function PlaceholderImageWithStore({ className, light }) {
  const classes = {
    [style.PlaceholderImage__Light]: light,
  };
  return (
    <div className={cx(style.PlaceholderImage, className, classes)} />
  );
}

export const PlaceholderImage = connect(
  state => ({ light: state.light }),
)(PlaceholderImageWithStore);
