import cx from 'classnames';
import style from './style.module.scss';
import isApplicationActive from '../isApplicationActive';

export function Application({ application, className, activeClassName }) {
  const { name, url, icon } = application;
  const classes = {
    [activeClassName]: isApplicationActive(application),
  };
  return (
    <li className={cx(style.Application, className, classes)}>
      <a href={url} title={name}>
        <img src={icon} alt={name} />
      </a>
    </li>
  );
}
