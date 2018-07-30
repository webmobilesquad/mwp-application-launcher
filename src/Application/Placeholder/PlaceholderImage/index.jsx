import cx from 'classnames';
import style from './style.module.scss';

export function PlaceholderImage({ className, light }) {
  const classes = {
    [style.PlaceholderImage__Light]: light,
  };
  return (
    <div className={cx(style.PlaceholderImage, className, classes)} />
  );
}
