import cx from 'classnames';
import style from './style.module.scss';

export function PlaceholderImage({ className }) {
  return (
    <div className={cx(style.PlaceholderImage, className)} />
  );
}
