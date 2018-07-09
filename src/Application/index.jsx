import cx from 'classnames';
import style from './style.module.scss';
import { isUrlActiveForApplication } from '../isApplicationActive';

export function Application({
  application, className, activeClassName, url: currentUrl, onClick,
}) {
  const { name, url, icon } = application;
  const classes = {
    [activeClassName]: isUrlActiveForApplication(currentUrl, application),
  };
  return (
    <li className={cx(style.Application, className, classes)}>
      <a href={url} title={name} onClick={onClick}>
        <img src={icon} alt={name} />
      </a>
    </li>
  );
}
