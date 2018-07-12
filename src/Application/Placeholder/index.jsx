import cx from 'classnames';
import style from './style.module.scss';

export function Placeholder({ className }) {
  return (
    <li className={cx(style.Placeholder, className)}>
      <div className={style.Placeholder_Image} />
    </li>
  );
}
