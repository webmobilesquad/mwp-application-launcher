import cx from 'classnames';
import style from './style.module.scss';
import { PlaceholderImage } from './PlaceholderImage';

export function Placeholder({ className }) {
  return (
    <li className={cx(style.Placeholder, className)}>
      <PlaceholderImage className={style.PlaceholderImage} />
    </li>
  );
}
