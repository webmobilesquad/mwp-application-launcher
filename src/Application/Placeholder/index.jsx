import style from './style.module.scss';
import { PlaceholderImage } from './PlaceholderImage';

export function Placeholder({ className }) {
  return (
    <li className={className}>
      <PlaceholderImage className={style.PlaceholderImage} />
    </li>
  );
}
