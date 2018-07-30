import cx from 'classnames';
import style from './style.module.scss';
import { PlaceholderImage } from './PlaceholderImage';

export function Placeholder({ className, light }) {
  return (
    <li className={cx(style.Placeholder, className)}>
      <PlaceholderImage className={style.PlaceholderImage} light={light} />
    </li>
  );
}
