import cx from 'classnames';
import style from './style.module.scss';
import isApplicationActive from '../isApplicationActive';

export function Application({ application }) {
  const { name, url, icon } = application;
  const classes = {
    [style.Application__Active]: isApplicationActive(application),
  };
  return (
    <div className={cx(style.Application, classes)}>
      <a href={url} title={name}>
        <div className={style.Application_Content}>
          <img src={icon} alt={name} />
        </div>
      </a>
    </div>
  );
}
